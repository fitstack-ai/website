import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Explore",
    links: [
      ["Why FitStack", "/why-fitstack"],
      ["Platform", "/platform"],
      ["Architecture", "/architecture"],
      ["Software Factory", "/software-factory"],
    ],
  },
  {
    title: "Company",
    links: [
      ["How We Work", "/how-we-work"],
      ["Insights", "/insights"],
      ["About", "/about"],
      ["Contact", "/contact"],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#07101e] px-6 pb-10 pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            alt="FitStack AI"
            className="brightness-0 invert"
            height={36}
            src="/logo.png"
            width={140}
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
            An owned operating platform, delivered as an AI-native reference
            architecture for enterprise fitness operators.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
              {column.title}
            </p>
            <ul className="mt-5 space-y-3">
              {column.links.map(([label, href]) => (
                <li key={href}>
                  <Link className="footer-link" href={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 flex max-w-7xl flex-col gap-5 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} FitStack AI. All rights reserved.</p>
        <div className="flex flex-wrap gap-5">
          <Link className="footer-link" href="/privacy">Privacy</Link>
          <Link className="footer-link" href="/terms">Terms</Link>
          <a className="footer-link" href="mailto:hello@fitstack.ai">hello@fitstack.ai</a>
        </div>
      </div>
    </footer>
  );
}
