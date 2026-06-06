import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Grady Digital web design, SEO, and CRM services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main>
      <SectionWrapper className="pt-40">
        <article className="prose prose-invert max-w-3xl mx-auto">
          <h1>Service Agreement</h1>
          <p className="text-white/40 text-sm">Last updated: June 1, 2026</p>

          <p>
            This Service Agreement (the &ldquo;Agreement&rdquo;) is between
            Grady Digital (the &ldquo;Provider&rdquo;) and the subscribing
            client (the &ldquo;Client&rdquo;) and takes effect on the date the
            Client begins their subscription.
          </p>

          <h2>1. Services Provided</h2>
          <p>
            The Provider will design, build, host, and maintain a custom website
            for the Client, optimize the Client&apos;s Google Business Profile
            and local SEO presence, and provide access to an all-in-one CRM for
            managing leads, calls, and messages. This includes all hosting,
            ongoing maintenance, and standard upkeep at no additional cost
            beyond the fees described in Section 2.
          </p>

          <h2>2. Fees</h2>
          <p>
            The fee for the service is <strong>$197 per month</strong>, billed
            on a recurring basis, plus a <strong>one-time $1,000 setup
            fee</strong> due at the start of the engagement. The monthly fee
            covers the website, hosting, maintenance, SEO, CRM access, and the
            revisions described in Section 4.
          </p>
          <p>
            If a recurring payment fails, the Client has seven (7) days to
            update their payment information and bring the balance current. If
            payment is not resolved within that period, the website may be taken
            offline and CRM access may be suspended until payment is brought
            current.
          </p>

          <h2>3. Timeline</h2>
          <p>
            The website will be live within two to four (2–4) weeks of the
            Client signing up and providing the necessary information and
            content. In many cases, builds are completed before the four-week
            mark.
          </p>

          <h2>4. Revisions and Updates</h2>
          <p>
            <strong>First Month — Unlimited Revisions:</strong> For the first
            thirty (30) days after sign-up, the Client may request small tweaks
            and media uploads (such as photos or images) to the website as many
            times as needed.
          </p>
          <p>
            <strong>After the First Month — One Change Per Month:</strong>{" "}
            Following the initial 30-day period, the Provider will make one (1)
            change per month at no additional cost. A &ldquo;change&rdquo; may
            include a copy/text update or the addition of new images. Additional
            changes beyond the monthly allowance may be available for a separate
            fee.
          </p>

          <h2>5. Ownership of Code</h2>
          <p>
            All code, design, and underlying files for the website remain the
            sole property of the Provider. The Client is purchasing an ongoing
            service, not the code itself. Grady Digital retains the right to
            showcase work in portfolio and case studies unless otherwise agreed.
          </p>
          <p>
            If the Client cancels or stops their monthly subscription, the
            website will be taken offline and access will be discontinued.
          </p>

          <h2>6. Hosting and Maintenance</h2>
          <p>
            The Provider handles all hosting and maintenance for the duration of
            the subscription. There are no extra hosting or maintenance costs
            beyond the monthly subscription fee.
          </p>

          <h2>7. Client Responsibilities</h2>
          <ul>
            <li>
              Provide content, images, and information needed to build and
              update the website in a timely manner.
            </li>
            <li>
              Ensure all materials submitted are accurate and that the Client
              has the right to use them.
            </li>
            <li>
              Maintain an active subscription to keep the website and CRM
              access live.
            </li>
            <li>
              For Google Business Profile optimization, provide photos,
              promotions, and business updates on a regular basis when
              requested by the Provider. The effectiveness of GBP
              optimization depends in part on the Client&apos;s
              responsiveness to these requests.
            </li>
          </ul>

          <h2>8. Confidentiality and Access</h2>
          <p>
            If the Client provides the Provider with access to any accounts,
            software, or systems — such as logins, passwords, or other
            credentials — in order to set up or connect services, the Provider
            will keep that access and any related information strictly
            confidential. It will be used only to perform the services, will
            never be shared outside the engagement, and will be kept secure for
            only as long as it is needed.
          </p>

          <h2>9. Domain Names</h2>
          <p>
            If the Client already owns a domain name and wants their website to
            remain on it, the Client will transfer the domain to the Provider
            at the start of the engagement. While the subscription is active,
            the Provider manages the domain and covers any domain registration
            and renewal costs at no additional charge beyond the monthly
            subscription fee.
          </p>
          <p>
            If the Client transferred an existing domain to the Provider at the
            start and later cancels, the Provider will transfer that domain back
            to the Client once the cancellation takes effect, provided the
            Client&apos;s account is in good standing and all outstanding fees
            are paid.
          </p>

          <h2>10. No Guarantees</h2>
          <p>
            While we track and report real results, specific outcomes cannot be
            guaranteed. Search rankings, traffic, and lead volume depend on many
            factors outside our control.
          </p>

          <h2>11. Limitation of Liability</h2>
          <p>
            Grady Digital&apos;s liability is limited to fees paid in the
            current billing period. We are not liable for indirect, incidental,
            or consequential damages.
          </p>

          <h2>12. Cancellation</h2>
          <p>
            The Client may cancel the subscription at any time. Upon
            cancellation, billing will stop at the end of the current billing
            cycle and the website will be taken offline as described in
            Section 5. The one-time setup fee is non-refundable.
          </p>

          <h2>13. Governing Law</h2>
          <p>
            This Agreement is governed by the laws of the Commonwealth of
            Massachusetts, United States.
          </p>

          <h2>14. Contact</h2>
          <p>
            For questions about this Agreement, contact us at{" "}
            <a href="mailto:luke@gradydigital.com">luke@gradydigital.com</a>.
          </p>

          <div className="mt-12">
            <Link href="/" className="text-accent-light text-sm no-underline">
              &larr; Back to home
            </Link>
          </div>
        </article>
      </SectionWrapper>
    </main>
  );
}
