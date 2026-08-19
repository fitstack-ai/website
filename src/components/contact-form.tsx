"use client";

import { useState, type FormEvent } from "react";

type ContactDraft = {
  mailtoUrl: string;
  outlookUrl: string;
  message: string;
};

export function ContactForm() {
  const [draft, setDraft] = useState<ContactDraft | null>(null);
  const [copyStatus, setCopyStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const organization = String(form.get("organization") || "");
    const role = String(form.get("role") || "");
    const locations = String(form.get("locations") || "");
    const priority = String(form.get("priority") || "");
    const context = String(form.get("context") || "");
    const subject = `FitStack platform discussion — ${organization}`;
    const message = `Name: ${name}\nWork email: ${email}\nOrganization: ${organization}\nRole: ${role}\nLocations: ${locations || "Not provided"}\nPriority: ${priority}\n\nContext:\n${context || "Not provided"}`;
    const encodedSubject = encodeURIComponent(subject);
    const encodedMessage = encodeURIComponent(message);

    setCopyStatus("");
    setDraft({
      mailtoUrl: `mailto:hello@fitstack.ai?subject=${encodedSubject}&body=${encodedMessage}`,
      outlookUrl: `https://outlook.office.com/mail/deeplink/compose?to=hello%40fitstack.ai&subject=${encodedSubject}&body=${encodedMessage}`,
      message: `${subject}\n\nTo: hello@fitstack.ai\n\n${message}`,
    });
  }

  async function copyMessage() {
    if (!draft) return;

    try {
      await navigator.clipboard.writeText(draft.message);
      setCopyStatus("Copied. Paste it into any email or message app.");
    } catch {
      setCopyStatus("Copy was blocked by the browser. Select the details above and copy them manually.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Your name<input autoComplete="name" name="name" required /></label>
        <label>Work email<input autoComplete="email" name="email" required type="email" /></label>
        <label>Organization<input autoComplete="organization" name="organization" required /></label>
        <label>Your role<input autoComplete="organization-title" name="role" required /></label>
        <label>Number of locations<input inputMode="numeric" min="1" name="locations" type="number" /></label>
        <label>Primary priority<select defaultValue="" name="priority" required><option disabled value="">Choose one</option><option>Platform ownership and strategy</option><option>Growth, marketing, and sales</option><option>Agents and member experience</option><option>Data and integrations</option><option>Commercial core and operations</option><option>Software factory and delivery</option></select></label>
      </div>
      <label>What should we understand?<textarea name="context" placeholder="The operating challenge, systems involved, and outcome that matters most." rows={6} /></label>
      <button className="button-primary justify-self-start" type="submit">Prepare the conversation</button>

      {draft ? (
        <div className="contact-handoff" aria-live="polite">
          <div>
            <p className="text-sm font-semibold text-white">Your message is ready.</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">Choose the route that works on this device. Your completed details are preserved in every option.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="button-primary" href={draft.outlookUrl} rel="noreferrer" target="_blank">Open Outlook on the web</a>
            <a className="button-secondary" href={draft.mailtoUrl}>Open default email app</a>
            <button className="contact-copy" onClick={copyMessage} type="button">Copy message</button>
          </div>
          <details className="contact-preview">
            <summary>Preview prepared message</summary>
            <pre>{draft.message}</pre>
          </details>
          <p className="text-xs leading-relaxed text-slate-500">Nothing is sent until you review and send it from your chosen email app.</p>
          {copyStatus ? <p className="text-sm text-electric-bright">{copyStatus}</p> : null}
        </div>
      ) : (
        <p className="text-sm text-slate-400">We’ll prepare a pre-addressed message you can open in Outlook, your default email app, or copy anywhere.</p>
      )}
    </form>
  );
}
