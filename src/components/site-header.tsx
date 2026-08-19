import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/why-fitstack", label: "Why FitStack" },
  { href: "/platform", label: "Platform" },
  { href: "/architecture", label: "Architecture" },
  { href: "/software-factory", label: "Software Factory" },
  { href: "/how-we-work", label: "How We Work" },
  { href: "/insights", label: "Insights" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-navy/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          aria-label="FitStack AI — Home"
          className="inline-flex rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-bright/70"
          href="/"
        >
          <Image
            alt="FitStack AI"
            className="brightness-0 invert"
            height={36}
            priority
            src="/logo.png"
            width={140}
          />
        </Link>

        <div className="hidden items-center gap-7 xl:flex">
          <nav aria-label="Primary" className="flex items-center gap-7">
            {navigation.map((item) => (
              <Link className="nav-link" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <Link className="button-primary button-small" href="/contact">
            Discuss your platform
          </Link>
        </div>

        <details className="mobile-menu xl:hidden">
          <summary aria-label="Open navigation">
            <span />
            <span />
            <span />
          </summary>
          <div className="mobile-menu-panel">
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {navigation.map((item) => (
                <Link className="mobile-nav-link" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link className="button-primary mt-4" href="/contact">
                Discuss your platform
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
