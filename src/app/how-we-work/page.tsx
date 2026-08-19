import type { Metadata } from "next";
import { CTA, PageHero, SectionIntro } from "@/components/marketing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "How FitStack Works | Forward-deployed platform delivery",
  description: "Map, shape, embed, and evolve an owned fitness platform with a forward-deployed technology partner.",
};

const stages = [
  ["01", "Map", "We start inside the operation: strategic priorities, member journeys, data, vendors, economics, constraints, and the outcomes leadership needs to own.", ["Operating journey map", "System and data inventory", "Ownership and risk decisions", "Outcome scorecard"]],
  ["02", "Shape", "We compose the reference architecture around the organization—not the other way around—and choose the boundaries, sequence, and proof points that make the transformation manageable.", ["Target architecture", "Integration boundaries", "Module and migration sequence", "First proof workflow"]],
  ["03", "Embed", "We deploy into client-owned accounts, connect systems, configure agents and workflows, and work alongside the teams who will operate the result.", ["Client-owned environments", "Live integrations", "Agents and workflows", "Verified operating journeys"]],
  ["04", "Evolve", "We run the software factory with your team, convert lessons into durable patterns, and transfer increasing capability without forcing an artificial finish line.", ["Shared delivery cadence", "Skills and playbooks", "Roadmap execution", "Capability transfer"]],
];

export default function HowWeWorkPage() {
  return (
    <main className="bg-navy text-white">
      <SiteHeader />
      <PageHero
        eyebrow="How we work"
        title={<>Forward deployed. <span className="text-electric-bright">Built to transfer.</span></>}
        description="FitStack combines a proven reference architecture with hands-on platform leadership. We work from strategy through live operation, then make the organization more capable with every cycle."
      />

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="The engagement" title="Four stages. One continuous line from business intent to operating capability." />
          <div className="mt-16 space-y-5">
            {stages.map(([number, title, description, outputs]) => (
              <article className="engagement-stage" key={title as string}>
                <span>{number as string}</span>
                <div><h2>{title as string}</h2><p>{description as string}</p></div>
                <ul>{(outputs as string[]).map((output) => <li key={output}>{output}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <SectionIntro
            eyebrow="A productized service"
            title="More accountable than consulting. More adaptable than SaaS."
            description="The reference architecture provides a concrete starting point. The engagement provides the judgment, implementation, and operating continuity required to make it fit."
          />
          <div className="space-y-5">
            {[
              ["No per-seat software dependency", "Scope is based on the platform outcomes, modules, and delivery relationship—not access to a shared tenant."],
              ["Client-owned vendor relationships", "Infrastructure and enabling services sit in accounts the organization controls."],
              ["Flexible operating model", "FitStack can remain embedded, work alongside an internal team, or transfer increasing ownership over time."],
              ["One accountable architecture", "Strategy, code, agents, integrations, workflows, deployment, and operating evidence stay connected."],
            ].map(([title, copy]) => <article className="principle-card" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <CTA title="Choose the first operating journey worth owning." description="A focused first workflow can prove the architecture, the delivery model, and the organizational fit before broader expansion." />
      <SiteFooter />
    </main>
  );
}
