import type { Metadata } from "next";
import Link from "next/link";
import { Paintbrush, Search, Smartphone, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionLabel from "@/components/SectionLabel";
import BlurIn from "@/components/BlurIn";
import { StaggerParent, StaggerChild } from "@/components/StaggerParent";
import ProcessSection from "@/components/ProcessSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom websites and Google Business Profile optimization & SEO — built and managed for local businesses. CRM included. $197/month.",
  alternates: { canonical: "/services" },
};

const pillars = [
  {
    icon: Paintbrush,
    title: "Custom Website",
    description:
      "Designed from scratch around your business, mobile-first, built to convert. Fully managed hosting, updates, and support.",
    bullets: [
      "Custom design — no templates, no page builders",
      "Mobile-first, sub-second load times",
      "Clear CTAs, click-to-call, and booking integration",
      "Hosting, SSL, updates, and security all handled",
    ],
  },
  {
    icon: Search,
    title: "Google Business Profile & SEO",
    description:
      "We optimize your local and organic search presence so customers find you before your competitors.",
    bullets: [
      "Full Google Business Profile optimization",
      "On-page and technical SEO",
      "Local content and keyword strategy",
      "Monthly reporting on rankings and traffic",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(108,106,246,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <BlurIn>
            <SectionLabel>Our Services</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white mt-6">
              Everything your business needs to grow online
            </h1>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              Custom websites and local SEO built and managed for local
              businesses. CRM included with every plan. $197/month plus a
              one-time $1,000 setup fee.
            </p>
          </BlurIn>
        </div>
      </section>

      {/* Core Services */}
      <SectionWrapper>
        <StaggerParent className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <StaggerChild
                key={pillar.title}
                className="bg-card border border-card-border rounded-2xl p-8"
              >
                <div className="rounded-xl bg-accent/10 p-3 w-fit">
                  <Icon className="w-7 h-7 text-accent-light" />
                </div>
                <h2 className="text-xl font-medium text-white mt-5">
                  {pillar.title}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mt-3">
                  {pillar.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {pillar.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-white/70 text-sm"
                    >
                      <span className="text-accent-light mt-1 shrink-0">
                        &bull;
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </StaggerChild>
            );
          })}
        </StaggerParent>

        {/* CRM — included */}
        <BlurIn delay={0.2}>
          <div className="max-w-4xl mx-auto mt-6 bg-card border border-card-border rounded-2xl p-6 flex items-start gap-5">
            <div className="rounded-xl bg-accent/10 p-3 shrink-0">
              <Smartphone className="w-6 h-6 text-accent-light" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">
                CRM Included
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mt-1">
                Every plan includes access to a lead and messaging app to
                manage calls, texts, and customer interactions in one place —
                on web and mobile.
              </p>
            </div>
          </div>
        </BlurIn>

        <BlurIn delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="/start"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200"
            >
              See Pricing & Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </BlurIn>
      </SectionWrapper>

      <ProcessSection />

      <CTABanner />
    </main>
  );
}
