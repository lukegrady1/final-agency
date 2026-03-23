import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Grady Digital AI automation, web design, and SEO services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main>
      <SectionWrapper className="pt-40">
        <article className="prose prose-invert max-w-3xl mx-auto">
          <h1>Terms of Service</h1>
          <p className="text-white/40 text-sm">Last updated: January 1, 2026</p>

          <h2>1. Services</h2>
          <p>
            Grady Digital provides web design, AI automation, and SEO services
            on a month-to-month basis. The specific scope of services is agreed
            upon before work begins.
          </p>

          <h2>2. Payment</h2>
          <p>
            Services are billed monthly in advance. Cancellation ends billing at
            the next billing cycle. No refunds are provided for the current
            billing period.
          </p>

          <h2>3. No Guarantees</h2>
          <p>
            While we track and report real results, specific outcomes cannot be
            guaranteed. Search rankings, traffic, and lead volume depend on many
            factors outside our control.
          </p>

          <h2>4. Intellectual Property</h2>
          <p>
            Client websites and deliverables are owned by the client upon full
            payment. Grady Digital retains the right to showcase work in
            portfolio and case studies unless otherwise agreed.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            Grady Digital&apos;s liability is limited to fees paid in the
            current billing period. We are not liable for indirect, incidental,
            or consequential damages.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These terms are governed by the laws of the Commonwealth of
            Massachusetts, United States.
          </p>

          <h2>7. Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
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
