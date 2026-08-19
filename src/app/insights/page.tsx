import type { Metadata } from "next";
import { PageHero, TextLink } from "@/components/marketing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { insights } from "@/lib/insights";

export const metadata: Metadata = {
  title: "FitStack Insights | Platform ownership and AI-native fitness operations",
  description: "Ideas, architecture notes, and field perspectives for fitness leaders building an owned, AI-native operating platform.",
};

export default function InsightsPage() {
  return (
    <main className="bg-navy text-white">
      <SiteHeader />
      <PageHero
        eyebrow="Insights"
        title={<>Ideas for the operator building <span className="text-electric-bright">what comes next.</span></>}
        description="Platform ownership, AI-native operations, growth systems, architecture, and lessons from building inside the fitness industry."
      />
      <section className="border-y border-white/10 bg-white/[0.025] px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-3">
            {["Platform ownership", "AI-native operations", "Growth and member lifecycle", "Architecture and engineering", "Field notes"].map((category) => <span className="surface-pill" key={category}>{category}</span>)}
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {insights.map((insight) => (
              <article className="insight-card" key={insight.slug}>
                <p className="eyebrow">{insight.category}</p>
                <h2 className="mt-7 text-2xl font-semibold leading-tight tracking-tight">{insight.title}</h2>
                <p className="mt-5 text-sm leading-relaxed text-slate-400">{insight.description}</p>
                <p className="mt-5 text-xs text-slate-500">{insight.readTime}</p>
                <div className="mt-8"><TextLink href={`/insights/${insight.slug}`}>Read article</TextLink></div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
