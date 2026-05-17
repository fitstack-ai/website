import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Privacy Policy | FitStack AI",
  description:
    "Privacy policy for FitStack AI, including website, platform, and SMS demo/testing workflows.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500">
              <span className="text-gray-400 font-medium">Effective date:</span>{" "}
              April 11, 2026
            </p>
          </header>

          <div className="space-y-10 text-gray-300 leading-relaxed [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:tracking-tight [&_h2]:mb-4 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:mb-4 [&_li]:text-gray-300 [&_strong]:text-white [&_strong]:font-semibold [&_a]:text-electric [&_a]:underline-offset-4 hover:[&_a]:underline">
            <p>
              FitStack AI (&quot;FitStack AI,&quot; &quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) respects your privacy. This Privacy Policy explains how
              we collect, use, disclose, and protect information when you visit our
              website, use our software platform, or participate in product
              demonstrations, including SMS-based demo and testing workflows.
            </p>

            <section>
              <h2>Information We Collect</h2>
              <p>We may collect the following categories of information:</p>
              <ul>
                <li>
                  <strong>Contact information</strong>, such as your name, email
                  address, company name, and phone number.
                </li>
                <li>
                  <strong>Account and demo information</strong>, such as login
                  details, profile information, preferences, and activity within
                  the platform.
                </li>
                <li>
                  <strong>Communications data</strong>, including messages you send
                  to us, support requests, and records of SMS messages sent or
                  received as part of demos, testing, authentication,
                  notifications, or product evaluation.
                </li>
                <li>
                  <strong>Technical information</strong>, such as IP address,
                  browser type, device information, operating system, referring
                  URLs, and usage data.
                </li>
                <li>
                  <strong>Analytics information</strong>, such as pages viewed,
                  clicks, session activity, and feature usage.
                </li>
              </ul>
            </section>

            <section>
              <h2>How We Use Information</h2>
              <p>We use information to:</p>
              <ul>
                <li>
                  Provide, operate, maintain, and improve the FitStack AI website
                  and platform.
                </li>
                <li>
                  Set up and manage demo, development, and testing environments.
                </li>
                <li>
                  Send transactional and service-related communications, including
                  account verification codes, login alerts, workflow notifications,
                  and other non-marketing messages.
                </li>
                <li>
                  Respond to inquiries, support requests, and sales conversations.
                </li>
                <li>
                  Monitor performance, troubleshoot issues, prevent abuse, and
                  maintain security.
                </li>
                <li>
                  Comply with legal obligations and carrier or platform compliance
                  requirements.
                </li>
              </ul>
            </section>

            <section>
              <h2>SMS Communications</h2>
              <p>
                If you provide your mobile number to participate in a live demo,
                testing workflow, or account-related interaction, FitStack AI may
                send you SMS messages related to that purpose. These messages may
                include one-time passcodes, authentication messages, demo workflow
                notifications, and similar non-marketing communications.
              </p>
              <p>
                By providing your mobile number and agreeing to receive these
                messages, you consent to receive SMS messages from FitStack AI for
                the specific purpose described at the time of collection. Consent
                to receive SMS messages is not a condition of purchase.
              </p>
              <p>
                <strong>
                  Message frequency may vary. Message and data rates may apply.
                </strong>
              </p>
              <p>
                You can opt out of SMS messages at any time by replying{" "}
                <strong>STOP</strong>. For help, reply <strong>HELP</strong> or
                contact us at{" "}
                <a href="mailto:hello@fitstack.ai">hello@fitstack.ai</a>.
              </p>
              <p>
                FitStack AI does <strong>not</strong> sell or share SMS opt-in data
                or consent records with third parties for their own marketing
                purposes.
              </p>
            </section>

            <section>
              <h2>How We Share Information</h2>
              <p>We may share information with:</p>
              <ul>
                <li>
                  <strong>Service providers</strong> that help us operate the
                  website, platform, hosting, analytics, authentication,
                  communications, and support systems.
                </li>
                <li>
                  <strong>Messaging and communications providers</strong> that
                  facilitate SMS and related delivery workflows.
                </li>
                <li>
                  <strong>Professional advisors</strong> such as legal, accounting,
                  or security consultants.
                </li>
                <li>
                  <strong>Authorities or other parties</strong> where required by
                  law, subpoena, court order, or to protect rights, safety, and
                  security.
                </li>
                <li>
                  <strong>A successor entity</strong> in connection with a merger,
                  acquisition, financing, or sale of all or part of the business.
                </li>
              </ul>
              <p>
                We do not sell personal information in the ordinary course of
                business.
              </p>
            </section>

            <section>
              <h2>Data Retention</h2>
              <p>
                We retain information for as long as reasonably necessary to
                provide services, support demos and testing, comply with legal
                obligations, resolve disputes, enforce agreements, and maintain
                business records. SMS and related compliance records may be
                retained as needed to satisfy carrier, platform, legal, or audit
                requirements.
              </p>
            </section>

            <section>
              <h2>Security</h2>
              <p>
                We use reasonable administrative, technical, and organizational
                measures to help protect personal information. However, no method
                of transmission over the internet or electronic storage is
                completely secure, and absolute security cannot be guaranteed.
              </p>
            </section>

            <section>
              <h2>Your Choices</h2>
              <p>
                Depending on your location, you may have rights to request access
                to, correction of, deletion of, or restriction of certain personal
                information. You may also opt out of SMS communications at any
                time by replying STOP.
              </p>
              <p>
                To make a privacy request, contact{" "}
                <a href="mailto:hello@fitstack.ai">hello@fitstack.ai</a>.
              </p>
            </section>

            <section>
              <h2>Third-Party Services and Links</h2>
              <p>
                The website or platform may contain links to third-party websites
                or services. FitStack AI is not responsible for the privacy
                practices of third parties.
              </p>
            </section>

            <section>
              <h2>Children&apos;s Privacy</h2>
              <p>
                FitStack AI is not directed to children under 13, and we do not
                knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2>Changes to This Policy</h2>
              <p>
                This Privacy Policy may be updated from time to time. When changes
                are made, the Effective Date above will be updated. Material
                changes may also be communicated through the website or platform
                when appropriate.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>If you have questions about this Privacy Policy, contact:</p>
              <p>
                <strong>FitStack AI</strong>
                <br />
                MDM Venture Labs LLC dba FitStack AI
                <br />
                Email: <a href="mailto:hello@fitstack.ai">hello@fitstack.ai</a>
              </p>
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
              href="/terms"
              className="text-gray-400 hover:text-electric transition-colors"
            >
              Terms and Conditions →
            </Link>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
