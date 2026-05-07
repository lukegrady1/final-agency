import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import BlurIn from "@/components/BlurIn";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch about a custom website for your business. $97/month, fully managed, live in two weeks. No obligation.",
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
              Let&apos;s build your website
            </h1>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mt-6">
              Tell us about your business and we&apos;ll show you what we&apos;d
              build for you. Custom design, fully managed, live in two weeks.
            </p>
          </BlurIn>
          <BlurIn delay={0.3}>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="text-sm text-white/60 border border-white/10 rounded-full px-4 py-2">
                $97/month — no contracts, no setup fees
              </span>
              <span className="text-sm text-white/60 border border-white/10 rounded-full px-4 py-2">
                You talk directly to Luke
              </span>
              <span className="text-sm text-white/60 border border-white/10 rounded-full px-4 py-2">
                No obligation, no pressure
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

      {/* CTA to Start page */}
      <SectionWrapper>
        <BlurIn>
          <div className="bg-accent/90 rounded-2xl px-8 py-16 text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium text-white">
              Ready to see pricing and book a call?
            </h2>
            <p className="text-white/80 text-sm leading-relaxed max-w-xl mx-auto mt-4">
              Check out our plans and pick a time to chat with Luke.
            </p>
            <Link
              href="/start"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200 mt-8"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </BlurIn>
      </SectionWrapper>
    </main>
  );
}
