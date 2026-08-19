import type { Metadata } from "next";
import { CTA, NumberCard, PageHero, SectionIntro } from "@/components/marketing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "FitStack Software Factory | A durable system for AI-assisted delivery",
  description: "Repository-native skills, standards, workflows, review, verification, and deployment for continuously evolving an owned fitness platform.",
};

const flow = [
  ["01", "Intent", "Start with a business outcome, operating constraint, and clear decision rights."],
  ["02", "Task contract", "Translate the outcome into bounded scope, dependencies, acceptance criteria, and validation."],
  ["03", "Parallel build", "Use isolated worktrees and coordinated lanes without losing architecture or ownership boundaries."],
  ["04", "Automated review", "Check code, scope, layers, policy, tests, and shared-zone conflicts before integration."],
  ["05", "Verification", "Exercise the real surface, validate failure paths, and tie evidence to the exact change."],
  ["06", "Deployment", "Provision, configure, seed, publish, and operate in client-owned environments."],
  ["07", "Learned pattern", "Turn durable lessons into instructions, skills, tests, and playbooks for the next cycle."],
];

export default function SoftwareFactoryPage() {
  return (
    <main className="bg-navy text-white">
      <SiteHeader />
      <PageHero
        eyebrow="The software factory"
        title={<>A platform is only durable if the organization can <span className="text-electric-bright">keep changing it.</span></>}
        description="FitStack ships with a repository-native delivery system that turns architecture, operating standards, and AI-assisted development into repeatable software outcomes."
      />

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="The loop" title="From business intent to a stronger operating system." />
          <ol className="factory-timeline mt-14">
            {flow.map(([number, title, copy]) => (
              <li key={title}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="What is embedded"
            title="The standards and tools travel with the platform."
            description="The durable delivery knowledge lives in the client-owned repository, not in a consultant’s private notebook or a proprietary management layer."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <NumberCard number="01" title="Agent instructions">Architecture rules, safety boundaries, conventions, and task-specific guidance.</NumberCard>
            <NumberCard number="02" title="Reusable skills">Repeatable workflows for deployment, verification, components, integrations, and platform operations.</NumberCard>
            <NumberCard number="03" title="Quality gates">Automated tests, policy checks, structured review, and evidence-backed handoff.</NumberCard>
            <NumberCard number="04" title="Delivery automation">Scaffolding, provisioning, environment configuration, seeding, deployment, and upgrade paths.</NumberCard>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1c30] px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <SectionIntro
            eyebrow="Portable by design"
            title="Use models as leverage—not as a new source of lock-in."
            description="The factory is built around GitHub, repository artifacts, explicit standards, and interchangeable AI tooling. Models can change. The architecture, tests, decisions, and operating knowledge remain yours."
          />
          <div className="portable-panel">
            <p>GitHub + model providers</p>
            <div aria-hidden="true">↓</div>
            <strong>Client-owned standards, skills, workflows, and evidence</strong>
            <div aria-hidden="true">↓</div>
            <p>Deployable software in client-owned environments</p>
          </div>
        </div>
      </section>

      <CTA title="Build the platform—and the capability to evolve it." description="See how the factory can operate with your internal team, a FitStack-led delivery lane, or a deliberate transition between the two." />
      <SiteFooter />
    </main>
  );
}
