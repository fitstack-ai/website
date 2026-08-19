import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/marketing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Discuss your platform | FitStack",
  description: "Start a conversation about an owned, AI-native operating platform for your fitness organization.",
};

export default function ContactPage() {
  return (
    <main className="bg-navy text-white">
      <SiteHeader />
      <PageHero
        eyebrow="Discuss your platform"
        title={<>Start with the operating outcome that <span className="text-electric-bright">matters most.</span></>}
        description="Tell us where the current stack is creating friction, what your organization needs to control, and what a successful first proof would change."
      />
      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">A useful first conversation</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">No generic demo. No feature checklist.</h2>
            <p className="mt-5 leading-relaxed text-slate-300">We’ll focus on your business model, systems, data, ownership priorities, and the first member or operator journey worth proving.</p>
            <p className="mt-8 text-sm leading-relaxed text-slate-400">Prefer to write directly?</p>
            <a className="mt-2 inline-block text-link" href="mailto:hello@fitstack.ai">hello@fitstack.ai →</a>
          </div>
          <ContactForm />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
