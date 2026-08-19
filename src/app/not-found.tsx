import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col bg-navy text-white">
      <SiteHeader />
      <section className="hero-grid flex flex-1 items-center px-6 py-40">
        <div className="mx-auto w-full max-w-4xl text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight">This route is not part of the architecture.</h1>
          <p className="mt-6 text-lg text-slate-300">Return to the platform overview or explore the ideas shaping FitStack.</p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"><Link className="button-primary" href="/">Return home</Link><Link className="button-secondary" href="/platform">Explore the platform</Link></div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
