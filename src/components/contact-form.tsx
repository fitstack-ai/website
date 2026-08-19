"use client";

import { useState, type FormEvent } from "react";

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setSubmitState("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          context: String(form.get("context") || ""),
          email: String(form.get("email") || ""),
          locations: String(form.get("locations") || ""),
          name: String(form.get("name") || ""),
          organization: String(form.get("organization") || ""),
          priority: String(form.get("priority") || ""),
          role: String(form.get("role") || ""),
          submissionId: crypto.randomUUID(),
          website: String(form.get("website") || ""),
        }),
      });

      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) {
        throw new Error(result.error || "The inquiry could not be delivered.");
      }

      formElement.reset();
      setSubmitState("success");
      setMessage("Your inquiry is on its way. We’ll follow up from hello@fitstack.ai.");
    } catch (error) {
      setSubmitState("error");
      setMessage(error instanceof Error ? error.message : "The inquiry could not be delivered. Please try again.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-honeypot" aria-hidden="true">
        <label>Website<input autoComplete="off" name="website" tabIndex={-1} /></label>
      </div>
      <div className="form-grid">
        <label>Your name<input autoComplete="name" maxLength={120} name="name" required /></label>
        <label>Work email<input autoComplete="email" maxLength={254} name="email" required type="email" /></label>
        <label>Organization<input autoComplete="organization" maxLength={160} name="organization" required /></label>
        <label>Your role<input autoComplete="organization-title" maxLength={160} name="role" required /></label>
        <label>Number of locations<input inputMode="numeric" max={100000} min="1" name="locations" type="number" /></label>
        <label>Primary priority<select defaultValue="" name="priority" required><option disabled value="">Choose one</option><option>Platform ownership and strategy</option><option>Growth, marketing, and sales</option><option>Agents and member experience</option><option>Data and integrations</option><option>Commercial core and operations</option><option>Software factory and delivery</option></select></label>
      </div>
      <label>What should we understand?<textarea maxLength={5000} name="context" placeholder="The operating challenge, systems involved, and outcome that matters most." rows={6} /></label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button className="button-primary" disabled={submitState === "sending"} type="submit">
          {submitState === "sending" ? "Sending…" : "Start the conversation"}
        </button>
        <p
          aria-live="polite"
          className={submitState === "success" ? "contact-status contact-status-success" : submitState === "error" ? "contact-status contact-status-error" : "contact-status"}
          role={submitState === "error" ? "alert" : "status"}
        >
          {message || "Your inquiry is sent securely to the FitStack team."}
        </p>
      </div>
    </form>
  );
}
