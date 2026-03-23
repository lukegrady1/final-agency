import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import BlurIn from "@/components/BlurIn";

export const metadata: Metadata = {
  title: "Free Website & Lead Capture Audit for Local Businesses",
  description:
    "Get a free audit of your website, Google presence, and lead capture. We show you exactly where you're losing leads — no obligation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <BlurIn>
            <SectionLabel>Get in Touch</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mt-4 leading-tight">
              Find out where you&apos;re losing leads
            </h1>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mt-6">
              Tell us about your business. We&apos;ll audit your website, Google
              presence, and lead capture — then show you exactly what&apos;s
              costing you customers and how to fix it.
            </p>
          </BlurIn>
          <BlurIn delay={0.3}>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="text-sm text-white/60 border border-white/10 rounded-full px-4 py-2">
                Response within 24 hours — we review every submission personally
              </span>
              <span className="text-sm text-white/60 border border-white/10 rounded-full px-4 py-2">
                No account managers — you talk to the team that builds your system
              </span>
              <span className="text-sm text-white/60 border border-white/10 rounded-full px-4 py-2">
                No obligation — the audit is free with zero pressure to sign up
              </span>
            </div>
          </BlurIn>
        </div>
      </section>

      {/* Form Section */}
      <SectionWrapper>
        <ContactForm />
      </SectionWrapper>
    </main>
  );
}
