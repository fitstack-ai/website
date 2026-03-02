"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal();
  return (
    <div ref={ref} className={`fade-in ${className}`}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-navy text-white min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-navy/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="FitStack AI"
            width={140}
            height={36}
            className="brightness-0 invert"
            priority
          />
          <a
            href="#waitlist"
            className="hidden sm:inline-block text-sm font-medium px-5 py-2 rounded-full bg-electric hover:bg-electric-hover transition-colors"
          >
            Join the Waitlist
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-b from-navy via-navy-light to-navy">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            AI-native operating
            <br />
            infrastructure for the
            <br />
            <span className="text-electric">fitness industry</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            We build the data and intelligence foundation gym operators
            depend on in the AI era.{" "}
            <span className="text-white font-medium">
              Interfaces evolve. Data endures.
            </span>
          </p>
          <a
            href="#waitlist"
            className="inline-block text-lg font-semibold px-8 py-4 rounded-full bg-electric hover:bg-electric-hover transition-colors shadow-lg shadow-electric/20"
          >
            Join the Waitlist
          </a>
        </div>
        {/* Subtle gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-navy" />
      </section>

      {/* PROBLEM / VISION */}
      <section className="py-24 sm:py-32 px-6">
        <FadeIn className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-semibold text-electric uppercase tracking-widest mb-4">
                The Problem
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                Gym operators are losing control of their own data.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Fragmented vendor stacks. Siloed systems. Every tool owns a
                slice of your member data, but nobody owns the whole picture.
                When AI agents arrive, operators without unified data will be
                left behind.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-electric uppercase tracking-widest mb-4">
                Our Vision
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
                One platform that owns the context layer.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                FitStack unifies your data, operations, and member intelligence
                into a single AI-native platform — giving you the foundation to
                build custom experiences, deploy agents, and make decisions with
                full context.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* HOW WE WORK */}
      <section className="py-24 sm:py-32 px-6 bg-navy-light">
        <FadeIn className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-electric uppercase tracking-widest mb-4 text-center">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            More than software. A complete transformation.
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 text-lg">
            We don&apos;t just hand you a login. We bring decades of fitness and
            technology expertise to every engagement — from strategy through
            implementation.
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Strategic Advisory",
                desc: "Tech audits, vendor assessments, and data architecture roadmaps. We start by deeply understanding your operation — then chart the path forward.",
              },
              {
                step: "02",
                title: "Best Practices & Playbooks",
                desc: "Proven frameworks for member experience, retention, and operational intelligence. Not theory — built from real operator engagements.",
              },
              {
                step: "03",
                title: "Platform & Starter Architecture",
                desc: "Reference implementations and an AI-native foundation you own. Not another vendor lock-in — infrastructure you control and customize.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-navy border border-white/10 rounded-2xl p-8 hover:border-electric/30 transition-colors"
              >
                <div className="text-electric text-sm font-mono font-bold mb-4">
                  {card.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* PRINCIPLES */}
      <section className="py-24 sm:py-32 px-6">
        <FadeIn className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-electric uppercase tracking-widest mb-4 text-center">
            Built Different
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Three principles. Zero compromise.
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Data-First",
                desc: "Your data is your competitive advantage. We treat it that way — unified, structured, and always under your control.",
                icon: "◆",
              },
              {
                title: "Agent-Ready",
                desc: "Built for AI agents, not just human interfaces. When the UI disappears, your platform keeps working.",
                icon: "◇",
              },
              {
                title: "Context-Native",
                desc: "Deep fitness industry intelligence baked into every layer. Not generic software with a gym skin — purpose-built.",
                icon: "◈",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-navy border border-white/10 rounded-2xl p-8 hover:border-electric/30 transition-colors"
              >
                <div className="text-electric text-3xl mb-5">{card.icon}</div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="py-24 sm:py-32 px-6">
        <FadeIn className="max-w-xl mx-auto text-center">
          <p className="text-sm font-semibold text-electric uppercase tracking-widest mb-4">
            Early Access
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Building in stealth.
            <br />
            Be first to know.
          </h2>
          <p className="text-gray-400 mb-10">
            We&apos;re working with select operators to build something that
            matters. Drop your email to stay in the loop.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const email = (form.elements.namedItem("email") as HTMLInputElement).value;
              window.location.href = `mailto:hello@fitstack.ai?subject=Waitlist%20Request&body=I'd%20like%20to%20join%20the%20FitStack%20AI%20waitlist.%0A%0AEmail:%20${encodeURIComponent(email)}`;
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="you@gym.com"
              className="flex-1 px-5 py-3 rounded-full bg-navy-light border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-electric transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-electric hover:bg-electric-hover font-semibold transition-colors shadow-lg shadow-electric/20"
            >
              Get Early Access
            </button>
          </form>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; 2026 FitStack AI. All rights reserved.</p>
          <a
            href="mailto:hello@fitstack.ai"
            className="hover:text-electric transition-colors"
          >
            hello@fitstack.ai
          </a>
        </div>
      </footer>
    </main>
  );
}
