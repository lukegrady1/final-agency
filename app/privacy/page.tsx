import type { Metadata } from "next";
import Link from "next/link";
import SectionWrapper from "@/components/SectionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Grady Digital collects, uses, and protects your personal information. Read our privacy policy.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main>
      <SectionWrapper className="pt-40">
        <article className="prose prose-invert max-w-3xl mx-auto">
          <h1>Privacy Policy</h1>
          <p className="text-white/40 text-sm">Last updated: January 1, 2026</p>

          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide through our contact form,
            including your name, email address, phone number, website URL, and
            message content. We also collect basic usage data through analytics
            tools.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries,
            provide our services, and improve our website. We do not use your
            information for any purpose other than what is described in this
            policy.
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell or share personal information with third parties
            except as needed to provide our services (e.g., email delivery
            providers). We will never sell your data.
          </p>

          <h2>4. Cookies</h2>
          <p>
            We use cookies for analytics purposes through Google Analytics 4.
            These cookies help us understand how visitors use our website. You
            can disable cookies in your browser settings.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain contact form submissions for up to 2 years. After this
            period, submissions are permanently deleted.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You can request deletion of your personal data at any time by
            emailing{" "}
            <a href="mailto:luke@gradydigital.com">luke@gradydigital.com</a>.
            We will process your request within 30 days.
          </p>

          <h2>7. Contact</h2>
          <p>
            For questions about this privacy policy, contact us at{" "}
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
