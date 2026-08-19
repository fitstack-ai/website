import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero hero-grid px-6 pb-20 pt-36 sm:pb-28 sm:pt-44">
      <div className="hero-glow" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl md:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          {description}
        </p>
        {children ? <div className="mt-9">{children}</div> : null}
      </div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-5">{title}</h2>
      {description ? (
        <p className="mt-6 text-lg leading-relaxed text-slate-300">{description}</p>
      ) : null}
    </div>
  );
}

export function NumberCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="number-card">
      <span className="font-mono text-xs text-electric-bright">{number}</span>
      <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">{title}</h3>
      <div className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">{children}</div>
    </article>
  );
}

export function CTA({
  eyebrow = "Build what comes next",
  title = "Your platform. Your data. Your roadmap.",
  description = "Start with the business outcome that matters most. We’ll map the architecture and the path to ownership.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="cta-panel mx-auto max-w-7xl">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            {description}
          </p>
        </div>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link className="button-primary" href="/contact">Discuss your platform</Link>
          <Link className="button-secondary" href="/architecture">Explore the architecture</Link>
        </div>
      </div>
    </section>
  );
}

export function TextLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <Link className="text-link" href={href}>
      {children}<span aria-hidden="true"> →</span>
    </Link>
  );
}
