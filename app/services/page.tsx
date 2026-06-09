import type { Metadata } from "next";
import Link from "next/link";
import { Paintbrush, MapPin, Star, TrendingUp, Smartphone, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionLabel from "@/components/SectionLabel";
import BlurIn from "@/components/BlurIn";
import { StaggerParent, StaggerChild } from "@/components/StaggerParent";
import ProcessSection from "@/components/ProcessSection";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Website, Local SEO, Reviews & Leads in One Plan",
  description:
    "One plan for local businesses: custom website, Google Business Profile, reviews, social, SEO, and an all-in-one inbox for your leads. Built and managed for you. $297/month, no setup fee.",
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
    description:
      "A fast, professional website built around your business and made to look great on phones, where most of your customers are. It is designed to turn visitors into phone calls and booked jobs.",
    bullets: [
      "Built custom for you, not a copy-paste template",
      "Loads fast and works perfectly on phones",
      "Clear buttons to call, message, or book you",
      "Hosting, security, and updates all handled for you",
    ],
  },
  {
    icon: MapPin,
    title: "Google Business Profile & Social",
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
    description:
      "SEO simply means showing up when people search Google for what you do. We work on it every month so you move up the results and more of those searchers land on you.",
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
              One plan, not a menu. For $297 a month you get the whole system:
              a custom website, your Google Business Profile posted and
              cross-posted to social, a steady stream of better reviews,
              ongoing SEO, and an all-in-one inbox to manage it all. Built and managed for
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

        {/* Inbox — included */}
        <BlurIn delay={0.2}>
          <div className="max-w-4xl mx-auto mt-6 bg-card border border-card-border rounded-2xl p-6 flex items-start gap-5">
            <div className="rounded-xl bg-accent/10 p-3 shrink-0">
              <Smartphone className="w-6 h-6 text-accent-light" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">
                All Your Leads in One Inbox
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mt-1">
                An all-in-one inbox is one place where every call, text, and
                lead from your website lands, so nothing slips through the
                cracks. Your plan includes it on web and phone, and we set it
                up for you.
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
