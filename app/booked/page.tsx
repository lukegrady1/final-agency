import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
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
import WelcomeVideo from "@/components/booked/WelcomeVideo";

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

const videoBullets = [
  {
    label: "What we'll do",
    body: "Go through your Google presence and map out exactly what to fix.",
  },
  {
    label: "What you'll leave with",
    body: "A clear plan to get found and book more jobs.",
  },
  {
    label: "What it costs",
    body: "One flat plan — $297/mo, built and managed for you.",
  },
];

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
      "One flat plan — $297 a month. Custom website, your Google profile, reviews, SEO, and one inbox for all your leads. No setup fee, cancel anytime. I'll break it all down on the call.",
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
      "I rebuild it from the ground up. Everything runs on my own system in the backend — your site, Google profile, reviews, SEO, and lead inbox all connected in one place — so it's built right and fully managed. That's included in the same plan.",
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
    <main className="bg-background text-foreground">
      {/* SECTION 1 — HERO */}
      <Suspense fallback={<div className="pt-24 lg:pt-28 pb-10" />}>
        <BookedHero />
      </Suspense>

      {/* SECTION 2 — STEP 1: WATCH THIS FIRST */}
      <SectionWrapper className="!pt-0">
        <div className="text-center mb-8">
          <BlurIn>
            <SectionLabel>Step 1</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
              Watch this first{" "}
              <span className="text-white/40">(60 seconds)</span>
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              A quick hello, and exactly what I&apos;ll cover on your Roadmap
              Call.
            </p>
          </BlurIn>
        </div>
        <WelcomeVideo />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
          {videoBullets.map((bullet, i) => (
            <BlurIn key={bullet.label} delay={i * 0.1}>
              <div className="bg-card border border-card-border rounded-2xl p-5 h-full">
                <div className="flex items-center gap-2 text-accent-light">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span className="text-sm font-medium text-white">
                    {bullet.label}
                  </span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mt-2">
                  {bullet.body}
                </p>
              </div>
            </BlurIn>
          ))}
        </div>
      </SectionWrapper>

      {/* SECTION 3 — STEP 2: RUN YOUR FREE AUDIT (centerpiece) */}
      <SectionWrapper className="!pt-0">
        <BlurIn>
          <div className="relative max-w-3xl mx-auto rounded-3xl border border-accent/40 bg-accent/[0.06] p-8 lg:p-12 overflow-hidden">
            <div
              className="absolute inset-0 opacity-60 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(108,106,246,0.22) 0%, transparent 70%)",
              }}
            />
            <div className="relative text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-3 py-1.5 text-xs text-accent-light font-medium">
                Step 2 — Do this before our call
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-white mt-5">
                Run your free Google Profile audit
              </h2>
              <p className="text-white/70 text-base leading-relaxed max-w-xl mx-auto mt-5">
                Before we talk, run this quick audit of your Google Business
                Profile. It takes about a minute and shows exactly how you&apos;re
                showing up when customers search for you — what&apos;s working,
                what&apos;s hurting you, and where you&apos;re losing jobs to
                competitors.
              </p>
              <p className="text-white/70 text-base leading-relaxed max-w-xl mx-auto mt-4">
                <span className="text-white font-medium">
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
                className="inline-flex items-center gap-2 rounded-full px-7 py-4 bg-accent text-white font-medium text-base hover:bg-accent-light transition-colors duration-200 mt-8 shadow-lg shadow-accent/20"
              >
                Run My Free Audit
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-white/40 text-xs mt-4">
                Takes ~1 minute. This is what we&apos;ll build your roadmap from —
                please run it before we talk.
              </p>
              <p className="text-white/50 text-sm mt-6 border-t border-white/10 pt-6">
                Already done it? Perfect — you&apos;re all set for the call. Come
                ready with any questions.
              </p>
            </div>
          </div>
        </BlurIn>
      </SectionWrapper>

      {/* SECTION 3.5 — STEP 3: SHOW UP READY */}
      <SectionWrapper className="!pt-0">
        <div className="max-w-2xl mx-auto text-center">
          <BlurIn>
            <SectionLabel>Step 3</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.2}>
            <h2 className="font-display italic text-3xl md:text-4xl text-white mt-6">
              Show Up Ready
            </h2>
          </BlurIn>
          <BlurIn delay={0.3}>
            <p className="text-white/60 text-base leading-relaxed mt-4">
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
              className="inline-flex items-center gap-2 rounded-full px-7 py-4 bg-accent text-white font-medium text-base hover:bg-accent-light transition-colors duration-200 mt-8 shadow-lg shadow-accent/20"
            >
              <Mail className="w-4 h-4" />
              Check Your Email
              <ArrowRight className="w-4 h-4" />
            </a>
          </BlurIn>
          <BlurIn delay={0.5}>
            <p className="text-white/40 text-sm mt-6">
              Look for an email from{" "}
              <span className="text-white/60">luke@gradydigital.com</span> with
              your calendar invite and call link.
            </p>
          </BlurIn>
        </div>
      </SectionWrapper>

      {/* SECTION 4 — FAQ */}
      <SectionWrapper className="bg-white/[0.02] border-y border-white/[0.08]">
        <div className="text-center mb-12">
          <BlurIn>
            <SectionLabel>Before the Call</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
              Questions you might be wondering
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
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
            <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
              Sites I&apos;ve built for businesses like yours
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              Real websites for real local businesses. This is the kind of thing
              I&apos;d build for you.
            </p>
          </BlurIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {portfolio.map((project, i) => {
            const card = (
              <div className="group block bg-card border border-card-border rounded-2xl overflow-hidden transition-colors hover:border-white/20 h-full">
                <div className="relative aspect-[16/10] bg-[#1a1730]">
                  <Image
                    src={project.image}
                    alt={`${project.name} website by Grady Digital`}
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <div className="p-6 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      {project.name}
                    </h3>
                    <p className="text-white/50 text-sm mt-1">
                      {project.category}
                    </p>
                  </div>
                  {project.url && (
                    <span className="inline-flex items-center gap-1 text-accent-light text-sm group-hover:gap-2 transition-all shrink-0">
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
      <SectionWrapper className="bg-white/[0.02] border-y border-white/[0.08]">
        <div className="text-center mb-16">
          <BlurIn>
            <SectionLabel>How It Works</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
              From Roadmap Call to live in 10 days
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              No tech headaches on your end. Here&apos;s the whole process.
            </p>
          </BlurIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {howItWorks.map((step, i) => (
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

      {/* SECTION 7 — WHAT'S INCLUDED */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <BlurIn>
            <SectionLabel>What&apos;s Included</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
              Everything&apos;s included — one plan, $297/mo
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              No setup fee. Cancel anytime.
            </p>
          </BlurIn>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {included.map((item, i) => (
            <BlurIn key={item.title} delay={i * 0.08}>
              <div className="bg-card border border-card-border rounded-2xl p-6 h-full">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent-light">
                  <item.icon className="w-5 h-5" />
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

      {/* SECTION 8 — GET EXCITED / CHECK YOUR EMAIL */}
      <SectionWrapper className="bg-white/[0.02] border-t border-white/[0.08]">
        <div className="max-w-3xl mx-auto text-center">
          <BlurIn>
            <SectionLabel>You&apos;re All Set</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
              See you on the call
            </h2>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/70 text-base leading-relaxed mt-5">
              You&apos;ve got two quick things done: you&apos;ve met me, and
              (once you run the audit) we&apos;ll both have your real numbers in
              hand. That means our call won&apos;t be a generic chat — it&apos;ll
              be a plan built specifically for your business. I&apos;m looking
              forward to it.
            </p>
          </BlurIn>
          <BlurIn delay={0.3}>
            <div className="bg-card border border-card-border rounded-2xl p-6 mt-8 text-left">
              <p className="text-sm font-medium text-white mb-4">
                Quick recap before we talk:
              </p>
              <ul className="space-y-3">
                {[
                  "Watched the welcome video",
                  "Ran your free Google Business Profile audit (Step 2 — do this if you haven't!)",
                  "Added the call to your calendar",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent-light shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurIn>
          <BlurIn delay={0.4}>
            <div className="mt-8">
              <p className="text-white/70 text-sm">Talk soon,</p>
              <p className="text-white font-medium mt-1">
                Luke — Grady Digital
              </p>
              <a
                href="tel:+19787982870"
                className="text-accent-light text-sm hover:text-white transition-colors"
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
