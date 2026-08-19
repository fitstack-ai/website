import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/marketing";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getInsight, insights } from "@/lib/insights";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return {
    title: `${insight.title} | FitStack Insights`,
    description: insight.description,
    openGraph: {
      title: insight.title,
      description: insight.description,
      type: "article",
      publishedTime: insight.published,
      images: [],
    },
    twitter: {
      card: "summary",
      title: insight.title,
      description: insight.description,
      images: [],
    },
  };
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();

  return (
    <main className="bg-navy text-white">
      <SiteHeader />
      <article>
        <header className="article-hero hero-grid px-6 pb-20 pt-36 sm:pb-28 sm:pt-44">
          <div className="mx-auto max-w-4xl">
            <Link className="text-link" href="/insights">← All insights</Link>
            <p className="eyebrow mt-12">{insight.category}</p>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl">{insight.title}</h1>
            <p className="mt-7 text-xl leading-relaxed text-slate-300">{insight.description}</p>
            <div className="mt-8 flex flex-wrap gap-4 text-xs text-slate-500"><time dateTime={insight.published}>August 19, 2026</time><span>{insight.readTime}</span><span>FitStack AI</span></div>
          </div>
        </header>
        <div className="border-y border-white/10 bg-white/[0.025] px-6 py-20 sm:py-24">
          <div className="article-body mx-auto max-w-3xl">
            <p className="article-intro">{insight.intro}</p>
            {insight.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
          </div>
        </div>
      </article>
      <CTA eyebrow="Continue the conversation" title="Turn the thesis into an operating advantage." description="Discuss the platform layer your organization needs to own and the first journey worth proving." />
      <SiteFooter />
    </main>
  );
}
