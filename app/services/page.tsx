import type { Metadata } from "next";
import Link from "next/link";
import { Paintbrush, MapPin, Star, TrendingUp, Smartphone, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionLabel from "@/components/SectionLabel";
import BlurIn from "@/components/BlurIn";
import { StaggerParent, StaggerChild } from "@/components/StaggerParent";
import ProcessSection from "@/components/ProcessSection";
import PlansSection from "@/components/PlansSection";
import CTABanner from "@/components/CTABanner";
import AuroraBackdrop from "@/components/grow/AuroraBackdrop";

export const metadata: Metadata = {
  title: "Website, Local SEO, Reviews & Leads — Three Simple Plans",
  description:
    "A custom website with an all-in-one lead inbox from $97/month, The Reputation System with a 5-star review engine at $147/month, or the full Growth System — Google Business Profile, social, and SEO — for $297/month. Built and managed for you, no setup fee.",
  keywords: [
    "local business website design",
    "local SEO services",
    "Google Business Profile optimization",
    "online reviews management",
    "social media management",
    "lead management inbox",
    "small business marketing plan",
    "Grady Digital",
  ],
  alternates: { canonical: "/services" },
};

const pillars = [
  {
    icon: Paintbrush,
    title: "Custom Website",
    plan: "All plans",
    accent: { ring: "border-accent/20 bg-accent/10", icon: "text-accent" },
    description:
      "A fast, professional website built around your business and made to look great on phones, where most of your customers are. It is designed to turn visitors into phone calls and booked jobs.",
    bullets: [
      "Built custom for you, not a copy-paste template",
      "SEO-optimized so Google can find and rank it",
      "Loads fast and works perfectly on phones",
      "Clear buttons to call, message, or book you",
      "Hosting, security, and updates all handled for you",
    ],
  },
  {
    icon: MapPin,
    title: "Google Business Profile & Social",
    plan: "The Growth System",
    accent: { ring: "border-cyan/30 bg-cyan/10", icon: "text-[#0e8090]" },
    description:
      "Your Google Business Profile is the listing on Google Maps and search with your photos, hours, reviews, and a call button. It is often the first thing a customer sees, so we keep it active and looking sharp.",
    bullets: [
      "We set up and fine-tune your Google listing",
      "We post to it every week to keep it active",
      "Those posts go to your Instagram, Facebook, and YouTube too",
      "You stay visible everywhere customers look",
    ],
  },
  {
    icon: Star,
    title: "More and Better Reviews",
    plan: "The Reputation System",
    accent: { ring: "border-amber/30 bg-amber/10", icon: "text-[#b45309]" },
    description:
      "Reviews are what convince a stranger to choose you over the next business. We help you get more of them and handle your reputation for you.",
    bullets: [
      "We help you bring in more 5-star reviews",
      "We reply to every review for you",
      "We work to remove old unfair reviews where possible",
      "A stronger reputation that earns more trust and calls",
    ],
  },
  {
    icon: TrendingUp,
    title: "Get Found on Google (SEO)",
    plan: "The Growth System",
    accent: { ring: "border-violet/30 bg-violet/10", icon: "text-[#8b3fd6]" },
    description:
      "SEO simply means showing up when people search Google for what you do. The higher you rank, the more you're found by people already looking to buy — high-intent leads, not tire-kickers. We work on it every month so more of those ready-to-hire searchers land on you.",
    bullets: [
      "We tune your site so Google understands it",
      "We target the words your customers actually search",
      "Ongoing work every month, not a one-time fix",
      "A simple monthly report on how you're climbing",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f4f5fb] text-[#0c0b1e] overflow-x-clip">
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden grain-overlay">
        <AuroraBackdrop tone="indigo-cyan" />
        {/* Subtle grid lines, masked toward center */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(12,11,30,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(12,11,30,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(70% 60% at 50% 20%, black, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(70% 60% at 50% 20%, black, transparent 80%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <BlurIn>
            <SectionLabel>Our Services</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-[#0c0b1e] mt-6">
              Everything your business needs to{" "}
              <span className="grow-gradient-text font-display italic">
                grow online
              </span>
            </h1>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/70 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              Three simple plans. The Website plan is $97 a month: a custom
              website with hosting and an all-in-one inbox for your leads.
              The Reputation System is $147 a month — the most popular pick — and
              adds a review engine that fills your Google profile with 5-star
              reviews. The Growth System is $297 a month and adds the rest of
              the growth engine on top — your Google Business Profile posted and
              cross-posted to social, and ongoing SEO. Built and managed for
              you, live in 10 business days, no setup fee.
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
                className="bg-white border border-black/[0.08] rounded-2xl p-8 shadow-sm"
              >
                <div
                  className={`grid place-items-center w-12 h-12 rounded-xl border ${pillar.accent.ring}`}
                >
                  <Icon className={`w-6 h-6 ${pillar.accent.icon}`} />
                </div>
                <div className="flex items-center gap-3 mt-5 flex-wrap">
                  <h2 className="text-xl font-medium text-[#0c0b1e]">
                    {pillar.title}
                  </h2>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium border ${
                      pillar.plan === "All plans"
                        ? "border-black/15 text-[#0c0b1e]/60"
                        : pillar.plan === "The Growth System"
                          ? "border-violet/40 bg-violet/10 text-[#8b3fd6]"
                          : "border-accent/40 bg-accent/10 text-accent"
                    }`}
                  >
                    {pillar.plan}
                  </span>
                </div>
                <p className="text-[#0c0b1e]/60 text-sm leading-relaxed mt-3">
                  {pillar.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {pillar.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-[#0c0b1e]/70 text-sm"
                    >
                      <span className="text-accent mt-1 shrink-0">&bull;</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </StaggerChild>
            );
          })}
        </StaggerParent>

        {/* Inbox — included */}
        <BlurIn delay={0.2}>
          <div className="max-w-4xl mx-auto mt-6 bg-white border border-black/[0.08] rounded-2xl p-6 flex items-start gap-5 shadow-sm">
            <div className="grid place-items-center w-12 h-12 rounded-xl border border-accent/20 bg-accent/10 shrink-0">
              <Smartphone className="w-6 h-6 text-accent" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-lg font-medium text-[#0c0b1e]">
                  All Your Leads in One Inbox
                </h3>
                <span className="rounded-full px-2.5 py-0.5 text-xs font-medium border border-black/15 text-[#0c0b1e]/60">
                  All plans
                </span>
              </div>
              <p className="text-[#0c0b1e]/60 text-sm leading-relaxed mt-1">
                An all-in-one inbox is one place where every call, text, and
                lead from your website lands, so nothing slips through the
                cracks. All plans include it on web and phone, and we set it
                up for you.
              </p>
            </div>
          </div>
        </BlurIn>

        <BlurIn delay={0.3}>
          <div className="text-center mt-12">
            <Link
              href="#plans"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium text-sm text-white bg-gradient-to-r from-cyan via-accent to-violet hover:opacity-90 transition-opacity shadow-lg shadow-accent/25"
            >
              See the three plans
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </BlurIn>
      </SectionWrapper>

      <PlansSection className="bg-white/50 backdrop-blur-sm border-y border-black/10" />

      <ProcessSection />

      <CTABanner />
    </main>
  );
}
