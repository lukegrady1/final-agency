import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import BlurIn from "@/components/BlurIn";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import StartTestimonials from "@/components/start/StartTestimonials";
import StartComparison from "@/components/start/StartComparison";
import StartPricing from "@/components/start/StartPricing";
import StartCalendar from "@/components/start/StartCalendar";
import AuroraBackdrop from "@/components/grow/AuroraBackdrop";

export const metadata: Metadata = {
  title: "Start Your Build — Plans from $97/Month",
  description:
    "A custom website from $97/month, or the full growth system with Google presence, reviews, SEO, and an all-in-one inbox for $297/month. No setup fee, cancel anytime.",
  keywords: [
    "get a business website",
    "local business website design",
    "local SEO services",
    "Google Business Profile setup",
    "online reviews",
    "lead management",
    "$97 website plan",
    "Grady Digital",
  ],
  alternates: { canonical: "/start" },
  openGraph: {
    title: "Start Your Build",
    description:
      "A custom website from $97/month, or the full growth system with Google presence, reviews, SEO, and an all-in-one inbox for $297/month. No setup fee, cancel anytime.",
  },
};

const problems = [
  "You don't have a website and you're invisible to anyone searching online.",
  "Your current site looks outdated and prospects judge your business in 5 seconds flat.",
  "Visitors land and leave because there's no clear call to action.",
  "Your site doesn't reflect the quality of your business or attract the right clients.",
  "You don't have time to manage updates, hosting, speed, or SEO.",
];

const startFAQ = [
  {
    question: "How much does it cost?",
    answer:
      "Three plans. The Website plan is $97 a month — a custom website, hosting, and an all-in-one inbox for your leads. Most businesses go with The Reputation System at $147 a month: it adds a review engine that fills your Google profile with 5-star reviews, which is what actually earns the trust and wins the call. The Growth System is $297 a month and adds everything that gets you found and chosen on top: your Google Business Profile posted and cross-posted, plus ongoing SEO. All three have no setup fee, no contract, and you can cancel anytime.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No. On any plan, your first month covers building your site and getting you live. No big check upfront.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most sites are live within a couple of weeks of you signing up and getting me what I need.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We'll audit what you have and either rebuild or redesign it from the ground up — focused on conversions and search visibility, not just aesthetics.",
  },
  {
    question: "Do I have to manage anything?",
    answer:
      "No. Hosting, updates, security, speed, SEO, Google Business Profile posting, social cross-posting, reviews, and your lead inbox are all handled. You focus on running your business; I handle the backend.",
  },
  {
    question: "What makes Grady Digital different?",
    answer:
      "You work directly with the person building your system — a software engineer, not an account manager. Every design decision is backed by marketing strategy and data.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "Local businesses where a single new customer is worth hundreds or thousands of dollars — contractors, electricians, auto detailers, restaurants, salons, and similar.",
  },
];

export default function StartPage() {
  return (
    <main className="bg-transparent text-[#0c0b1e]">
      {/* HERO */}
      <section className="relative pt-40 pb-24 lg:pb-32 overflow-hidden grain-overlay">
        <AuroraBackdrop tone="indigo-cyan" />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <BlurIn delay={0.15}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight lg:leading-[1.1] text-[#0c0b1e] tracking-tight mt-6">
              Stop losing clients to competitors with{" "}
              <span className="grow-gradient-text font-display italic">
                better websites.
              </span>
            </h1>
          </BlurIn>
          <BlurIn delay={0.3}>
            <p className="text-[#0c0b1e]/70 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              We build your website and run your Google presence so customers
              find you first and turn into paying clients. Plans start at $97 a
              month, no setup fee.
            </p>
          </BlurIn>
          <BlurIn delay={0.45}>
            <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
              <Link
                href="#book"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium text-sm text-white bg-gradient-to-r from-cyan via-accent to-violet hover:opacity-90 transition-opacity shadow-lg shadow-accent/25"
              >
                Book a Free Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center rounded-full px-6 py-3.5 font-medium text-sm text-[#0c0b1e] border border-black/10 bg-white hover:bg-black/[0.03] hover:border-black/20 transition-colors shadow-sm"
              >
                See Pricing
              </Link>
            </div>
          </BlurIn>
          <BlurIn delay={0.6}>
            <p className="text-[#0c0b1e]/40 text-xs mt-6">
              Trusted by growing local businesses
            </p>
          </BlurIn>
        </div>
      </section>

      {/* THE SHORT VERSION */}
      <SectionWrapper className="!pt-0">
        <div className="max-w-3xl mx-auto text-center">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
              How we build websites that actually generate{" "}
              <span className="grow-gradient-text font-display italic">
                clients
              </span>
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <div className="space-y-4 mt-6 text-left">
              <p className="text-[#0c0b1e]/70 text-base leading-relaxed">
                Most local business websites are online brochures. They look
                fine, but they don&apos;t bring in work. We build the opposite:
                a site engineered around one job — turning the people who find
                you into phone calls and booked jobs.
              </p>
              <p className="text-[#0c0b1e]/70 text-base leading-relaxed">
                Then we make sure people actually find you. We set up and post
                to your Google Business Profile, bring in more 5-star reviews,
                and work on your SEO so you rank higher and keep showing up when
                customers search for what you do. Those are ready-to-hire leads
                with real intent, not tire-kickers. Every call, text, and lead
                lands in one inbox so nothing slips through.
              </p>
              <p className="text-[#0c0b1e]/70 text-base leading-relaxed">
                You don&apos;t manage any of it. Hosting, updates, speed,
                security, and search are all handled for you — month to month,
                no contract. You run your business; I run the system that brings
                you customers.
              </p>
            </div>
          </BlurIn>
        </div>
      </SectionWrapper>

      {/* THE PROBLEM */}
      <SectionWrapper className="bg-white/50 backdrop-blur-sm border-y border-black/10">
        <div className="text-center mb-12">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4 max-w-3xl mx-auto">
              Your website is costing you{" "}
              <span className="grow-gradient-text font-display italic">
                money
              </span>{" "}
              right now
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              Every day your site isn&apos;t converting, someone else is getting
              the clients that should be calling you.
            </p>
          </BlurIn>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto">
          {problems.map((p, i) => (
            <BlurIn key={i} delay={i * 0.05} className={i === problems.length - 1 ? "md:col-span-2 flex justify-center" : ""}>
              <li className={`bg-white border border-black/[0.08] shadow-sm rounded-2xl p-4 md:p-5 flex items-start gap-3${i === problems.length - 1 ? " md:max-w-md w-full" : ""}`}>
                <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-xs font-medium text-accent shrink-0">
                  {i + 1}
                </span>
                <span className="text-[#0c0b1e]/80 text-xs md:text-sm leading-snug md:leading-relaxed">
                  {p}
                </span>
              </li>
            </BlurIn>
          ))}
        </ul>
      </SectionWrapper>

      {/* THE SOLUTION */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
              We build it. We manage it. You{" "}
              <span className="grow-gradient-text font-display italic">
                close deals.
              </span>
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              You&apos;re already getting traffic — from Google, referrals,
              social, ads. The problem is your site isn&apos;t turning those
              visitors into paying customers. We fix that.
            </p>
          </BlurIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "A website that turns clicks into calls",
              body: "Most websites lose nearly every visitor who lands on them. We build every page to do one job: turn the people who find you into phone calls and booked jobs.",
            },
            {
              title: "Get found on Google, trusted on social",
              body: "We set up and post to your Google listing, share it to Instagram, Facebook, and YouTube, bring in more 5-star reviews and reply to them, and work on your SEO so you rank higher and get found by customers who are ready to hire, not just browsing.",
            },
            {
              title: "Everything managed for you",
              body: "Hosting, updates, security, and speed, all handled. You also get an all-in-one inbox where every call, text, and lead lands in one place.",
            },
          ].map((item, i) => (
            <BlurIn key={item.title} delay={i * 0.1}>
              <div className="bg-white border border-black/[0.08] shadow-sm rounded-2xl p-4 md:p-6 h-full">
                <div className="flex items-center gap-3 md:block">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                    <Check className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-[#0c0b1e] md:mt-4">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#0c0b1e]/60 text-xs md:text-sm leading-snug md:leading-relaxed mt-2">
                  {item.body}
                </p>
              </div>
            </BlurIn>
          ))}
        </div>
      </SectionWrapper>

      {/* TESTIMONIALS */}
      <SectionWrapper className="bg-white/50 backdrop-blur-sm border-y border-black/10">
        <div className="text-center mb-16">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
              Don&apos;t take our word for it. Hear it from{" "}
              <span className="grow-gradient-text font-display italic">
                them.
              </span>
            </h2>
          </BlurIn>
        </div>
        <StartTestimonials />
      </SectionWrapper>

      {/* SITE COMPARISON */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
              See the{" "}
              <span className="grow-gradient-text font-display italic">
                difference
              </span>{" "}
              Grady Digital makes
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              Drag the slider to see the before and after.
            </p>
          </BlurIn>
        </div>
        <StartComparison />
      </SectionWrapper>

      {/* PRICING */}
      <SectionWrapper id="pricing" className="bg-white/50 backdrop-blur-sm border-y border-black/10">
        <div className="text-center mb-16">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
              Simple, no-contract{" "}
              <span className="grow-gradient-text font-display italic">
                pricing
              </span>
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              Three plans. Month-to-month. Cancel anytime.
            </p>
          </BlurIn>
        </div>
        <StartPricing />
        <BlurIn delay={0.3}>
          <p className="text-center text-[#0c0b1e]/40 text-xs mt-8">
            Not sure if it&apos;s a fit? Book a free call below — no pressure.
          </p>
        </BlurIn>

      </SectionWrapper>

      {/* HOW IT WORKS */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
              Three steps to a site that{" "}
              <span className="grow-gradient-text font-display italic">
                sells
              </span>{" "}
              for you
            </h2>
          </BlurIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              n: "01",
              t: "Book a 30-minute call",
              b: "We learn about your business, your goals, and what's not working with your current site (or lack of one).",
            },
            {
              n: "02",
              t: "We design and build in days",
              b: "Custom, conversion-focused, SEO-ready. Built around your brand and engineered to turn visitors into leads.",
            },
            {
              n: "03",
              t: "We manage everything",
              b: "Hosting, updates, speed, SEO, your lead inbox. All handled. You focus on closing deals.",
            },
          ].map((step, i) => (
            <BlurIn key={step.n} delay={i * 0.1}>
              <div className="bg-white border border-black/[0.08] shadow-sm rounded-2xl p-4 md:p-6 h-full flex items-start gap-4 md:block">
                <span className="text-3xl md:text-5xl leading-none font-medium text-transparent bg-clip-text bg-gradient-to-br from-black/[0.14] to-black/[0.04] shrink-0">
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

      {/* BOOK A CALL */}
      <SectionWrapper
        id="book"
        className="relative overflow-hidden grain-overlay bg-white/50 backdrop-blur-sm border-y border-black/10"
      >
        <AuroraBackdrop tone="indigo-cyan" />
        <div className="text-center mb-10">
          <BlurIn delay={0.1}>
            <h3 className="text-2xl md:text-3xl font-medium text-[#0c0b1e] tracking-tight mt-4">
              Pick a time that{" "}
              <span className="grow-gradient-text font-display italic">
                works
              </span>{" "}
              for you
            </h3>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-sm leading-relaxed max-w-xl mx-auto mt-3">
              30-minute call with Luke. We&apos;ll do an audit of your current
              site and Google page, show you a roadmap of what we&apos;d do,
              and show you exactly how it&apos;ll bring you more leads.
            </p>
          </BlurIn>
        </div>
        <StartCalendar />
      </SectionWrapper>

      {/* WHO BUILDS YOUR SITE */}
      <SectionWrapper className="bg-white/50 backdrop-blur-sm border-y border-black/10">
        <div className="max-w-3xl mx-auto text-center">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
              Built by an engineer who thinks like a{" "}
              <span className="grow-gradient-text font-display italic">
                marketer.
              </span>
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <div className="space-y-4 mt-6">
              <p className="text-[#0c0b1e]/70 text-base leading-relaxed">
                I&apos;m Luke. I&apos;ve helped businesses increase their
                online visibility, capture more leads, and turn their websites
                into systems that actually generate revenue.
              </p>
              <p className="text-[#0c0b1e]/70 text-base leading-relaxed">
                I started Grady Digital because most web designers make pretty
                pages that don&apos;t convert. I build websites the same way I
                build software systems — every element has a job, and that job
                is getting you clients.
              </p>
            </div>
          </BlurIn>
          <BlurIn delay={0.3}>
            <Link
              href="#book"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium text-sm text-white bg-gradient-to-r from-cyan via-accent to-violet hover:opacity-90 transition-opacity shadow-lg shadow-accent/25 mt-8"
            >
              Let&apos;s talk about your site
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </BlurIn>
        </div>
      </SectionWrapper>

      {/* WHY US vs THEM (small extra comparison table tying back to siterabbits idea) */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
              Grady Digital vs. the typical{" "}
              <span className="grow-gradient-text font-display italic">
                agency
              </span>
            </h2>
          </BlurIn>
        </div>
        <BlurIn>
          <div className="max-w-4xl mx-auto bg-white border border-black/[0.08] shadow-sm rounded-2xl overflow-hidden">
            <div className="grid grid-cols-[1.6fr_1fr_1fr] md:grid-cols-3 text-xs md:text-sm">
              <div className="px-3 py-2.5 md:px-6 md:py-4 border-b border-black/[0.08] text-[#0c0b1e]/60">
                Feature
              </div>
              <div className="px-3 py-2.5 md:px-6 md:py-4 border-b border-l border-black/[0.08] text-accent font-medium">
                Grady Digital
              </div>
              <div className="px-3 py-2.5 md:px-6 md:py-4 border-b border-l border-black/[0.08] text-[#0c0b1e]/60">
                Typical agency
              </div>
              {[
                ["Direct access to founder", true, false],
                ["Month-to-month, no contracts", true, false],
                ["All-in-one inbox included", true, false],
                ["Hosting + updates managed", true, true],
                ["Long onboarding & retainers", false, true],
                ["Hands-off after launch", false, true],
              ].map((row, i) => (
                <div className="contents" key={i}>
                  <div className="px-3 py-2.5 md:px-6 md:py-4 border-b border-black/[0.08] text-[#0c0b1e]/80">
                    {row[0]}
                  </div>
                  <div className="px-3 py-2.5 md:px-6 md:py-4 border-b border-l border-black/[0.08]">
                    {row[1] ? (
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                    ) : (
                      <X className="w-4 h-4 md:w-5 md:h-5 text-[#0c0b1e]/30" />
                    )}
                  </div>
                  <div className="px-3 py-2.5 md:px-6 md:py-4 border-b border-l border-black/[0.08]">
                    {row[2] ? (
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-[#0c0b1e]/50" />
                    ) : (
                      <X className="w-4 h-4 md:w-5 md:h-5 text-[#0c0b1e]/30" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurIn>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-white/50 backdrop-blur-sm border-y border-black/10">
        <div className="text-center mb-16">
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
              Everything you need to{" "}
              <span className="grow-gradient-text font-display italic">
                know
              </span>
            </h2>
          </BlurIn>
        </div>
        <FAQAccordion items={startFAQ} />
      </SectionWrapper>

      <CTABanner />
    </main>
  );
}
