import Link from "next/link";
import { CTA, NumberCard, SectionIntro, TextLink } from "@/components/marketing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { insights } from "@/lib/insights";

const architectureLayers = [
  ["Experiences", "Member, staff, web, mobile, voice, SMS, and email"],
  ["Operating intelligence", "Agents, deterministic workflows, tools, evaluation, and handoff"],
  ["Context layer", "Identity, consent, member history, domain services, and data"],
  ["Client-owned foundation", "Your repository, infrastructure, integrations, and roadmap"],
];

const platformDomains = [
  ["Acquire & understand", "Public experiences, identity, consent, profiles, signals, and audiences."],
  ["Convert demand", "Lead pipelines, agent and staff workflows, scheduling, offers, and handoffs."],
  ["Engage the lifecycle", "Campaigns, journeys, templates, notifications, and contextual conversations."],
  ["Operate relationships", "Member records, staff workspaces, feedback, reputation, and service recovery."],
  ["Run the commercial core", "Memberships, passes, services, agreements, billing, payments, and collections."],
  ["Control access", "Clubs, areas, schedules, entitlements, access profiles, and exceptions."],
];

const factorySteps = ["Intent", "Task contract", "Parallel build", "Automated review", "Verification", "Deployment", "Learned pattern"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-navy text-white">
      <SiteHeader />

      <section className="hero-grid relative isolate flex min-h-[92vh] items-center px-6 pb-24 pt-32 sm:pt-40">
        <div className="hero-glow" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="eyebrow mb-6">AI-native reference architecture for fitness</p>
            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] sm:text-6xl md:text-7xl">
              Own the platform that
              <span className="block text-electric-bright">runs your business.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              FitStack gives enterprise gym operators an owned operating platform—
              complete with agents, integrations, workflows, and a software factory
              built to keep evolving after the first deployment.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link className="button-primary" href="/contact">Discuss your platform</Link>
              <Link className="button-secondary" href="/architecture">Explore the architecture</Link>
            </div>
          </div>

          <aside className="ownership-panel" aria-label="What your organization owns">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">What you own</p>
              <span className="status-dot">Built to transfer</span>
            </div>
            <ul className="mt-3 divide-y divide-white/10">
              {[
                ["01", "The code and repository"],
                ["02", "The data and context layer"],
                ["03", "The infrastructure accounts"],
                ["04", "The operating roadmap"],
                ["05", "The capability to keep building"],
              ].map(([number, item]) => (
                <li className="flex items-center gap-5 py-5" key={item}>
                  <span className="font-mono text-xs text-electric-bright">{number}</span>
                  <span className="text-base text-slate-100 sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <p className="text-2xl font-medium tracking-tight text-white sm:text-3xl">Not another SaaS layer.</p>
          <p className="max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            FitStack is a proven starting architecture plus forward-deployed expertise.
            We adapt it to your organization, connect the systems worth keeping, and
            embed a durable way to operate and improve the platform you own.
          </p>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="The executive case"
            title="Technology becomes a strategic asset—not a stack of rented constraints."
            description="FitStack connects platform decisions to the outcomes enterprise fitness leaders are accountable for."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <NumberCard number="01" title="Strategic control">Own the roadmap beneath the member and operator experience.</NumberCard>
            <NumberCard number="02" title="Connected growth">Turn acquisition, conversations, sales work, and lifecycle engagement into one operating loop.</NumberCard>
            <NumberCard number="03" title="Economic leverage">Consolidate point workflows deliberately and keep vendor economics visible and direct.</NumberCard>
            <NumberCard number="04" title="Faster adaptation">Use shared context and a repeatable factory to ship change without starting over.</NumberCard>
          </div>
          <div className="mt-9"><TextLink href="/why-fitstack">See the case for ownership</TextLink></div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1c30] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="The platform"
            title="One operating architecture across the member lifecycle."
            description="Every domain shares identity, consent, context, and operational history—so staff, software, and agents can move the same outcome forward."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
            {platformDomains.map(([title, description], index) => (
              <article className="domain-cell" key={title}>
                <span className="font-mono text-xs text-electric-bright">0{index + 1}</span>
                <h3 className="mt-8 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">{description}</p>
              </article>
            ))}
          </div>
          <div className="mt-9"><TextLink href="/platform">Explore the complete platform</TextLink></div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <SectionIntro
              eyebrow="Architecture at a glance"
              title="Context beneath every experience."
              description="The interface can change without breaking the operating truth beneath it."
            />
            <div className="mt-8"><TextLink href="/architecture">Inspect the architecture</TextLink></div>
          </div>
          <div className="grid gap-3">
            {architectureLayers.map(([label, detail], index) => (
              <div className="architecture-row" key={label}>
                <span className="architecture-index">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold text-white">{label}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400 sm:text-base">{detail}</p>
                </div>
              </div>
            ))}
            <div className="integration-rail">
              <span>Systems of record</span><span>Payments</span><span>Communications</span><span>Specialist services</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="agent-panel mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow">Operating agents</p>
              <h2 className="section-title mt-5">Agents that participate in the operation—not just the conversation.</h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Voice, SMS, email, and web agents work from shared context, call governed tools,
                follow deterministic workflows, and hand off to people with the history intact.
              </p>
              <div className="mt-8"><TextLink href="/architecture#agents">See the operating-agent model</TextLink></div>
            </div>
            <div className="agent-sequence" aria-label="Operating agent sequence">
              {["Understand context", "Choose a bounded action", "Use a governed tool", "Record the outcome", "Hand off when needed"].map((step, index) => (
                <div className="agent-step" key={step}><span>0{index + 1}</span><p>{step}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="The software factory"
            title="The platform ships with a way to keep building it."
            description="Repository-native instructions, skills, standards, work planning, automated review, and deployment turn hard-won practices into a repeatable delivery system."
          />
          <ol className="factory-flow mt-14">
            {factorySteps.map((step, index) => (
              <li key={step}><span>0{index + 1}</span><strong>{step}</strong></li>
            ))}
          </ol>
          <div className="mt-9"><TextLink href="/software-factory">See how the factory works</TextLink></div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            align="center"
            eyebrow="A different ownership model"
            title="A platform partner should make you more capable—not more dependent."
          />
          <div className="comparison-table mt-14">
            <div className="comparison-head"><span>Traditional SaaS</span><span>FitStack</span></div>
            {[
              ["Access to a vendor product", "Ownership of a client-specific platform"],
              ["Roadmap set for the market", "Roadmap aligned to your strategy"],
              ["Data spread across product silos", "Shared context under your control"],
              ["Configuration at the edges", "Code-level extension where it matters"],
              ["Dependency grows over time", "Capability transfers over time"],
            ].map(([traditional, fitstack]) => (
              <div className="comparison-row" key={traditional}><span>{traditional}</span><span>{fitstack}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1c30] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Forward deployed"
            title="Start with the operation. Embed the architecture. Transfer the capability."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["01", "Map", "Priorities, journeys, data, vendors, economics, and constraints."],
              ["02", "Shape", "Modules, boundaries, ownership, outcomes, and delivery sequence."],
              ["03", "Embed", "Client-owned deployment, integrations, agents, and live workflows."],
              ["04", "Evolve", "Operate the factory, transfer capability, and improve continuously."],
            ].map(([number, title, copy]) => (
              <NumberCard key={title} number={number} title={title}>{copy}</NumberCard>
            ))}
          </div>
          <div className="mt-9"><TextLink href="/how-we-work">See the engagement model</TextLink></div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="eyebrow">Built from experience</p>
            <h2 className="section-title mt-5">Fitness fluency meets platform engineering.</h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              FitStack is led by a technologist with three decades building platforms,
              more than two decades inside the fitness industry, and firsthand experience
              building and successfully exiting a gym-management software business.
            </p>
            <div className="mt-8"><TextLink href="/about">Meet the builder behind FitStack</TextLink></div>
          </div>
          <div className="proof-strip">
            <div><strong>30</strong><span>years building technology</span></div>
            <div><strong>20+</strong><span>years in fitness</span></div>
            <div><strong>1</strong><span>gym platform exit</span></div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionIntro eyebrow="Insights" title="Ideas for the AI-native fitness operator." />
            <TextLink href="/insights">Read all insights</TextLink>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {insights.map((insight) => (
              <article className="insight-card" key={insight.slug}>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-electric-bright">{insight.category}</p>
                <h3 className="mt-7 text-2xl font-semibold leading-tight tracking-tight text-white">{insight.title}</h3>
                <p className="mt-5 text-sm leading-relaxed text-slate-400">{insight.description}</p>
                <div className="mt-8"><TextLink href={`/insights/${insight.slug}`}>Read article</TextLink></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <SiteFooter />
    </main>
  );
}
