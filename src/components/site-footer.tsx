import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500">
        <p className="order-2 sm:order-1">
          &copy; {new Date().getFullYear()} FitStack AI. All rights reserved.
        </p>
        <nav
          aria-label="Footer"
          className="order-1 sm:order-2 flex flex-wrap items-center gap-x-6 gap-y-2"
        >
          <Link
            href="/privacy"
            className="hover:text-electric transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-electric transition-colors"
          >
            Terms
          </Link>
          <a
            href="mailto:hello@fitstack.ai"
            className="hover:text-electric transition-colors"
          >
            hello@fitstack.ai
          </a>
        </nav>
      </div>
    </footer>
  );
}
