import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Star,
  MousePointerClick,
  Inbox,
  ShieldCheck,
  Phone,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import BlurIn from "@/components/BlurIn";
import FAQAccordion from "@/components/FAQAccordion";
import StartPricingTable from "@/components/start/StartPricingTable";
import StartTestimonials from "@/components/start/StartTestimonials";
import StartComparison from "@/components/start/StartComparison";
import StartCalendar from "@/components/start/StartCalendar";
import AuroraBackdrop from "@/components/grow/AuroraBackdrop";

export const metadata: Metadata = {
  title: "Book a Free Call — Grow Your Local Business | Grady Digital",
  description:
    "Book a free 30-minute call. We'll map the exact plan to fill your Google profile with 5-star reviews and turn your website into a phone that rings. The Foundation Package is $197/month — no setup fee, cancel anytime.",
  keywords: [
    "book a free call local business marketing",
    "local business website design",
    "get more google reviews",
    "local SEO services",
    "lead generation for local business",
    "The Foundation Package",
    "Grady Digital",
  ],
  alternates: { canonical: "/start" },
  openGraph: {
    title: "Book a Free Call — Grow Your Local Business",
    description:
      "The customers are already searching. Let's make sure they find you, choose you, and call you. Free 30-minute call, no pressure.",
  },
};

const CTA = ({
  children = "Book a Free Call",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) => (
  <Link
    href="#book"
    className={`group inline-flex items-center gap-2 rounded-full px-7 py-4 font-medium text-sm text-white bg-gradient-to-r from-cyan via-accent to-violet hover:opacity-90 transition duration-200 ease-out active:scale-[0.97] shadow-lg shadow-accent/25 ${className}`}
  >
    {children}
    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
  </Link>
);

const pains = [
  "Competitors with worse work keep showing up above you on Google.",
  "You're a little embarrassed to send people to your current website.",
  "The phone has gone quiet and you're not totally sure why.",
  "You ask happy customers for reviews — and hear crickets.",
  "You know you should “do marketing,” but there's zero time for it.",
  "You got burned before by an agency that took your money and vanished.",
];

const vision = [
  "Your Google profile stacked with fresh 5-star reviews.",
  "A website that makes people think, “these are the pros.”",
  "Your phone ringing with people who are ready to hire.",
  "Every call, text, and lead in one inbox — nothing slipping through.",
  "And you didn't lift a finger to make any of it happen.",
];

const mechanism = [
  {
    icon: Star,
    ring: "border-amber/30 bg-amber/10",
    color: "text-[#b45309]",
    title: "Your reviews win the click",
    body: "A review engine fills your Google profile with 5-star reviews — a tap-to-review card in person, an automatic text after each job — so when someone searches, you're the obvious one to call.",
  },
  {
    icon: MousePointerClick,
    ring: "border-accent/20 bg-accent/10",
    color: "text-accent",
    title: "Your website wins the call",
    body: "A fast, modern site built around one job: turning the people who find you into phone calls and booked work, instead of back-button bounces to a competitor.",
  },
  {
    icon: Inbox,
    ring: "border-cyan/30 bg-cyan/10",
    color: "text-[#0e8090]",
    title: "Everything handled, in one inbox",
    body: "Every lead lands in one place. Hosting, updates, reviews, and replies are all managed for you. You run your business; I run the system that grows it.",
  },
];

const stats = [
  {
    value: "~75%",
    label:
      "of clicks go to the top 3 businesses Google shows first. Below that, most people never see you.",
  },
  {
    value: "9 in 10",
    label:
      "people read online reviews before choosing a local business — and trust them almost as much as a friend's recommendation.",
  },
  {
    value: "76%",
    label:
      "of people who search for something nearby on their phone call or visit a business within a day.",
  },
];

const startFAQ = [
  {
    question: "What actually happens on the call?",
    answer:
      "No hard sell — it's really just me walking you through how my systems work and what they'd do for your business. I'll explain the website, the review engine, and how they work together to bring you more calls, and we'll talk through the ROI: what a stronger Google presence and a site that actually converts are worth to a business like yours. You leave understanding exactly what you'd be getting and the return to expect, whether or not we end up working together.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Most businesses pick The Foundation Package at $197 a month — a website that wins the call plus a review engine that wins the click — you save $47 a month versus buying them apart, and the website's $299 setup fee is waived. Just want the reviews? That's $97 a month. Want the full managed Google presence — weekly posts, social cross-posting, and ongoing SEO? That's $297. Only need a website? $147 a month plus a one-time $299 setup. All month-to-month, no setup fee on any plan, cancel anytime. We'll settle on the right fit together on the call.",
  },
  {
    question: "Is there a setup fee or a contract?",
    answer:
      "No setup fee on any plan, and no contract — it's month-to-month. The only setup fee anywhere is a one-time $299 on a standalone website, and even that's waived the moment you bundle the site into the Foundation or Growth plan. If you're ever not happy, you cancel anytime. I'd rather earn your business every month than lock you in.",
  },
  {
    question: "I don't have time to manage any of this.",
    answer:
      "That's the whole point. Hosting, updates, security, speed, reviews, replies, and your lead inbox are all handled for you. You keep doing the work you're great at; I handle the backend that brings you more of it.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "Great — we'll rebuild or redesign it from the ground up, focused on conversions and search visibility, not just looks. The rebuild is included.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "All kinds of local businesses — if you rely on local customers, this is built for you. That includes contractors, electricians, auto detailers, restaurants, med spas, massage therapists, hair salons, barbers, and plenty more. Anywhere better reviews, higher rankings, and a website that converts turn searches into paying customers, the system works.",
  },
];

export default function StartPage() {
  return (
    <main className="bg-transparent text-[#0c0b1e]">
      {/* HERO */}
      <section className="relative pt-40 pb-20 lg:pb-28 overflow-hidden grain-overlay">
        <AuroraBackdrop tone="indigo-cyan" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <BlurIn delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] text-[#0c0b1e] tracking-tight">
              Your competitors aren&apos;t better than you.{" "}
              <span className="grow-gradient-text font-display italic">
                They&apos;re just easier to find.
              </span>
            </h1>
          </BlurIn>
          <BlurIn delay={0.3}>
            <p className="text-[#0c0b1e]/70 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              The customers are already out there, searching right now. The
              Foundation Package fills your Google profile with 5-star reviews
              and turns your website into a phone that rings &mdash; so they find
              you, trust you, and call you. Built and managed for you, $197 a
              month, no setup fee.
            </p>
          </BlurIn>
          <BlurIn delay={0.4}>
            <div className="flex flex-col items-center gap-3 mt-10">
              <CTA className="!px-8">Book a Free Call</CTA>
              <p className="text-[#0c0b1e]/50 text-sm">
                Free 30-minute call with Luke. I&apos;ll walk you through how the
                systems work and the ROI &mdash; no pitch, no pressure.
              </p>
            </div>
          </BlurIn>
        </div>
      </section>

      {/* THE STUCK PLACE — agitate + empathize */}
      <SectionWrapper className="!pt-10 lg:!pt-16">
        <div className="max-w-3xl mx-auto">
          <BlurIn delay={0.1}>
            <h2 className="text-center text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight">
              If any of this sounds{" "}
              <span className="grow-gradient-text font-display italic">
                familiar&hellip;
              </span>
            </h2>
          </BlurIn>
          <ul className="mt-8 space-y-3">
            {pains.map((p, i) => (
              <BlurIn key={i} delay={0.1 + i * 0.05}>
                <li className="flex items-start gap-3 rounded-2xl bg-white border border-black/[0.08] shadow-sm px-4 py-3.5">
                  <span className="mt-0.5 shrink-0 text-[#e0492f]">&mdash;</span>
                  <span className="text-[#0c0b1e]/80 text-sm md:text-base leading-relaxed">
                    {p}
                  </span>
                </li>
              </BlurIn>
            ))}
          </ul>
          <BlurIn delay={0.3}>
            <p className="text-center text-[#0c0b1e]/70 text-base md:text-lg leading-relaxed mt-8 max-w-2xl mx-auto">
              None of that is a reflection of your work. You&apos;re great at
              what you do. You were just never supposed to be a marketer,
              web developer, and SEO expert on top of it.{" "}
              <span className="text-[#0c0b1e] font-medium">
                That&apos;s my job.
              </span>
            </p>
          </BlurIn>
        </div>
      </SectionWrapper>

      {/* THE VISION — future pacing */}
      <SectionWrapper className="relative overflow-hidden grain-overlay bg-white/50 backdrop-blur-sm border-y border-black/10">
        <AuroraBackdrop tone="violet" />
        <div className="relative max-w-3xl mx-auto text-center">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight">
              Now picture your business{" "}
              <span className="grow-gradient-text font-display italic">
                three months from now.
              </span>
            </h2>
          </BlurIn>
          <ul className="mt-8 space-y-3 text-left max-w-xl mx-auto">
            {vision.map((v, i) => (
              <BlurIn key={i} delay={0.1 + i * 0.06}>
                <li className="flex items-start gap-3 rounded-2xl bg-white border border-black/[0.08] shadow-sm px-4 py-3.5">
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-accent/10 border border-accent/20 shrink-0">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </span>
                  <span className="text-[#0c0b1e]/80 text-sm md:text-base leading-relaxed">
                    {v}
                  </span>
                </li>
              </BlurIn>
            ))}
          </ul>
          <BlurIn delay={0.4}>
            <p className="text-[#0c0b1e]/70 text-base md:text-lg leading-relaxed mt-8">
              That&apos;s not a fantasy. That&apos;s the Foundation Package doing
              its job while you do yours.
            </p>
          </BlurIn>
          <BlurIn delay={0.5}>
            <div className="mt-8">
              <CTA>Book a Free Call</CTA>
            </div>
          </BlurIn>
        </div>
      </SectionWrapper>

      {/* HOW FOUNDATION WORKS — the mechanism */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight">
              One system.{" "}
              <span className="grow-gradient-text font-display italic">
                Built and run for you.
              </span>
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-base md:text-lg leading-relaxed mt-4">
              Reviews get people to your door. Your website gets them to knock.
              The Foundation Package does both &mdash; and you never touch it.
            </p>
          </BlurIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
          {mechanism.map((m, i) => {
            const Icon = m.icon;
            return (
              <BlurIn key={m.title} delay={0.1 + i * 0.1}>
                <div className="group bg-white border border-black/[0.08] rounded-2xl p-5 md:p-7 shadow-sm h-full transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0c0b1e]/[0.06]">
                  <span
                    className={`grid place-items-center w-11 h-11 rounded-xl border ${m.ring} transition-transform duration-300 ease-out group-hover:scale-105`}
                  >
                    <Icon className={`w-5 h-5 ${m.color}`} />
                  </span>
                  <h3 className="text-base md:text-lg font-medium text-[#0c0b1e] mt-4">
                    {m.title}
                  </h3>
                  <p className="text-[#0c0b1e]/60 text-sm leading-relaxed mt-2">
                    {m.body}
                  </p>
                </div>
              </BlurIn>
            );
          })}
        </div>
      </SectionWrapper>

      {/* THE DATA — why reviews + top 3 win */}
      <SectionWrapper className="!py-14 lg:!py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight">
              It&apos;s not a hunch. It&apos;s how people{" "}
              <span className="grow-gradient-text font-display italic">
                choose.
              </span>
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-base md:text-lg leading-relaxed mt-4">
              Before anyone calls you, they do the same two things: see who
              ranks, and read the reviews. Win both and you&apos;re the obvious
              choice. Lose either and you&apos;re invisible.
            </p>
          </BlurIn>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <BlurIn key={s.label} delay={0.1 + i * 0.1}>
              <div className="bg-white border border-black/[0.08] rounded-2xl p-6 md:p-7 text-center shadow-sm h-full transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0c0b1e]/[0.06]">
                <div className="text-4xl md:text-5xl font-semibold grow-gradient-text leading-none">
                  {s.value}
                </div>
                <p className="text-[#0c0b1e]/60 text-sm leading-relaxed mt-3">
                  {s.label}
                </p>
              </div>
            </BlurIn>
          ))}
        </div>
        <BlurIn delay={0.4}>
          <p className="text-center text-[#0c0b1e]/40 text-xs mt-8">
            Figures reflect widely cited local-search and consumer-review
            studies (BrightLocal, Google).
          </p>
        </BlurIn>
      </SectionWrapper>

      {/* PROOF — testimonials */}
      <SectionWrapper className="bg-white/50 backdrop-blur-sm border-y border-black/10">
        <div className="text-center mb-12 md:mb-16">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight">
              Don&apos;t take my word for it. Hear it from{" "}
              <span className="grow-gradient-text font-display italic">
                them.
              </span>
            </h2>
          </BlurIn>
        </div>
        <StartTestimonials />
      </SectionWrapper>

      {/* PROOF — before/after */}
      <SectionWrapper>
        <div className="text-center mb-10 md:mb-12">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight">
              The kind of website that{" "}
              <span className="grow-gradient-text font-display italic">
                wins the call.
              </span>
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              Drag the slider to see a real before and after.
            </p>
          </BlurIn>
        </div>
        <StartComparison />
      </SectionWrapper>

      {/* THE OFFER — Foundation-centric */}
      <SectionWrapper
        id="plans"
        className="relative overflow-hidden grain-overlay bg-white/50 backdrop-blur-sm border-y border-black/10"
      >
        <AuroraBackdrop tone="indigo-cyan" />
        <div className="relative text-center max-w-2xl mx-auto mb-10 lg:mb-14">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight">
              Here&apos;s exactly what you{" "}
              <span className="grow-gradient-text font-display italic">
                get.
              </span>
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-base md:text-lg leading-relaxed mt-4">
              The Foundation Package does the heavy lifting for most businesses
              &mdash; but there&apos;s a fit for wherever you&apos;re starting.
            </p>
          </BlurIn>
          <BlurIn delay={0.3}>
            <p className="mt-5 text-sm font-medium text-[#0c0b1e]/50">
              No setup fee on any plan &middot; No contracts
            </p>
          </BlurIn>
        </div>

        {/* Pricing table — Foundation dominant on desktop, swipeable on mobile */}
        <StartPricingTable />

        {/* Website-only — its own rectangle below the table */}
        <BlurIn delay={0.25}>
          <div className="relative mt-6 md:mt-8 max-w-6xl mx-auto rounded-2xl border border-white/10 bg-[#0c0b1e] shadow-xl shadow-[#0c0b1e]/25 p-6 md:p-7 flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
            <div className="flex-1">
              <div className="flex items-baseline gap-2.5 flex-wrap">
                <h3 className="text-base md:text-lg font-medium text-white">
                  Just need a website?
                </h3>
                <span className="flex items-baseline gap-1">
                  <span className="text-xl font-semibold text-white">$147</span>
                  <span className="text-sm text-white/50">/mo</span>
                </span>
                <span className="text-sm text-white/50">
                  + $299 one-time setup
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mt-1.5">
                A fast, custom site with every lead in one inbox &mdash; look
                great online and never miss a call. The $299 setup is waived the
                moment you bundle it into the Foundation or Growth plan.
              </p>
            </div>
            <Link
              href="#book"
              className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-sm text-[#0c0b1e] bg-white hover:bg-white/90 transition duration-200 ease-out active:scale-[0.97] shadow-lg"
            >
              Book a Free Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </BlurIn>
      </SectionWrapper>

      {/* WHY BOOK NOW — risk reversal */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight">
              Booking the call costs you{" "}
              <span className="grow-gradient-text font-display italic">
                nothing.
              </span>
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-base md:text-lg leading-relaxed mt-4">
              Staying stuck is the expensive part. Every week you wait, the
              customers searching for what you do are calling someone else.
            </p>
          </BlurIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 max-w-5xl mx-auto">
          {[
            {
              icon: ShieldCheck,
              title: "Zero risk to find out",
              body: "The call is free with no obligation. No setup fee on any plan, no contract, cancel anytime. You risk 30 minutes and walk away with a real plan either way.",
            },
            {
              icon: Phone,
              title: "You work directly with me",
              body: "No account managers, no call centers, no outsourcing. You talk to Luke — the engineer who actually builds and runs your system.",
            },
            {
              icon: Star,
              title: "A few builds at a time",
              body: "I take on a handful of new builds each month so every one gets my full attention. When a spot's open, it's worth grabbing.",
            },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <BlurIn key={c.title} delay={0.1 + i * 0.1}>
                <div className="bg-white border border-black/[0.08] rounded-2xl p-5 md:p-7 shadow-sm h-full transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0c0b1e]/[0.06]">
                  <span className="grid place-items-center w-11 h-11 rounded-xl border border-accent/20 bg-accent/10">
                    <Icon className="w-5 h-5 text-accent" />
                  </span>
                  <h3 className="text-base md:text-lg font-medium text-[#0c0b1e] mt-4">
                    {c.title}
                  </h3>
                  <p className="text-[#0c0b1e]/60 text-sm leading-relaxed mt-2">
                    {c.body}
                  </p>
                </div>
              </BlurIn>
            );
          })}
        </div>
      </SectionWrapper>

      {/* FAQ — dissolve objections */}
      <SectionWrapper className="bg-white/50 backdrop-blur-sm border-y border-black/10">
        <div className="text-center mb-12 md:mb-16">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight">
              Still thinking it{" "}
              <span className="grow-gradient-text font-display italic">
                over?
              </span>
            </h2>
          </BlurIn>
        </div>
        <FAQAccordion items={startFAQ} />
      </SectionWrapper>

      {/* THE BOOKING — the whole point */}
      <SectionWrapper
        id="book"
        className="relative overflow-hidden grain-overlay"
      >
        <AuroraBackdrop tone="indigo-cyan" />
        <div className="relative text-center max-w-2xl mx-auto mb-10">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight">
              Let&apos;s map out your{" "}
              <span className="grow-gradient-text font-display italic">
                growth.
              </span>
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-base md:text-lg leading-relaxed mt-4">
              Pick a time below. In 30 minutes I&apos;ll walk you through exactly
              how my systems work, what they&apos;d do for your business, and the
              return you can expect. It&apos;s a value-first conversation, not a
              sales pitch.
            </p>
          </BlurIn>
        </div>

        {/* What we'll cover */}
        <div className="relative max-w-3xl mx-auto mb-10 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {[
            {
              t: "How the systems work",
              b: "The website, the review engine, and the inbox — in plain English, no jargon.",
            },
            {
              t: "What they'd do for you",
              b: "Tailored to your business, your area, and where you're at right now.",
            },
            {
              t: "The ROI",
              b: "What more reviews, better rankings, and a site that converts are actually worth.",
            },
          ].map((item, i) => (
            <BlurIn key={item.t} delay={0.1 + i * 0.08}>
              <div className="h-full bg-white border border-black/[0.08] rounded-2xl p-4 md:p-5 shadow-sm">
                <div className="flex items-center gap-2.5">
                  <span className="grid place-items-center w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                    {i + 1}
                  </span>
                  <h3 className="text-sm font-medium text-[#0c0b1e]">
                    {item.t}
                  </h3>
                </div>
                <p className="mt-2 text-xs md:text-sm text-[#0c0b1e]/60 leading-snug">
                  {item.b}
                </p>
              </div>
            </BlurIn>
          ))}
        </div>

        <StartCalendar />
      </SectionWrapper>

      {/* FINAL PUSH */}
      <section className="relative overflow-hidden grain-overlay py-16 lg:py-28 border-t border-black/10 text-center">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(45% 45% at 50% 50%, rgba(108,106,246,0.16), transparent 70%), radial-gradient(30% 30% at 72% 40%, rgba(52,211,224,0.14), transparent 70%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto px-6">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0c0b1e] tracking-tight leading-tight">
              You&apos;ve got two options.
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/70 text-base md:text-lg leading-relaxed mt-5">
              Keep hoping it turns around on its own &mdash; or give me 30
              minutes and leave with a real plan to grow. One of those is free,
              and it starts right here.
            </p>
          </BlurIn>
          <BlurIn delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <CTA>Book a Free Call</CTA>
              <a
                href="tel:+19787982870"
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-medium text-sm text-[#0c0b1e] border border-black/15 bg-white hover:bg-black/[0.03] hover:border-black/25 transition duration-200 ease-out active:scale-[0.97] shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#0e8090]" />
                (978) 798-2870
              </a>
            </div>
          </BlurIn>
        </div>
      </section>
    </main>
  );
}
