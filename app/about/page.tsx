import type { Metadata } from "next";
import { ShieldOff, Zap, PhoneCall, Bot, Globe, Search } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import CTABanner from "@/components/CTABanner";
import BlurIn from "@/components/BlurIn";
import { StaggerParent, StaggerChild } from "@/components/StaggerParent";

export const metadata: Metadata = {
  title: "About Grady Digital — AI Agents for HVAC, Contractors & Service Businesses",
  description:
    "We build AI receptionists, chatbots, automated follow-up, and websites that bring in leads for local service businesses. No contracts, real results.",
  alternates: { canonical: "/about" },
};

const whatWeDo = [
  {
    icon: Bot,
    title: "AI Agents",
    body: "Receptionists and chatbots that answer calls, qualify leads, and book appointments 24/7",
  },
  {
    icon: Globe,
    title: "Websites That Convert",
    body: "Fast, mobile-first sites with click-to-call, booking integration, and clear CTAs",
  },
  {
    icon: Search,
    title: "SEO & Automation",
    body: "Google Business Profile optimization, automated review requests, and lead follow-up that runs on autopilot",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Page Hero */}
      <section className="pt-40 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <BlurIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white">
              About Grady Digital
            </h1>
          </BlurIn>
          <BlurIn delay={0.1}>
            <p className="text-white/60 text-lg mt-2">
              AI agents and automation for local service businesses
            </p>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/80 text-xl leading-relaxed max-w-3xl mt-4">
              We help HVAC companies, contractors, salons, and service
              businesses get more leads and book more jobs — with AI that works
              24/7.
            </p>
          </BlurIn>
        </div>
      </section>

      {/* Problem */}
      <SectionWrapper>
        <div className="max-w-3xl">
          <BlurIn>
            <h2 className="text-3xl md:text-4xl font-medium text-white">
              Your customers are calling. Is anyone answering?
            </h2>
          </BlurIn>
          <div className="mt-6 space-y-4">
            <BlurIn delay={0.1}>
              <p className="text-white/60 text-sm leading-relaxed">
                Most local businesses lose leads every single day. Calls go to
                voicemail. Website visitors leave without booking. Old contacts
                sit forgotten in a spreadsheet. And every missed lead is
                revenue that goes straight to a competitor.
              </p>
            </BlurIn>
            <BlurIn delay={0.15}>
              <p className="text-white/60 text-sm leading-relaxed">
                Grady Digital was built to fix that. We set up AI receptionists
                that answer your phone around the clock, chatbots that convert
                website visitors into appointments, and automated follow-up
                that texts new leads within 60 seconds.
              </p>
            </BlurIn>
            <BlurIn delay={0.2}>
              <p className="text-white/60 text-sm leading-relaxed">
                Pair that with a website designed to convert and a Google
                presence that actually ranks, and you have a complete system
                that brings in customers while you focus on doing the work.
              </p>
            </BlurIn>
          </div>
        </div>
      </SectionWrapper>

      {/* What Grady Digital Does */}
      <SectionWrapper>
        <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whatWeDo.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerChild
                key={item.title}
                className="bg-card border border-card-border rounded-2xl p-6"
              >
                <div className="rounded-xl bg-accent/10 p-2 w-fit">
                  <Icon className="w-8 h-8 text-accent-light" />
                </div>
                <h3 className="text-lg font-medium text-white mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.body}
                </p>
              </StaggerChild>
            );
          })}
        </StaggerParent>
      </SectionWrapper>

      {/* Why AI */}
      <SectionWrapper>
        <div className="max-w-3xl mx-auto">
          <BlurIn>
            <h2 className="text-3xl md:text-4xl font-medium text-white">
              Why AI? Because your competitors aren&apos;t waiting.
            </h2>
          </BlurIn>
          <BlurIn delay={0.1}>
            <p className="text-white/60 text-base leading-relaxed mt-6">
              The same AI technology that Fortune 500 companies use is now
              available to every local business. The ones that adopt it first
              will answer more calls, follow up faster, and book more jobs — and
              the ones that wait will wonder where their customers went.
            </p>
          </BlurIn>
          <BlurIn delay={0.15}>
            <p className="text-white/60 text-base leading-relaxed mt-4">
              We build AI systems that are practical and reliable — not science
              projects. Receptionists that actually answer the phone. Chatbots
              that actually book appointments. Follow-up sequences that text
              leads before they have time to call someone else. That&apos;s the
              standard.
            </p>
          </BlurIn>
        </div>
      </SectionWrapper>

      {/* Proof Points */}
      <SectionWrapper>
        <div className="flex flex-wrap justify-center gap-8">
          <BlurIn>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <ShieldOff className="w-4 h-4 text-accent-light" />
              No Contracts — month-to-month, cancel anytime
            </div>
          </BlurIn>
          <BlurIn delay={0.1}>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Zap className="w-4 h-4 text-accent-light" />
              Live in days — most automations running in under a week
            </div>
          </BlurIn>
          <BlurIn delay={0.2}>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <PhoneCall className="w-4 h-4 text-accent-light" />
              Zero missed calls — AI on your phone line 24/7/365
            </div>
          </BlurIn>
        </div>
      </SectionWrapper>

      <CTABanner />
    </main>
  );
}
