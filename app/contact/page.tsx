import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import BlurIn from "@/components/BlurIn";
import { Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Free AI & Growth Audit for Local Businesses",
  description:
    "Get a free audit of your business. We'll look at how you handle calls, leads, and follow-ups, then show you where AI can save you hours and bring in more money. No obligation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <BlurIn>
            <SectionLabel>Free AI & Growth Audit</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mt-4 leading-tight">
              We&apos;ll show you where AI can do the work for you
            </h1>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mt-6">
              Tell us a bit about your business. We&apos;ll look at how you
              handle calls, leads, follow-ups, and scheduling, then map out
              where AI systems (receptionists, chatbots, automated workflows)
              can take that off your plate. We look at your website and SEO
              too, but most of the real time and money savings come from the
              AI side.
            </p>
          </BlurIn>
          <BlurIn delay={0.3}>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="text-sm text-white/60 border border-white/10 rounded-full px-4 py-2">
                AI that picks up calls, books jobs, and follows up. All day, every day.
              </span>
              <span className="text-sm text-white/60 border border-white/10 rounded-full px-4 py-2">
                You talk directly to the person who builds your system
              </span>
              <span className="text-sm text-white/60 border border-white/10 rounded-full px-4 py-2">
                Free audit, no pressure, no commitment
              </span>
            </div>
          </BlurIn>

          {/* Clickable contact links */}
          <BlurIn delay={0.4}>
            <div className="flex flex-wrap gap-6 mt-8">
              <a
                href="tel:+19787982870"
                className="inline-flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-accent-light" />
                (978) 798-2870
              </a>
              <a
                href="mailto:luke@gradydigital.com"
                className="inline-flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-accent-light" />
                luke@gradydigital.com
              </a>
            </div>
          </BlurIn>
        </div>
      </section>

      {/* Form Section */}
      <SectionWrapper>
        <ContactForm />
      </SectionWrapper>

      {/* Google Maps Embed */}
      <SectionWrapper id="map">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-medium text-white">Find Us</h2>
          <p className="text-white/60 text-sm mt-2">
            Serving businesses nationwide from Worcester, MA
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94131.52648153524!2d-71.87974!3d42.2625932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e406585a2a8b0d%3A0x9e137dd87403c8e2!2sWorcester%2C%20MA!5e0!3m2!1sen!2sus!4v1711500000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Grady Digital service area"
          />
        </div>
      </SectionWrapper>
    </main>
  );
}
