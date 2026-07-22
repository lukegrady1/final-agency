import type { Metadata } from "next";
import { Paintbrush, MapPin, Star, TrendingUp, Smartphone } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import BlurIn from "@/components/BlurIn";
import { StaggerParent, StaggerChild } from "@/components/StaggerParent";
import HomePlans from "@/components/home/HomePlans";
import ProcessSection from "@/components/ProcessSection";
import HomeFinalCTA from "@/components/home/HomeFinalCTA";
import AuroraBackdrop from "@/components/grow/AuroraBackdrop";

export const metadata: Metadata = {
  title: "Website, Local SEO, Reviews & Leads — Three Simple Plans",
  description:
    "One system for local businesses: reviews win the click, your website wins the call, and every lead lands in one inbox. The Foundation Package is $147/month — website + review engine. Built and managed for you, no setup fee.",
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
    icon: Star,
    title: "A Review Engine That Wins the Click",
    plan: "Reputation & up",
    accent: { ring: "border-amber/30 bg-amber/10", icon: "text-[#b45309]" },
    description:
      "Reviews are what convince a stranger to pick you over the next business. We make leaving one take seconds — a tap-to-review card in person or an automatic text after each job — then reply to every review in your voice.",
    bullets: [
      "More 5-star reviews, on autopilot",
      "Every review answered in your voice",
      "Old, unfair reviews challenged for you",
      "A stronger profile that earns the click",
    ],
  },
  {
    icon: Paintbrush,
    title: "A Custom Website That Wins the Call",
    plan: "Foundation & up",
    accent: { ring: "border-accent/20 bg-accent/10", icon: "text-accent" },
    description:
      "Winning the click is only half the job. A fast, professional site — built around your business and made for phones — turns the people who find you into phone calls and booked jobs instead of back-button bounces.",
    bullets: [
      "Built custom for you, not a template",
      "Loads fast and works perfectly on phones",
      "Clear buttons to call, message, or book",
      "Hosting, security, and updates handled for you",
    ],
  },
  {
    icon: MapPin,
    title: "Google Business Profile & Social",
    plan: "The Growth System",
    accent: { ring: "border-cyan/30 bg-cyan/10", icon: "text-[#0e8090]" },
    description:
      "Your Google Business Profile is often the first thing a customer sees. We set it up the right way, post to it every week, and cross-post to your social so you show up everywhere customers look.",
    bullets: [
      "We set up and fine-tune your Google listing",
      "We post to it every week to keep it active",
      "Posts cross-post to Instagram, Facebook & YouTube",
      "You stay visible everywhere customers look",
    ],
  },
  {
    icon: TrendingUp,
    title: "Get Found on Google (SEO)",
    plan: "The Growth System",
    accent: { ring: "border-violet/30 bg-violet/10", icon: "text-[#8b3fd6]" },
    description:
      "SEO simply means showing up when people search Google for what you do. The higher you rank, the more you're found by people already looking to buy — high-intent leads, not tire-kickers. We work on it every month.",
    bullets: [
      "We tune your site so Google understands it",
      "We target the words your customers search",
      "Ongoing work every month, not a one-time fix",
      "A simple monthly report on how you're climbing",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-transparent text-[#0c0b1e] overflow-x-clip">
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden grain-overlay">
        <AuroraBackdrop tone="indigo-cyan" />
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
          <BlurIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-[#0c0b1e] mt-6">
              Everything we build and{" "}
              <span className="grow-gradient-text font-display italic">
                manage for you.
              </span>
            </h1>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/70 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              One system for local businesses: your reviews win the click, your
              website wins the call, and every lead lands in one inbox. The
              Foundation Package is $147 a month &mdash; website and review
              engine together. Built and managed for you, no setup fee.
            </p>
          </BlurIn>
        </div>
      </section>

      {/* Core Services */}
      <SectionWrapper className="!pt-10 lg:!pt-16">
        <StaggerParent className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-4xl mx-auto">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <StaggerChild
                key={pillar.title}
                className="group bg-white border border-black/[0.08] rounded-2xl p-5 md:p-8 shadow-sm transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0c0b1e]/[0.06]"
              >
                <div
                  className={`grid place-items-center w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl border ${pillar.accent.ring} transition-transform duration-300 ease-out group-hover:scale-105`}
                >
                  <Icon className={`w-5 h-5 md:w-6 md:h-6 ${pillar.accent.icon}`} />
                </div>
                <div className="flex items-center gap-3 mt-3.5 md:mt-5 flex-wrap">
                  <h2 className="text-lg md:text-xl font-medium text-[#0c0b1e]">
                    {pillar.title}
                  </h2>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium border ${
                      pillar.plan === "The Growth System"
                        ? "border-violet/40 bg-violet/10 text-[#8b3fd6]"
                        : "border-accent/40 bg-accent/10 text-accent"
                    }`}
                  >
                    {pillar.plan}
                  </span>
                </div>
                <p className="text-[#0c0b1e]/60 text-xs md:text-sm leading-snug md:leading-relaxed mt-2.5 md:mt-3">
                  {pillar.description}
                </p>
                <ul className="mt-3.5 md:mt-5 space-y-1.5 md:space-y-2">
                  {pillar.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-[#0c0b1e]/70 text-xs md:text-sm"
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

        {/* Inbox — included on every plan */}
        <BlurIn delay={0.2}>
          <div className="max-w-4xl mx-auto mt-3 md:mt-6 bg-white border border-black/[0.08] rounded-2xl p-5 md:p-6 flex items-start gap-4 md:gap-5 shadow-sm">
            <div className="grid place-items-center w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl border border-accent/20 bg-accent/10 shrink-0">
              <Smartphone className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="text-base md:text-lg font-medium text-[#0c0b1e]">
                  All Your Leads in One Inbox
                </h3>
                <span className="rounded-full px-2.5 py-0.5 text-xs font-medium border border-black/15 text-[#0c0b1e]/60">
                  Every plan
                </span>
              </div>
              <p className="text-[#0c0b1e]/60 text-xs md:text-sm leading-snug md:leading-relaxed mt-1">
                Every call, text, and lead from your website lands in one place,
                so nothing slips through the cracks. Included on every plan, and
                we set it up for you.
              </p>
            </div>
          </div>
        </BlurIn>
      </SectionWrapper>

      {/* Plans */}
      <HomePlans />

      {/* Process */}
      <ProcessSection />

      {/* Closing CTA */}
      <HomeFinalCTA />
    </main>
  );
}
