import { Suspense } from "react";
import type { Metadata } from "next";
import {
  Check,
  Mail,
  Globe,
  Star,
  Search,
  Inbox,
  UserRound,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import BlurIn from "@/components/BlurIn";
import FAQAccordion from "@/components/FAQAccordion";
import BookedHero from "@/components/booked/BookedHero";
import AuditGate from "@/components/booked/AuditGate";
import WorkShowcase from "@/components/WorkShowcase";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "You're Booked — Your Roadmap Call",
  description:
    "Your Roadmap Call with Grady Digital is confirmed. Run your free Google Business Profile audit before we talk so we walk in with real data.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/booked" },
};

const faqItems = [
  {
    question: "Is this going to be a pushy sales call?",
    answer:
      "No. We go through your Google audit together, I show you exactly what I'd do, and we build your roadmap. If it's a fit, we'll talk next steps. If not, no hard feelings — you keep the plan either way.",
  },
  {
    question: "What exactly is a Roadmap Call?",
    answer:
      "A working session where we go through your Google audit together, pinpoint what's costing you jobs, and map out exactly how I'll fix it. You'll see precisely what I'd build for your business and the results to expect.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Most owners go with the Reputation System at $197 a month — a custom website, one inbox for every lead, and a review engine that fills your Google profile with 5-star reviews and replies to every one, with the website's $299 setup fee waived. Just want the site and lead inbox? The Website plan is $147 a month plus a one-time $299 setup. Want SEO and weekly Google posting to climb the rankings on top? The Growth System is $297 a month. No setup fee on any plan, cancel anytime. I'll help you pick the right one on the call.",
  },
  {
    question: "How much work is this for me?",
    answer:
      "Almost none. I build everything and manage it month to month. You run your business; I get you found online and bring you the leads.",
  },
  {
    question: "How fast could I be up and running?",
    answer:
      "Most sites are live within a couple of weeks of you getting me what I need.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "I rebuild it from the ground up. Everything runs on my own system in the backend — your site, Google profile, reviews, and lead inbox all connected in one place — so it's built right and fully managed. The rebuild is included either way.",
  },
];

const howItWorks = [
  {
    n: "01",
    t: "Roadmap Call",
    b: "We go through your Google audit together and map out exactly what to fix.",
  },
  {
    n: "02",
    t: "Design & Build",
    b: "A custom site built around your business. You review it and request changes before launch.",
  },
  {
    n: "03",
    t: "Launch",
    b: "Your site goes live after a final review and a smooth handoff.",
  },
  {
    n: "04",
    t: "I Manage It",
    b: "Website, Google profile, reviews, and your lead inbox — all handled. Need a change? Just text me.",
  },
];

// The $197 Reputation System — the plan this page is built to convert to.
// Short tags keep every item scannable at a glance on mobile.
const reputationStack = [
  { icon: Globe, title: "Custom Website", tag: "Built to book jobs" },
  {
    icon: Star,
    title: "5-Star Review Engine",
    tag: "Auto-requested & replied",
    highlight: true,
  },
  { icon: Search, title: "Google Profile", tag: "Set up to rank" },
  { icon: Inbox, title: "One Lead Inbox", tag: "Calls, texts, forms" },
  { icon: UserRound, title: "Direct Access", tag: "Just text me" },
  { icon: ShieldCheck, title: "10-Day Guarantee", tag: "Or next month free" },
];

export default function BookedPage() {
  return (
    <main className="bg-transparent text-[#0c0b1e]">
      {/* SECTION 1 — HERO (always visible) */}
      <Suspense fallback={<div className="pt-24 lg:pt-28 pb-10" />}>
        <BookedHero />
      </Suspense>

      {/* STEP 1 audit gate — everything below is locked until they run it */}
      <AuditGate>
        {/* SECTION 2 — PROOF: WEBSITES */}
        <SectionWrapper compact className="!pt-4">
          <div className="text-center mb-8 md:mb-12">
            <BlurIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
                Sites I&apos;ve built for businesses like yours
              </h2>
            </BlurIn>
            <BlurIn delay={0.2}>
              <p className="text-[#0c0b1e]/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
                Real websites for real local businesses. This is the kind of thing
                I&apos;d build for you.
              </p>
            </BlurIn>
          </div>
          <div className="max-w-5xl mx-auto">
            <WorkShowcase initialName="Garabedian Plumbing & Heating" />
          </div>
        </SectionWrapper>

        {/* SECTION 3 — PROOF: RANKING HEATMAPS */}
        <SectionWrapper compact className="bg-white/50 backdrop-blur-sm border-y border-black/10">
          <div className="text-center mb-10 md:mb-14">
            <BlurIn delay={0.1}>
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
                <TrendingUp className="w-3.5 h-3.5" />
                Real ranking results
              </span>
            </BlurIn>
            <BlurIn delay={0.15}>
              <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-5">
                What getting found on Google actually looks like
              </h2>
            </BlurIn>
            <BlurIn delay={0.2}>
              <p className="text-[#0c0b1e]/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
                These are local ranking grids — a snapshot of where a business
                shows up in Google&apos;s map across their whole service area.{" "}
                <span className="text-[#e0492f] font-medium">Red</span>{" "}
                means buried,{" "}
                <span className="text-emerald-600 font-medium">green</span>{" "}
                means top 3. Here&apos;s the difference the system makes.
              </p>
            </BlurIn>
          </div>

          <BlurIn delay={0.12}>
            <div className="max-w-2xl mx-auto bg-white border border-black/[0.08] rounded-2xl overflow-hidden shadow-sm">
              {/* Drag before/after. Drop the two grid images into /public:
                  /public/heatmap-before.webp and /public/heatmap-after.webp */}
              <BeforeAfterSlider
                beforeSrc="/heatmap-before.webp"
                afterSrc="/heatmap-after.webp"
                beforeAlt="Local ranking grid before Grady Digital — buried across the map"
                afterAlt="Local ranking grid after Grady Digital — top 3 across the service area"
              />
              <p className="text-[#0c0b1e]/60 text-sm leading-relaxed p-5 text-center border-t border-black/[0.06]">
                Drag the slider to compare. Same business — buried across the map
                before, top 3 across the service area after.
              </p>
            </div>
          </BlurIn>
          <p className="text-center text-[#0c0b1e]/40 text-xs mt-6">
            We&apos;ll pull your grid live on the call so you can see exactly where
            you stand today.
          </p>
        </SectionWrapper>

        {/* SECTION 4 — HOW IT WORKS */}
        <SectionWrapper compact>
          <div className="text-center mb-10 md:mb-16">
            <BlurIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
                From Roadmap Call to a live, managed site
              </h2>
            </BlurIn>
            <BlurIn delay={0.2}>
              <p className="text-[#0c0b1e]/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
                No tech headaches on your end. Here&apos;s the whole process.
              </p>
            </BlurIn>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6">
            {howItWorks.map((step, i) => (
              <BlurIn key={step.n} delay={i * 0.1}>
                <div className="bg-white border border-black/[0.08] rounded-2xl p-4 md:p-6 h-full shadow-sm flex items-start gap-4 md:block">
                  <span className="text-3xl md:text-5xl leading-none font-medium text-transparent bg-clip-text bg-gradient-to-br from-black/[0.12] to-black/[0.04] shrink-0">
                    {step.n}
                  </span>
                  <div>
                    <h3 className="text-base md:text-lg font-medium text-[#0c0b1e] md:mt-2">
                      {step.t}
                    </h3>
                    <p className="text-[#0c0b1e]/60 text-xs md:text-sm leading-snug md:leading-relaxed mt-1 md:mt-2">
                      {step.b}
                    </p>
                  </div>
                </div>
              </BlurIn>
            ))}
          </div>
        </SectionWrapper>

        {/* SECTION 5 — THE PLAN ($197) — one compact card, readable at a glance */}
        <SectionWrapper compact className="bg-white/50 backdrop-blur-sm border-y border-black/10">
          <BlurIn delay={0.1}>
            <div className="max-w-lg mx-auto rounded-3xl border-2 border-accent/25 bg-white shadow-xl shadow-accent/10 p-5 sm:p-8">
              {/* Header: badge + name + price, all in view */}
              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/40 bg-amber/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#b45309]">
                  <Star className="w-3 h-3 fill-current" />
                  Most popular
                </span>
                <h2 className="text-xl sm:text-2xl font-medium text-[#0c0b1e] tracking-tight mt-3">
                  The Reputation System
                </h2>
                <div className="mt-1 flex items-baseline justify-center gap-1">
                  <span className="grow-gradient-text font-display italic text-4xl sm:text-5xl">
                    $197
                  </span>
                  <span className="text-[#0c0b1e]/50 text-base font-medium">
                    /mo
                  </span>
                </div>
                <p className="text-[#0c0b1e]/50 text-xs sm:text-sm mt-1.5">
                  No setup fee · cancel anytime · built &amp; managed for you
                </p>
              </div>

              {/* Everything you get — compact 2-col grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 mt-5">
                {reputationStack.map((item) => (
                  <div
                    key={item.title}
                    className={`flex items-center gap-2.5 rounded-xl p-2.5 border ${
                      item.highlight
                        ? "border-accent/40 bg-accent/[0.07]"
                        : "border-black/[0.07] bg-[#fafaff]"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        item.highlight
                          ? "bg-accent text-white"
                          : "bg-accent/10 border border-accent/20 text-accent"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[12px] sm:text-sm font-medium text-[#0c0b1e] leading-tight">
                        {item.title}
                      </div>
                      <div className="text-[10px] sm:text-xs text-[#0c0b1e]/50 leading-tight mt-0.5 truncate">
                        {item.tag}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer: reassurance + other plans, kept tight */}
              <div className="mt-4 border-t border-black/10 pt-4 text-center">
                <p className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#0c0b1e]/70">
                  <Check className="w-3.5 h-3.5 text-accent shrink-0" />
                  We&apos;ll set the right plan up on our call — no pressure.
                </p>
                <p className="text-[#0c0b1e]/45 text-[11px] sm:text-xs leading-relaxed mt-2">
                  Also:{" "}
                  <span className="text-[#0c0b1e]/70 font-medium">
                    Website $147/mo (+$299 setup)
                  </span>{" "}
                  ·{" "}
                  <span className="text-[#0c0b1e]/70 font-medium">
                    Growth $297/mo
                  </span>{" "}
                  (adds SEO + Google posting)
                </p>
              </div>
            </div>
          </BlurIn>
        </SectionWrapper>

        {/* SECTION 6 — FAQ */}
        <SectionWrapper compact>
          <div className="text-center mb-8 md:mb-12">
            <BlurIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
                Questions you might be wondering
              </h2>
            </BlurIn>
            <BlurIn delay={0.2}>
              <p className="text-[#0c0b1e]/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
                Most business owners have the same few questions before the call.
                Quick answers so you walk in clear.
              </p>
            </BlurIn>
          </div>
          <FAQAccordion items={faqItems} />
        </SectionWrapper>

        {/* SECTION 7 — CLOSE / CHECK YOUR EMAIL */}
        <SectionWrapper compact className="bg-white/50 backdrop-blur-sm border-t border-black/10">
          <div className="max-w-3xl mx-auto text-center">
            <BlurIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
                See you on the call
              </h2>
            </BlurIn>
            <BlurIn delay={0.2}>
              <p className="text-[#0c0b1e]/70 text-base leading-relaxed mt-5">
                Now that you&apos;ve run the audit, we&apos;ll both have your real
                numbers in hand. That means our call won&apos;t be a generic chat —
                it&apos;ll be a plan built specifically for your business.
                I&apos;m looking forward to it.
              </p>
            </BlurIn>
            <BlurIn delay={0.3}>
              <div className="bg-white border border-black/[0.08] rounded-2xl p-6 mt-8 text-left shadow-sm">
                <p className="text-sm font-medium text-[#0c0b1e] mb-4">
                  Quick recap before we talk:
                </p>
                <ul className="space-y-3">
                  {[
                    "Ran your free Google Business Profile audit",
                    "Added the call to your calendar",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-[#0c0b1e]/70 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </BlurIn>
            <BlurIn delay={0.35}>
              <a
                href="https://mail.google.com/mail/u/0/#search/from:luke@gradydigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-white bg-gradient-to-r from-cyan via-accent to-violet font-medium text-base hover:opacity-90 transition-opacity mt-8 shadow-lg shadow-accent/25"
              >
                <Mail className="w-4 h-4" />
                Check Your Email for the Invite
              </a>
              <p className="text-[#0c0b1e]/40 text-sm mt-4">
                Look for an email from{" "}
                <span className="text-[#0c0b1e]/60">luke@gradydigital.com</span>{" "}
                with your calendar invite and call link.
              </p>
            </BlurIn>
            <BlurIn delay={0.4}>
              <div className="mt-8">
                <p className="text-[#0c0b1e]/70 text-sm">Talk soon,</p>
                <p className="text-[#0c0b1e] font-medium mt-1">
                  Luke — Grady Digital
                </p>
                <a
                  href="tel:+19787982870"
                  className="text-accent text-sm hover:text-[#0c0b1e] transition-colors"
                >
                  (978) 798-2870
                </a>
              </div>
            </BlurIn>
          </div>
        </SectionWrapper>
      </AuditGate>
    </main>
  );
}
