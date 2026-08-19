import type { Metadata } from "next";
import { CTA, NumberCard, PageHero, SectionIntro } from "@/components/marketing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Why FitStack | Own the platform that runs your fitness business",
  description: "The strategic case for an owned, AI-native operating platform for enterprise gym operators.",
};

export default function WhyFitStackPage() {
  return (
    <main className="bg-navy text-white">
      <SiteHeader />
      <PageHero
        eyebrow="Why FitStack"
        title={<>The next operating advantage is <span className="text-electric-bright">ownership.</span></>}
        description="AI is changing how members interact, how teams work, and how software gets built. Operators who control their context layer can adapt. Operators who rent every layer inherit someone else’s priorities."
      />

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="The problem"
            title="A stack of useful tools can still become an operating constraint."
            description="Point solutions optimize individual moments while fragmenting identity, consent, history, workflow, and economics across the business. AI magnifies that fragmentation because agents need the whole context—not one vendor’s slice."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <NumberCard number="01" title="Rented roadmap">Critical experiences wait behind a vendor’s market priorities.</NumberCard>
            <NumberCard number="02" title="Broken context">Member history and operational truth stop at product boundaries.</NumberCard>
            <NumberCard number="03" title="Expensive handoffs">Teams rekey data and reconcile workflows across disconnected systems.</NumberCard>
            <NumberCard number="04" title="AI without agency">Agents can converse, but cannot safely complete real work.</NumberCard>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="The executive lens" title="One platform decision. Four kinds of leverage." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
            {[
              ["CEO", "Strategic control", "Own the foundation for new member experiences, business models, and operating advantages."],
              ["CMO & Sales", "Connected growth", "Link audience, conversation, lead work, scheduling, and lifecycle engagement around one person."],
              ["CFO", "Visible economics", "Create a deliberate path to workflow consolidation, direct vendor relationships, and a durable software asset."],
              ["Technology", "Extensible architecture", "Start from proven domains and patterns without accepting another closed system or blank-sheet program."],
            ].map(([role, title, description]) => (
              <article className="domain-cell" key={role}>
                <p className="eyebrow">{role}</p>
                <h3 className="mt-7 text-2xl font-semibold">{title}</h3>
                <p className="mt-4 leading-relaxed text-slate-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1c30] px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Beyond build versus buy</p>
            <h2 className="section-title mt-5">Own the differentiating layer. Integrate the rest.</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-slate-300">
            <p>FitStack does not assume every capability should be rebuilt. Systems of record, payments, communications, and specialist services can remain connected through explicit boundaries.</p>
            <p>Your organization owns the repository, data, orchestration, business context, infrastructure accounts, and product roadmap—the parts that determine how the business actually operates.</p>
            <p>A proven reference architecture and software factory make that ownership practical without requiring a multi-year greenfield transformation.</p>
          </div>
        </div>
      </section>

      <CTA title="Stop renting the layer that creates your advantage." description="Map the systems worth keeping, the workflows worth owning, and the first operating journey to prove." />
      <SiteFooter />
    </main>
  );
}
