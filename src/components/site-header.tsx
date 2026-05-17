import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-navy/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          aria-label="FitStack AI — Home"
          className="inline-flex items-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-electric/60"
        >
          <Image
            src="/logo.png"
            alt="FitStack AI"
            width={140}
            height={36}
            className="brightness-0 invert"
            priority
          />
        </Link>
        <Link
          href="/#contact"
          className="hidden sm:inline-block text-sm font-medium px-5 py-2 rounded-full bg-electric hover:bg-electric-hover transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </nav>
  );
}
