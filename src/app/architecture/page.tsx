import type { Metadata } from "next";
import { CTA, NumberCard, PageHero, SectionIntro } from "@/components/marketing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "FitStack Architecture | Client-owned, agent-ready, integration-first",
  description: "How experiences, operating agents, workflows, domain services, data, and integrations form an owned fitness platform.",
};

export default function ArchitecturePage() {
  return (
    <main className="bg-navy text-white">
      <SiteHeader />
      <PageHero
        eyebrow="Architecture"
        title={<>Built for the interface you use today—and the one that <span className="text-electric-bright">replaces it tomorrow.</span></>}
        description="FitStack separates experiences from the governed context, domain rules, and workflows that make them useful. Your organization owns the durable layers."
      />

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="The system" title="Four layers. One operational truth." />
          <div className="architecture-stack mt-14">
            {[
              ["01", "Experiences", "Public web, HQ administration, club operations, member surfaces, mobile, voice, SMS, and email."],
              ["02", "Operating intelligence", "Agents, tools, deterministic workflows, evaluation, human handoff, and observability."],
              ["03", "Shared context and services", "Identity, consent, member history, clubs, leads, communications, agreements, and domain rules."],
              ["04", "Client-owned foundation", "Repository, data, infrastructure accounts, configuration, documentation, and deployment history."],
            ].map(([number, title, description]) => (
              <div className="architecture-layer" key={title}>
                <span>{number}</span><h3>{title}</h3><p>{description}</p>
              </div>
            ))}
          </div>
          <div className="architecture-integrations">
            <span>Systems of record</span><span>Payments</span><span>Communications</span><span>Scheduling</span><span>Specialist services</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32" id="agents">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Operating agents"
            title="A shared agent core with channel-specific behavior."
            description="Voice, SMS, email, and web interactions use common identity, history, policy, and tools while respecting the constraints of each channel."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <NumberCard number="01" title="Know the context">Resolve the person, club, consent, history, and active work before acting.</NumberCard>
            <NumberCard number="02" title="Use bounded tools">Read availability, create records, update workflows, and send links through governed actions.</NumberCard>
            <NumberCard number="03" title="Follow policy">Apply deterministic routing, communication rules, failure paths, and human escalation.</NumberCard>
            <NumberCard number="04" title="Learn visibly">Record messages, outcomes, evaluation, and operational events for staff and analytics.</NumberCard>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1c30] px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">What you own</p>
            <h2 className="section-title mt-5">The complete operating foundation.</h2>
          </div>
          <ul className="ownership-list">
            {[
              "The application and service repositories",
              "The data model and operational history",
              "Infrastructure and vendor accounts",
              "Agent instructions, tools, and evaluations",
              "Workflows, policies, and integration contracts",
              "Deployment automation and operating documentation",
            ].map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Engineering principles" title="Designed to stay understandable as it grows." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Domain-driven", "Business rules live in focused services shared across applications and interfaces."],
              ["Event-aware", "Reliable workflows coordinate long-running work, retries, timing, and outcomes."],
              ["Integration-first", "External systems meet explicit boundaries instead of leaking across the platform."],
              ["Brand-isolated", "Client experiences can diverge while reusable platform capabilities continue to improve."],
              ["Auditable", "Consent, agent actions, operational events, and critical changes leave visible history."],
              ["Portable", "Client-owned code and accounts preserve leverage across vendors, models, and delivery partners."],
            ].map(([title, copy]) => <article className="principle-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <CTA title="Inspect the architecture against your operation." description="Start with one member journey, the systems it crosses, and the context your organization needs to own." />
      <SiteFooter />
    </main>
  );
}
