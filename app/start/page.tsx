import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, X, Sparkles } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionLabel from "@/components/SectionLabel";
import BlurIn from "@/components/BlurIn";
import CTABanner from "@/components/CTABanner";
import FAQAccordion from "@/components/FAQAccordion";
import StartVSL from "@/components/start/StartVSL";
import StartTestimonials from "@/components/start/StartTestimonials";
import StartComparison from "@/components/start/StartComparison";
import StartPricing from "@/components/start/StartPricing";
import StartCalendar from "@/components/start/StartCalendar";

export const metadata: Metadata = {
  title: "Start Your Build",
  description:
    "Stop losing clients to competitors with better websites. We build and manage AI-powered websites that turn visitors into paying clients.",
  alternates: { canonical: "/start" },
  openGraph: {
    title: "Start Your Build",
    description:
      "We build and manage AI-powered websites that turn visitors into paying clients.",
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
      "$97/month or $970/year. Every site is custom built for businesses that want a real revenue engine, not just a brochure.",
  },
  {
    question: "How long does it take?",
    answer:
      "Your site will be up and running within two weeks. We move fast because every day without a converting site is leads going to your competitors.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "We'll audit what you have and either rebuild or redesign it from the ground up — focused on conversions and search visibility, not just aesthetics.",
  },
  {
    question: "Do I have to manage anything?",
    answer:
      "No. Hosting, updates, security, speed, SEO, and AI agents are all handled. You focus on running your business; we handle the backend.",
  },
  {
    question: "What makes Grady Digital different?",
    answer:
      "You work directly with a software engineer who builds AI systems — not an account manager who outsources the work. Every design decision is backed by marketing strategy and data.",
  },
  {
    question: "What kind of businesses do you work with?",
    answer:
      "Local service businesses where a single new customer is worth hundreds or thousands of dollars — contractors, home services, healthcare, restaurants, salons, and similar.",
  },
];

export default function StartPage() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative pt-40 pb-24 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(108,106,246,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <BlurIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 backdrop-blur-sm px-3 py-1.5 text-xs text-white/80">
              <Sparkles className="w-3.5 h-3.5 text-accent-light" />
              Now booking new builds
            </span>
          </BlurIn>
          <BlurIn delay={0.15}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight lg:leading-[1.1] text-white mt-6">
              Stop losing clients to competitors with{" "}
              <span className="font-display italic text-accent-light">
                better websites.
              </span>
            </h1>
          </BlurIn>
          <BlurIn delay={0.3}>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              We build and manage AI-powered, conversion-focused websites so
              you show up on Google, look the part, and turn visitors into
              paying clients.
            </p>
          </BlurIn>
          <BlurIn delay={0.45}>
            <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200"
              >
                Book a Free Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center rounded-full px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium text-sm hover:bg-white/20 transition-colors duration-200"
              >
                See Pricing
              </Link>
            </div>
          </BlurIn>
          <BlurIn delay={0.6}>
            <p className="text-white/40 text-xs mt-6">
              Trusted by growing local service businesses
            </p>
          </BlurIn>
        </div>
      </section>

      {/* VSL */}
      <SectionWrapper className="!pt-0">
        <div className="text-center mb-10">
          <BlurIn>
            <SectionLabel>Watch this first</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
              How we build websites that actually generate clients
            </h2>
          </BlurIn>
        </div>
        <StartVSL />
      </SectionWrapper>

      {/* THE PROBLEM */}
      <SectionWrapper className="bg-white/[0.02] border-y border-white/[0.08]">
        <div className="text-center mb-12">
          <BlurIn>
            <SectionLabel>The problem</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-white mt-4 max-w-3xl mx-auto">
              Your website is costing you money right now
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              Every day your site isn&apos;t converting, someone else is getting
              the clients that should be calling you.
            </p>
          </BlurIn>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {problems.map((p, i) => (
            <BlurIn key={i} delay={i * 0.05} className={i === problems.length - 1 ? "md:col-span-2 flex justify-center" : ""}>
              <li className={`bg-card border border-card-border rounded-2xl p-5 flex items-start gap-3${i === problems.length - 1 ? " md:max-w-md w-full" : ""}`}>
                <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs text-white/50 shrink-0">
                  {i + 1}
                </span>
                <span className="text-white/80 text-sm leading-relaxed">
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
          <BlurIn>
            <SectionLabel>The Grady Digital solution</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
              We build it. We manage it. You close deals.
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              You&apos;re already getting traffic — from Google, referrals,
              social, ads. The problem is your site isn&apos;t turning those
              visitors into paying customers. We fix that.
            </p>
          </BlurIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Converts the traffic you already have",
              body: "Most sites leak 95% of their visitors. We engineer every page to capture leads from the clicks you're already paying for.",
            },
            {
              title: "Built for Google + AI search",
              body: "SEO baked in from day one. Structured data, fast performance, and content strategy.",
            },
            {
              title: "Fully managed for you",
              body: "Hosting, updates, security, speed optimization. All handled. You never touch the backend.",
            },
          ].map((item, i) => (
            <BlurIn key={item.title} delay={i * 0.1}>
              <div className="bg-card border border-card-border rounded-2xl p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-white mt-4">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mt-2">
                  {item.body}
                </p>
              </div>
            </BlurIn>
          ))}
        </div>
      </SectionWrapper>

      {/* TESTIMONIALS */}
      <SectionWrapper className="bg-white/[0.02] border-y border-white/[0.08]">
        <div className="text-center mb-16">
          <BlurIn>
            <SectionLabel>What clients say</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
              Don&apos;t take our word for it. Hear it from them.
            </h2>
          </BlurIn>
        </div>
        <StartTestimonials />
      </SectionWrapper>

      {/* SITE COMPARISON */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <BlurIn>
            <SectionLabel>The transformation</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
              See the difference Grady Digital makes
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              Drag the slider to see the before and after.
            </p>
          </BlurIn>
        </div>
        <StartComparison />
      </SectionWrapper>

      {/* PRICING */}
      <SectionWrapper id="pricing" className="bg-white/[0.02] border-y border-white/[0.08]">
        <div className="text-center mb-16">
          <BlurIn>
            <SectionLabel>Pricing</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
              Simple, no-contract pricing
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              Month-to-month. Cancel anytime. Pick the plan that fits where
              your business is right now.
            </p>
          </BlurIn>
        </div>
        <StartPricing />
        <BlurIn delay={0.3}>
          <p className="text-center text-white/40 text-xs mt-8">
            Not sure if it&apos;s a fit? Book a free call below — no pressure.
          </p>
        </BlurIn>

      </SectionWrapper>

      {/* HOW IT WORKS */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <BlurIn>
            <SectionLabel>How it works</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
              Three steps to a site that sells for you
            </h2>
          </BlurIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              n: "01",
              t: "Book a 15-minute call",
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
              b: "Hosting, updates, speed, SEO, AI agents. All handled. You focus on closing deals.",
            },
          ].map((step, i) => (
            <BlurIn key={step.n} delay={i * 0.1}>
              <div className="bg-card border border-card-border rounded-2xl p-6 h-full">
                <span className="text-5xl font-medium text-white/10">
                  {step.n}
                </span>
                <h3 className="text-lg font-medium text-white mt-2">
                  {step.t}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mt-2">
                  {step.b}
                </p>
              </div>
            </BlurIn>
          ))}
        </div>
      </SectionWrapper>

      {/* BOOK A CALL */}
      <SectionWrapper className="bg-white/[0.02] border-y border-white/[0.08]">
        <div className="text-center mb-10">
          <BlurIn>
            <SectionLabel>Book your call</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h3 className="text-2xl md:text-3xl font-medium text-white mt-4">
              Pick a time that works for you
            </h3>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto mt-3">
              15-minute call with Luke. We&apos;ll break down what&apos;s
              not working on your current site, show you a custom mockup
              of what we&apos;d build for you, and walk through exactly how
              it drives more leads.
            </p>
          </BlurIn>
        </div>
        <StartCalendar />
      </SectionWrapper>

      {/* WHO BUILDS YOUR SITE */}
      <SectionWrapper className="bg-white/[0.02] border-y border-white/[0.08]">
        <div className="max-w-3xl mx-auto text-center">
          <BlurIn>
            <SectionLabel>Who builds your site</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
              Built by an engineer who thinks like a marketer.
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <div className="space-y-4 mt-6">
              <p className="text-white/70 text-base leading-relaxed">
                I&apos;m Luke. I&apos;ve helped businesses increase their
                online visibility, capture more leads, and turn their websites
                into systems that actually generate revenue.
              </p>
              <p className="text-white/70 text-base leading-relaxed">
                I started Grady Digital because most web designers make pretty
                pages that don&apos;t convert. I build websites the same way I
                build software systems — every element has a job, and that job
                is getting you clients.
              </p>
            </div>
          </BlurIn>
          <BlurIn delay={0.3}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200 mt-8"
            >
              Let&apos;s talk about your site
              <ArrowRight className="w-4 h-4" />
            </Link>
          </BlurIn>
        </div>
      </SectionWrapper>

      {/* WHY US vs THEM (small extra comparison table tying back to siterabbits idea) */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <BlurIn>
            <SectionLabel>Why us</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
              Grady Digital vs. the typical agency
            </h2>
          </BlurIn>
        </div>
        <BlurIn>
          <div className="max-w-4xl mx-auto bg-card border border-card-border rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 text-sm">
              <div className="px-6 py-4 border-b border-card-border text-white/60">
                Feature
              </div>
              <div className="px-6 py-4 border-b border-l border-card-border text-accent-light font-medium">
                Grady Digital
              </div>
              <div className="px-6 py-4 border-b border-l border-card-border text-white/60">
                Typical agency
              </div>
              {[
                ["Direct access to founder", true, false],
                ["Month-to-month, no contracts", true, false],
                ["Hosting + updates managed", true, true],
                ["Long onboarding & retainers", false, true],
                ["Hands-off after launch", false, true],
              ].map((row, i) => (
                <div className="contents" key={i}>
                  <div className="px-6 py-4 border-b border-card-border text-white/80">
                    {row[0]}
                  </div>
                  <div className="px-6 py-4 border-b border-l border-card-border">
                    {row[1] ? (
                      <Check className="w-5 h-5 text-accent-light" />
                    ) : (
                      <X className="w-5 h-5 text-white/30" />
                    )}
                  </div>
                  <div className="px-6 py-4 border-b border-l border-card-border">
                    {row[2] ? (
                      <Check className="w-5 h-5 text-white/50" />
                    ) : (
                      <X className="w-5 h-5 text-white/30" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurIn>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-white/[0.02] border-y border-white/[0.08]">
        <div className="text-center mb-16">
          <BlurIn>
            <SectionLabel>Common questions</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
              Everything you need to know
            </h2>
          </BlurIn>
        </div>
        <FAQAccordion items={startFAQ} />
      </SectionWrapper>

      <CTABanner />
    </main>
  );
}
