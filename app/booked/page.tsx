import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Mail,
  MessageSquare,
  Globe,
  Star,
  Search,
  Inbox,
  UserRound,
} from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionLabel from "@/components/SectionLabel";
import BlurIn from "@/components/BlurIn";
import FAQAccordion from "@/components/FAQAccordion";
import BookedHero from "@/components/booked/BookedHero";

export const metadata: Metadata = {
  title: "You're Booked — Your Roadmap Call",
  description:
    "Your Roadmap Call with Grady Digital is confirmed. Run your free Google Business Profile audit before we talk so we walk in with real data.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/booked" },
};

// Merchynt white-label GBP audit tool. Make sure each submission is sent to
// you before the call.
const AUDIT_URL = "https://audit.seo.gradydigital.com";

const faqItems = [
  {
    question: "What exactly is a Roadmap Call?",
    answer:
      "A working session where we go through your Google audit together, pinpoint what's costing you jobs, and map out exactly how I'll fix it. You'll see precisely what I'd build for your business and the results to expect.",
  },
  {
    question: "What do you actually do?",
    answer:
      "I build you a custom website, run your Google Business Profile, bring in and respond to your reviews, handle your SEO every month, and put every call, text, and web lead in one inbox. Built and managed for you, start to finish.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Three plans. The Website plan is $97 a month — a custom website with one inbox for all your leads. The Reputation System is $147 a month — the most popular pick — and adds a review engine that fills your Google profile with 5-star reviews. The Growth System is $297 a month and adds your Google profile posting and SEO on top, so you actually get found and chosen. All three have no setup fee and you can cancel anytime. I'll help you pick the right one on the call.",
  },
  {
    question: "How much work is this for me?",
    answer:
      "Almost none. I build everything and manage it month to month. You run your business; I get you found online and bring you the leads.",
  },
  {
    question: "How fast could I be up and running?",
    answer:
      "Your site goes live within 10 business days. If I miss that, your next month is free.",
  },
  {
    question: "What if I already have a website?",
    answer:
      "I rebuild it from the ground up. Everything runs on my own system in the backend — your site, Google profile, reviews, SEO, and lead inbox all connected in one place — so it's built right and fully managed. The rebuild is included either way.",
  },
];

const portfolio = [
  {
    name: "Imagine Construction",
    category: "General Contractor",
    image: "/site_after.webp",
    url: null,
  },
  {
    name: "MJP Auto Detailing",
    category: "Auto Detailing",
    image: "/mjp_after.webp",
    url: "https://mjpautodetailing.com/",
  },
  {
    name: "Reece Electric",
    category: "Electrical Contractor",
    image: "/reece_after.webp",
    url: "https://reecegroupllc.com/",
  },
  {
    name: "Greater Boston Livery",
    category: "Car Service",
    image: "/gbl_after.webp",
    url: "https://greaterbostonlivery.com/",
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
    b: "Live within 10 business days, or your next month is free.",
  },
  {
    n: "04",
    t: "I Manage It",
    b: "Website, Google profile, reviews, SEO, and your lead inbox — all handled. Need a change? Just text me.",
  },
];

const included = [
  {
    icon: Globe,
    title: "Custom Website",
    body: "Fast, professional, built to turn visitors into booked jobs.",
  },
  {
    icon: Search,
    title: "Google Business Profile & Social",
    body: "Set up right, posted to weekly, cross-posted to Instagram, Facebook, and YouTube.",
  },
  {
    icon: Star,
    title: "More & Better Reviews",
    body: "We bring them in and reply to every one for you.",
  },
  {
    icon: MessageSquare,
    title: "SEO",
    body: "Ongoing work every month so customers find you first.",
  },
  {
    icon: Inbox,
    title: "One Lead Inbox",
    body: "Every call, text, and web lead in one place.",
  },
  {
    icon: UserRound,
    title: "Direct Access to Me",
    body: "You work with the person who builds and runs your site.",
  },
];

export default function BookedPage() {
  return (
    <main className="bg-transparent text-[#0c0b1e]">
      {/* SECTION 1 — HERO */}
      <Suspense fallback={<div className="pt-24 lg:pt-28 pb-10" />}>
        <BookedHero />
      </Suspense>

      {/* SECTION 3 — STEP 2: RUN YOUR FREE AUDIT (centerpiece) */}
      <SectionWrapper className="!pt-0">
        <BlurIn>
          <div className="relative max-w-3xl mx-auto rounded-3xl border border-accent/25 bg-white shadow-sm p-8 lg:p-12 overflow-hidden grain-overlay">
            <div
              className="absolute inset-0 opacity-70 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(108,106,246,0.12) 0%, transparent 70%)",
              }}
            />
            <div className="relative text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 text-xs text-accent font-medium">
                Step 1 — Do this before our call
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-5">
                Run your free Google Profile audit
              </h2>
              <p className="text-[#0c0b1e]/70 text-base leading-relaxed max-w-xl mx-auto mt-5">
                Before we talk, run this quick audit of your Google Business
                Profile. It takes about a minute and shows exactly how you&apos;re
                showing up when customers search for you — what&apos;s working,
                what&apos;s hurting you, and where you&apos;re losing jobs to
                competitors.
              </p>
              <p className="text-[#0c0b1e]/70 text-base leading-relaxed max-w-xl mx-auto mt-4">
                <span className="text-[#0c0b1e] font-medium">
                  Why this matters:
                </span>{" "}
                I&apos;ll be able to see your results too, so instead of guessing,
                we&apos;ll spend our whole call going through your real numbers and
                building your roadmap around them. It&apos;s the difference between
                a generic chat and a plan made specifically for your business.
              </p>
              <a
                href={AUDIT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-white bg-gradient-to-r from-cyan via-accent to-violet font-medium text-base hover:opacity-90 transition-opacity mt-8 shadow-lg shadow-accent/25"
              >
                Run My Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <p className="text-[#0c0b1e]/40 text-xs mt-4">
                Takes ~1 minute. This is what we&apos;ll build your roadmap from —
                please run it before we talk.
              </p>
              <p className="text-[#0c0b1e]/50 text-sm mt-6 border-t border-black/10 pt-6">
                Already done it? Perfect — you&apos;re all set for the call. Come
                ready with any questions.
              </p>
            </div>
          </div>
        </BlurIn>
      </SectionWrapper>

      {/* SECTION 3.5 — STEP 2: SHOW UP READY */}
      <SectionWrapper className="!pt-0">
        <div className="max-w-2xl mx-auto text-center">
          <BlurIn>
            <SectionLabel>Step 2</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.2}>
            <h2 className="font-display italic text-3xl md:text-4xl text-[#0c0b1e] mt-6">
              Show Up Ready
            </h2>
          </BlurIn>
          <BlurIn delay={0.3}>
            <p className="text-[#0c0b1e]/60 text-base leading-relaxed mt-4">
              By the time we talk, you&apos;ll already know exactly how I&apos;d
              get you found and booking more jobs. Come with your questions and
              we&apos;ll lock in the plan.
            </p>
          </BlurIn>
          <BlurIn delay={0.4}>
            <a
              href="https://mail.google.com/mail/u/0/#search/from:luke@gradydigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-4 text-white bg-gradient-to-r from-cyan via-accent to-violet font-medium text-base hover:opacity-90 transition-opacity mt-8 shadow-lg shadow-accent/25"
            >
              <Mail className="w-4 h-4" />
              Check Your Email
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </BlurIn>
          <BlurIn delay={0.5}>
            <p className="text-[#0c0b1e]/40 text-sm mt-6">
              Look for an email from{" "}
              <span className="text-[#0c0b1e]/60">luke@gradydigital.com</span> with
              your calendar invite and call link.
            </p>
          </BlurIn>
        </div>
      </SectionWrapper>

      {/* SECTION 4 — FAQ */}
      <SectionWrapper className="bg-white/50 backdrop-blur-sm border-y border-black/10">
        <div className="text-center mb-12">
          <BlurIn>
            <SectionLabel>Before the Call</SectionLabel>
          </BlurIn>
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

      {/* SECTION 5 — THE WORK (proof) */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <BlurIn>
            <SectionLabel>The Work</SectionLabel>
          </BlurIn>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {portfolio.map((project, i) => {
            const card = (
              <div className="group block bg-white border border-black/[0.08] rounded-2xl overflow-hidden shadow-sm transition-colors hover:border-black/20 h-full">
                <div className="relative aspect-[16/10] bg-[#eef0f7]">
                  <Image
                    src={project.image}
                    alt={`${project.name} website by Grady Digital`}
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <div className="p-6 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-[#0c0b1e]">
                      {project.name}
                    </h3>
                    <p className="text-[#0c0b1e]/50 text-sm mt-1">
                      {project.category}
                    </p>
                  </div>
                  {project.url && (
                    <span className="inline-flex items-center gap-1 text-accent text-sm group-hover:gap-2 transition-all shrink-0">
                      Visit
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
              </div>
            );
            return (
              <BlurIn key={project.name} delay={i * 0.1}>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {card}
                  </a>
                ) : (
                  card
                )}
              </BlurIn>
            );
          })}
        </div>
      </SectionWrapper>

      {/* SECTION 6 — HOW IT WORKS */}
      <SectionWrapper className="bg-white/50 backdrop-blur-sm border-y border-black/10">
        <div className="text-center mb-16">
          <BlurIn>
            <SectionLabel>How It Works</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
              From Roadmap Call to live in 10 days
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              No tech headaches on your end. Here&apos;s the whole process.
            </p>
          </BlurIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {howItWorks.map((step, i) => (
            <BlurIn key={step.n} delay={i * 0.1}>
              <div className="bg-white border border-black/[0.08] rounded-2xl p-6 h-full shadow-sm">
                <span className="text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-br from-black/[0.12] to-black/[0.04]">
                  {step.n}
                </span>
                <h3 className="text-lg font-medium text-[#0c0b1e] mt-2">
                  {step.t}
                </h3>
                <p className="text-[#0c0b1e]/60 text-sm leading-relaxed mt-2">
                  {step.b}
                </p>
              </div>
            </BlurIn>
          ))}
        </div>
      </SectionWrapper>

      {/* SECTION 7 — WHAT'S INCLUDED */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <BlurIn>
            <SectionLabel>What&apos;s Included</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
              The full Growth System — $297/mo
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              Everything below, built and managed for you. Want the website plus
              a 5-star review engine? That&apos;s The Reputation System at $147/mo,
              the most popular pick. Just need the website and lead inbox?
              That&apos;s the Website plan at $97/mo. No setup fee on any plan,
              cancel anytime.
            </p>
          </BlurIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {included.map((item, i) => (
            <BlurIn key={item.title} delay={i * 0.08}>
              <div className="bg-white border border-black/[0.08] rounded-2xl p-6 h-full shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-[#0c0b1e] mt-4">
                  {item.title}
                </h3>
                <p className="text-[#0c0b1e]/60 text-sm leading-relaxed mt-2">
                  {item.body}
                </p>
              </div>
            </BlurIn>
          ))}
        </div>
      </SectionWrapper>

      {/* SECTION 8 — GET EXCITED / CHECK YOUR EMAIL */}
      <SectionWrapper className="bg-white/50 backdrop-blur-sm border-t border-black/10">
        <div className="max-w-3xl mx-auto text-center">
          <BlurIn>
            <SectionLabel>You&apos;re All Set</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
              See you on the call
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/70 text-base leading-relaxed mt-5">
              Once you run the audit, we&apos;ll both have your real numbers in
              hand. That means our call won&apos;t be a generic chat — it&apos;ll
              be a plan built specifically for your business. I&apos;m looking
              forward to it.
            </p>
          </BlurIn>
          <BlurIn delay={0.3}>
            <div className="bg-white border border-black/[0.08] rounded-2xl p-6 mt-8 text-left shadow-sm">
              <p className="text-sm font-medium text-[#0c0b1e] mb-4">
                Quick recap before we talk:
              </p>
              <ul className="space-y-3">
                {[
                  "Ran your free Google Business Profile audit (Step 1 — do this if you haven't!)",
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
    </main>
  );
}
