import type { Metadata } from "next";
import { CTA, PageHero, SectionIntro } from "@/components/marketing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "FitStack Platform | The AI-native operating architecture for fitness",
  description: "Explore the reference architecture across growth, agents, member experience, commerce, club operations, and integrations.",
};

const domains = [
  {
    number: "01",
    title: "Acquire and understand",
    outcome: "Create a first-party view of demand.",
    description: "Connect public experiences, profiles, identity resolution, consent, member context, behavioral signals, and dynamic audiences before a campaign or agent acts.",
    capabilities: ["Public web and lead capture", "Identity and consent", "Profiles and member history", "Segments and behavioral signals"],
  },
  {
    number: "02",
    title: "Convert demand",
    outcome: "Turn interest into worked opportunity.",
    description: "Route leads into configurable pipelines where agents, workflows, and staff coordinate follow-up, qualification, scheduling, offers, and human handoff.",
    capabilities: ["Lead CRM and pipelines", "Agentic stage workflows", "Tour availability and booking", "Staff ownership and activity history"],
  },
  {
    number: "03",
    title: "Engage the lifecycle",
    outcome: "Move from sends to orchestration.",
    description: "Build reusable content, one-time broadcasts, ongoing journeys, AI-assisted replies, and event-driven member communication on one governed audience layer.",
    capabilities: ["Email and SMS templates", "Broadcasts and audiences", "Multi-step journeys", "Delivery, engagement, and reply outcomes"],
  },
  {
    number: "04",
    title: "Operate the relationship",
    outcome: "Make every interaction useful to the next one.",
    description: "Unify member records, conversations, feedback, reputation, service-recovery work, and staff context across central and club-level workspaces.",
    capabilities: ["Member and interaction timelines", "Feedback and review routing", "Ticket pipelines and service recovery", "HQ and club operating views"],
  },
  {
    number: "05",
    title: "Run the commercial core",
    outcome: "Own the rules behind revenue and access.",
    description: "Model memberships, passes, services, add-ons, agreements, offers, billing, payments, collections, and accounting as connected business domains.",
    capabilities: ["Membership and service catalog", "Offers, agreements, and entitlements", "Billing, payments, and collections", "Auditable accounting boundaries"],
  },
  {
    number: "06",
    title: "Control access and fulfillment",
    outcome: "Connect what a member bought to what they can use.",
    description: "Represent clubs, areas, schedules, benefits, access profiles, exceptions, and fulfillment rules in the same operating context.",
    capabilities: ["Clubs, areas, and schedules", "Benefits and entitlements", "Access profiles and grants", "Club-specific exceptions"],
  },
];

const surfaces = [
  {
    icon: "↗",
    title: "Public experiences",
    description: "Brand-controlled web, lead capture, offers, and conversion moments that begin a first-party relationship.",
  },
  {
    icon: "⌘",
    title: "HQ administration",
    description: "Shared configuration, governance, reporting, and operating policy across every market and club.",
  },
  {
    icon: "▦",
    title: "Club operations",
    description: "Local staff workflows and context for running the day-to-day member relationship consistently.",
  },
  {
    icon: "◎",
    title: "Member surfaces",
    description: "Connected web, mobile, messaging, voice, and in-club experiences backed by one context layer.",
  },
  {
    icon: "✦",
    title: "Operating agents",
    description: "Governed agents that act through approved tools, workflows, evaluation, and human handoff.",
  },
  {
    icon: "↔",
    title: "Integration layer",
    description: "Durable contracts around systems of record, payments, communications, scheduling, analytics, and APIs.",
  },
];

export default function PlatformPage() {
  return (
    <main className="bg-navy text-white">
      <SiteHeader />
      <PageHero
        eyebrow="The FitStack platform"
        title={<>One operating architecture across the <span className="text-electric-bright">member lifecycle.</span></>}
        description="FitStack connects growth, service, commercial operations, and club delivery around shared identity, consent, context, and workflow."
      />

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="eyebrow">Where the platform shows up</p>
              <h2 className="mt-5 max-w-xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
                Six connected surfaces. One owned platform.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-300 lg:justify-self-end sm:text-lg">
              FitStack is more than a backend or a collection of screens. Each surface serves a distinct operator or member need while sharing the same identity, context, rules, and operating intelligence.
            </p>
          </div>

          <div className="surface-grid mt-12">
            {surfaces.map((surface, index) => (
              <article className="surface-card" key={surface.title}>
                <div className="flex items-start justify-between gap-4">
                  <span className="surface-icon" aria-hidden="true">{surface.icon}</span>
                  <span className="surface-index">0{index + 1}</span>
                </div>
                <h3>{surface.title}</h3>
                <p>{surface.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Platform domains"
            title="Organized around outcomes—not product menus."
            description="Each implementation is composed from a common reference architecture and tailored to the operator’s priorities, systems, and ownership model."
          />
          <div className="mt-16 space-y-5">
            {domains.map((domain) => (
              <article className="platform-domain" key={domain.title}>
                <div className="platform-domain-number">{domain.number}</div>
                <div>
                  <p className="eyebrow">{domain.title}</p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{domain.outcome}</h2>
                  <p className="mt-5 max-w-3xl leading-relaxed text-slate-300">{domain.description}</p>
                </div>
                <ul className="platform-capabilities">
                  {domain.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1c30] px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <SectionIntro
            eyebrow="Integration by design"
            title="Keep the systems that earn their place."
            description="FitStack can treat incumbent club management, payments, communications, scheduling, analytics, and other specialist platforms as systems of record or execution. Clear contracts keep them replaceable instead of letting them define the entire experience."
          />
          <div className="integration-map">
            <div className="integration-core">FitStack context + orchestration</div>
            {['Club systems', 'Payments', 'Communications', 'Scheduling', 'Analytics', 'Public APIs'].map((item) => <div key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <CTA />
      <SiteFooter />
    </main>
  );
}
