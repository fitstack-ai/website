"use client";

import { useState, type FormEvent } from "react";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const organization = String(form.get("organization") || "");
    const role = String(form.get("role") || "");
    const locations = String(form.get("locations") || "");
    const priority = String(form.get("priority") || "");
    const context = String(form.get("context") || "");
    const subject = encodeURIComponent(`FitStack platform discussion — ${organization}`);
    const body = encodeURIComponent(
      `Organization: ${organization}\nRole: ${role}\nLocations: ${locations}\nPriority: ${priority}\n\nContext:\n${context}`,
    );
    setStatus("Opening your email app with these details.");
    window.location.href = `mailto:hello@fitstack.ai?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>Organization<input autoComplete="organization" name="organization" required /></label>
        <label>Your role<input autoComplete="organization-title" name="role" required /></label>
        <label>Number of locations<input inputMode="numeric" min="1" name="locations" type="number" /></label>
        <label>Primary priority<select defaultValue="" name="priority" required><option disabled value="">Choose one</option><option>Platform ownership and strategy</option><option>Growth, marketing, and sales</option><option>Agents and member experience</option><option>Data and integrations</option><option>Commercial core and operations</option><option>Software factory and delivery</option></select></label>
      </div>
      <label>What should we understand?<textarea name="context" placeholder="The operating challenge, systems involved, and outcome that matters most." rows={6} /></label>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <button className="button-primary" type="submit">Start the conversation</button>
        <p aria-live="polite" className="text-sm text-slate-400">{status || "This opens a pre-addressed email in your email app."}</p>
      </div>
    </form>
  );
}
