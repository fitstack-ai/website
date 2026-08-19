import type { Metadata } from "next";
import { CTA, NumberCard, PageHero, SectionIntro } from "@/components/marketing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About FitStack | Fitness experience meets AI-native platform engineering",
  description: "FitStack combines decades of fitness-industry leadership, platform building, and forward-deployed engineering.",
};

export default function AboutPage() {
  return (
    <main className="bg-navy text-white">
      <SiteHeader />
      <PageHero
        eyebrow="About FitStack"
        title={<>Built by someone who has lived the <span className="text-electric-bright">whole platform cycle.</span></>}
        description="From operating inside major fitness organizations to building, scaling, and successfully exiting a gym-management software business—FitStack is grounded in what it actually takes to turn technology into an operating advantage."
      />

      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Matt Masteller</p>
            <h2 className="section-title mt-5">Platform builder. Fitness operator. Forward-deployed technology leader.</h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-slate-300">
            <p>Matt brings three decades of experience across software architecture, product strategy, finance, AI-native systems, and technology leadership.</p>
            <p>His fitness-industry experience spans more than two decades, including technology leadership inside a major gym chain, building the operating arm of a fitness-focused investment company, creating a gym-management software platform, and guiding modern growth and member-experience systems.</p>
            <p>FitStack is the synthesis of those experiences: a practical path for operators to own the platform, data, and delivery capability that increasingly define their business.</p>
            <div className="flex flex-wrap gap-4 pt-3">
              <a className="button-secondary" href="https://www.mattmasteller.com/" rel="noreferrer" target="_blank">Matt’s background</a>
              <a className="button-secondary" href="https://www.linkedin.com/in/mattmasteller/" rel="noreferrer" target="_blank">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Experience that compounds" title="The background behind the architecture." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <NumberCard number="30" title="Years in technology">Custom platforms, product strategy, cloud systems, data, automation, and AI-native delivery.</NumberCard>
            <NumberCard number="20+" title="Years in fitness">Hands-on leadership across club operations, member experience, marketing, finance, and technology.</NumberCard>
            <NumberCard number="01" title="Successful software exit">Firsthand experience building a gym-management platform into a durable software business.</NumberCard>
            <NumberCard number="∞" title="Operator perspective">A bias toward outcomes, understandable systems, direct economics, and long-term control.</NumberCard>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0d1c30] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Operating belief" title="Technology should expand an organization’s agency." />
          <blockquote className="belief-quote">“The goal is not to make the client dependent on FitStack. The goal is to help the client own a platform—and the capability to keep making it better.”</blockquote>
        </div>
      </section>

      <CTA />
      <SiteFooter />
    </main>
  );
}
