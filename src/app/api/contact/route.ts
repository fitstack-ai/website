const MAX_REQUEST_BYTES = 20_000;

type ContactSubmission = {
  context?: unknown;
  email?: unknown;
  locations?: unknown;
  name?: unknown;
  organization?: unknown;
  priority?: unknown;
  role?: unknown;
  submissionId?: unknown;
  website?: unknown;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function isSubmissionId(value: string) {
  return /^[0-9a-f-]{36}$/i.test(value);
}

function jsonError(message: string, status: number) {
  return Response.json({ error: message }, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return jsonError("The inquiry is too large to send.", 413);
  }

  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return jsonError("This submission origin is not allowed.", 403);
      }
    } catch {
      return jsonError("This submission origin is not valid.", 403);
    }
  }

  let submission: ContactSubmission;
  try {
    submission = (await request.json()) as ContactSubmission;
  } catch {
    return jsonError("The inquiry could not be read.", 400);
  }

  // Quietly accept honeypot submissions without spending email quota.
  if (clean(submission.website, 200)) {
    return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
  }

  const name = clean(submission.name, 120);
  const email = clean(submission.email, 254).toLowerCase();
  const organization = clean(submission.organization, 160);
  const role = clean(submission.role, 160);
  const locations = clean(submission.locations, 20);
  const priority = clean(submission.priority, 160);
  const context = clean(submission.context, 5_000);
  const submissionId = clean(submission.submissionId, 36);

  if (!name || !isEmail(email) || !organization || !role || !priority) {
    return jsonError("Please complete all required fields with a valid work email.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return jsonError("Email delivery is not configured yet.", 503);
  }

  const to = process.env.CONTACT_TO_EMAIL || "hello@fitstack.ai";
  const from = process.env.RESEND_FROM_EMAIL || "FitStack Website <website@fitstack.ai>";
  const subject = `FitStack platform inquiry — ${organization}`;
  const text = [
    "New FitStack website inquiry",
    "",
    `Name: ${name}`,
    `Work email: ${email}`,
    `Organization: ${organization}`,
    `Role: ${role}`,
    `Locations: ${locations || "Not provided"}`,
    `Priority: ${priority}`,
    "",
    "Context:",
    context || "Not provided",
  ].join("\n");

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": isSubmissionId(submissionId) ? submissionId : crypto.randomUUID(),
        "User-Agent": "FitStack-Website/1.0",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text,
      }),
    });
  } catch {
    console.error("Resend contact delivery could not connect");
    return jsonError("The inquiry could not be delivered. Please try again shortly.", 502);
  }

  if (!response.ok) {
    console.error("Resend contact delivery failed", { status: response.status });
    return jsonError("The inquiry could not be delivered. Please try again shortly.", 502);
  }

  return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
