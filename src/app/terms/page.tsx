import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | FitStack AI",
  description:
    "Terms and conditions for the FitStack AI website, platform, demo environments, and SMS program.",
};

export default function TermsPage() {
  return (
    <div className="bg-navy text-white min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 pt-40 sm:pt-44 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          <header className="mb-12 border-b border-white/10 pb-8">
            <p className="text-sm font-semibold text-electric uppercase tracking-widest mb-3">
              Legal
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Terms and Conditions
            </h1>
            <p className="text-sm text-gray-500">
              <span className="text-gray-400 font-medium">Effective date:</span>{" "}
              May 16, 2026
            </p>
          </header>

          <div className="space-y-10 text-gray-300 leading-relaxed [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:tracking-tight [&_h2]:mb-4 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4 [&_li]:text-gray-300 [&_strong]:text-white [&_strong]:font-semibold [&_a]:text-electric [&_a]:underline-offset-4 hover:[&_a]:underline">
            <p>
              These Terms and Conditions (&quot;Terms&quot;) govern access to and
              use of the FitStack AI website, software platform, demo
              environments, and related services provided by FitStack AI
              (&quot;FitStack AI,&quot; &quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;). By accessing or using the services, you agree to
              these Terms.
            </p>

            <section>
              <h2>Use of the Services</h2>
              <p>
                You may use the services only in compliance with these Terms and
                all applicable laws. You may not use the services in a way that
                could interfere with, damage, disable, overburden, or impair the
                platform or related systems.
              </p>
              <p>
                You are responsible for ensuring that information you submit is
                accurate and that your use of the services complies with
                applicable privacy, communications, and consumer protection laws.
              </p>
            </section>

            <section>
              <h2>Demo and Evaluation Use</h2>
              <p>
                FitStack AI may provide access to demo, development, sandbox, or
                evaluation environments. These environments may be limited,
                temporary, incomplete, or subject to change without notice.
              </p>
              <p>
                Demo environments are provided for evaluation and testing purposes
                only unless otherwise agreed in writing. FitStack AI may suspend,
                modify, or discontinue demo access at any time.
              </p>
            </section>

            <section>
              <h2>SMS Program Terms</h2>
              <p>
                FitStack AI may send SMS messages in connection with account
                access, authentication, system notifications, demo workflows, and
                related non-marketing communications.
              </p>
              <p>
                By providing your mobile number and opting in, you agree to
                receive SMS messages from FitStack AI for the purpose disclosed
                when your number was collected.
              </p>
              <ul>
                <li>
                  <strong>Program name:</strong> FitStack AI Alerts and Demo
                  Messages
                </li>
                <li>
                  <strong>Program description:</strong> Account verification,
                  login/authentication, demo workflow messages, and
                  service-related notifications
                </li>
                <li>
                  <strong>Message frequency:</strong> Message frequency varies
                  based on your interactions, demo participation, and account
                  activity
                </li>
                <li>
                  <strong>Cost disclosure:</strong> Message and data rates may
                  apply
                </li>
                <li>
                  <strong>Opt-out:</strong> Reply <strong>STOP</strong>{" "}
                  to cancel SMS messages
                </li>
                <li>
                  <strong>Help:</strong> Reply <strong>HELP</strong>{" "}
                  for help or contact{" "}
                  <a href="mailto:hello@fitstack.ai">hello@fitstack.ai</a>
                </li>
              </ul>
              <p>
                Consent to receive SMS messages is not a condition of purchase.
                Carriers are not liable for delayed or undelivered messages.
              </p>
            </section>

            <section>
              <h2>Intellectual Property</h2>
              <p>
                The website, platform, software, interfaces, content, branding,
                and related materials are owned by FitStack AI or its licensors
                and are protected by intellectual property laws. Except for
                limited rights expressly granted in these Terms, no rights are
                transferred to you.
              </p>
              <p>
                You may not copy, modify, distribute, reverse engineer, decompile,
                scrape, or create derivative works from the services except as
                permitted by law or with prior written consent.
              </p>
            </section>

            <section>
              <h2>Acceptable Use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>
                  Use the services for unlawful, fraudulent, deceptive, abusive,
                  or harmful activity.
                </li>
                <li>
                  Attempt unauthorized access to accounts, systems, or data.
                </li>
                <li>Interfere with the security or integrity of the services.</li>
                <li>Transmit malware, spam, or harmful code.</li>
                <li>
                  Use the services to send prohibited messaging content or in
                  violation of carrier rules.
                </li>
              </ul>
            </section>

            <section>
              <h2>Disclaimers</h2>
              <p>
                The services, including demo and test environments, are provided
                on an &quot;as is&quot; and &quot;as available&quot; basis,
                without warranties of any kind, express or implied, except as
                required by law. FitStack AI disclaims all implied warranties,
                including merchantability, fitness for a particular purpose,
                non-infringement, and uninterrupted availability.
              </p>
            </section>

            <section>
              <h2>Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, FitStack AI will not be
                liable for any indirect, incidental, special, consequential,
                exemplary, or punitive damages, or for any loss of profits,
                revenues, data, goodwill, or business opportunities arising out of
                or related to the use of the services.
              </p>
              <p>
                To the maximum extent permitted by law, FitStack AI&apos;s
                aggregate liability arising out of or related to the services will
                not exceed the greater of one hundred U.S. dollars (US $100) or
                the amount you paid FitStack AI for the applicable services in the
                twelve months preceding the event giving rise to the claim.
              </p>
            </section>

            <section>
              <h2>Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless FitStack AI and
                its affiliates, officers, directors, employees, contractors, and
                agents from and against claims, liabilities, damages, losses, and
                expenses arising out of or related to your use of the services,
                your violation of these Terms, or your violation of law or the
                rights of a third party.
              </p>
            </section>

            <section>
              <h2>Termination</h2>
              <p>
                FitStack AI may suspend or terminate access to the services at any
                time, with or without notice, if you violate these Terms, create
                risk for FitStack AI or others, or if the services are
                discontinued.
              </p>
            </section>

            <section>
              <h2>Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of California,
                without regard to conflict of law principles, except where
                applicable law requires otherwise.
              </p>
            </section>

            <section>
              <h2>Changes to These Terms</h2>
              <p>
                FitStack AI may update these Terms from time to time. Continued
                use of the services after updated Terms become effective
                constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>Questions about these Terms may be sent to:</p>
              <address className="not-italic [&_p]:mb-0! space-y-1">
                <p>
                  <strong>FitStack AI</strong>
                </p>
                <p>MDM Venture Labs LLC dba FitStack AI</p>
                <p>30 N Gould St Ste R</p>
                <p>Sheridan, WY 82801</p>
                <p>United States</p>
                <p>
                  Email:{" "}
                  <a href="mailto:hello@fitstack.ai">hello@fitstack.ai</a>
                </p>
              </address>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-sm">
            <Link
              href="/"
              className="text-gray-400 hover:text-electric transition-colors"
            >
              ← Back to home
            </Link>
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-electric transition-colors"
            >
              Privacy Policy →
            </Link>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
