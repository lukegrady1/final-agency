import Link from "next/link";
import { Check, Monitor, Star, TrendingUp, Plus } from "lucide-react";
import type { ComponentType } from "react";
import Reveal from "./Reveal";
import AuroraBackdrop from "./AuroraBackdrop";

type Plan = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  header: string;
  title: string;
  check: string;
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Website",
    price: "97",
    blurb:
      "A fast, professional website built and managed for you, with one inbox for every lead.",
    features: [
      "A fast custom website that turns visitors into calls",
      "All-in-one inbox for every call, text, and lead",
      "Hosting, updates, security, and speed, all handled",
    ],
    icon: Monitor,
    header: "from-[#8b5cf6] to-[#6366f1]",
    title: "text-[#7c3aed]",
    check: "text-[#7c3aed]",
  },
  {
    name: "Website + Reviews",
    price: "147",
    blurb:
      "Your website plus a review engine that fills your Google profile with 5-star reviews.",
    features: [
      "Everything in Website, plus:",
      "More 5-star reviews, with replies in your voice",
      "Old, unfair reviews challenged on your behalf",
      "A steady stream of fresh reviews that wins clicks",
    ],
    icon: Star,
    header: "from-[#ec4899] to-[#a855f7]",
    title: "text-[#db2777]",
    check: "text-[#db2777]",
    featured: true,
  },
  {
    name: "The Growth System",
    price: "297",
    blurb:
      "Everything you need to get found on Google, win trust, and turn clicks into calls.",
    features: [
      "Everything in Website + Reviews, plus:",
      "Google profile posted weekly + cross-posted to social",
      "Ongoing local SEO so you keep showing up in search",
      "A simple monthly report tied to real results",
    ],
    icon: TrendingUp,
    header: "from-[#2dd4bf] to-[#22b8cf]",
    title: "text-[#0d9488]",
    check: "text-[#0d9488]",
  },
];

// White wave divider that sits at the bottom of the colored header.
function Wave() {
  return (
    <div className="absolute -bottom-px left-0 right-0">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-12"
        aria-hidden
      >
        <path
          d="M0,52 C180,104 380,12 720,44 C1040,74 1260,8 1440,56 L1440,120 L0,120 Z"
          fill="rgba(255,255,255,0.35)"
        />
        <path
          d="M0,72 C200,116 420,36 720,60 C1020,84 1250,30 1440,72 L1440,120 L0,120 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}

// Scattered white sparkles/plus marks in the header, like the reference.
function Sparkles() {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      <Plus className="absolute top-7 left-9 w-3 h-3 text-white/50" />
      <Plus className="absolute top-12 right-12 w-4 h-4 text-white/40" />
      <Plus className="absolute bottom-20 right-9 w-3 h-3 text-white/45" />
      <span className="absolute top-9 right-24 w-2 h-2 rounded-full border border-white/40" />
      <span className="absolute top-20 left-14 w-2.5 h-2.5 rounded-full border border-white/30" />
      <span className="absolute bottom-24 left-10 w-1.5 h-1.5 rounded-full bg-white/40" />
    </div>
  );
}

export default function GrowPlans() {
  return (
    <section
      id="plans"
      className="relative overflow-hidden grain-overlay py-24 lg:py-32 border-t border-black/[0.06] bg-gradient-to-b from-[#f3effb] to-[#f4f5fb]"
    >
      <AuroraBackdrop tone="violet" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#b45309]">
            <span className="w-6 h-px bg-amber" />
            The plans
            <span className="w-6 h-px bg-amber" />
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-medium tracking-tight leading-[1.05] text-[#0c0b1e]">
            Choose how aggressively{" "}
            <span className="grow-gradient-text font-display italic">
              you want to grow.
            </span>
          </h2>
          <p className="mt-5 text-[#0c0b1e]/60 text-lg leading-relaxed">
            Three plans, month-to-month. No setup fee, no contract, cancel
            anytime. Live within 10 business days — or your next month is free.
          </p>
        </div>

        <div className="mt-24 grid lg:grid-cols-[1fr_1.3fr_1fr] gap-7 lg:gap-8 items-stretch">
          {plans.map((p, i) => {
            const Icon = p.icon;
            return (
              <Reveal
                key={p.name}
                delay={i * 100}
                className={`relative flex flex-col rounded-[1.75rem] bg-white ${
                  p.featured
                    ? "z-10 lg:-translate-y-12 shadow-[0_60px_120px_-20px_rgba(12,11,30,0.45),0_30px_60px_-25px_rgba(219,39,119,0.55),0_12px_24px_-8px_rgba(12,11,30,0.3)]"
                    : "shadow-[0_20px_50px_-24px_rgba(12,11,30,0.35)]"
                }`}
              >
                {/* Colored header */}
                <div
                  className={`relative h-48 rounded-t-[1.75rem] overflow-hidden bg-gradient-to-br ${p.header}`}
                >
                  {/* sheen */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                  />
                  <Sparkles />
                  {p.featured && (
                    <span className="absolute top-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85">
                      Most popular
                    </span>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center pb-8">
                    <Icon className="w-16 h-16 text-white" strokeWidth={1.25} />
                  </div>
                  <Wave />
                </div>

                {/* Body */}
                <div
                  className={`flex flex-col flex-1 text-center ${
                    p.featured ? "px-7 lg:px-9 pt-4 pb-9" : "px-7 pt-4 pb-9"
                  }`}
                >
                  <h3
                    className={`font-bold uppercase tracking-[0.18em] ${p.title} ${
                      p.featured ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {p.name}
                  </h3>

                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span
                      className={`font-semibold text-[#0c0b1e] ${
                        p.featured ? "text-6xl" : "text-4xl"
                      }`}
                    >
                      ${p.price}
                    </span>
                    <span className="text-[#0c0b1e]/45 text-base">/month</span>
                  </div>
                  <div className="mt-1 text-[11px] font-medium text-[#0c0b1e]/45">
                    No setup fee · Cancel anytime
                  </div>

                  <p className="mt-4 text-sm text-[#0c0b1e]/55 leading-relaxed">
                    {p.blurb}
                  </p>

                  <ul className="mt-6 mx-auto inline-block text-left space-y-2.5">
                    {p.features.map((f, fi) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${p.check}`}
                        />
                        <span
                          className={`text-sm leading-relaxed ${
                            fi === 0
                              ? "text-[#0c0b1e]/80 font-medium"
                              : "text-[#0c0b1e]/60"
                          }`}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Button — sits at the bottom of the card on every plan */}
                  <div className="mt-auto pt-8 flex justify-center">
                    <Link
                      href="/start#book"
                      className={`inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-200 ${
                        p.featured
                          ? "px-10 py-4 text-sm text-white bg-gradient-to-r from-[#ec4899] to-[#a855f7] shadow-[0_16px_36px_-10px_rgba(219,39,119,0.6)] hover:shadow-[0_20px_44px_-10px_rgba(219,39,119,0.7)] hover:-translate-y-0.5"
                          : "px-9 py-3.5 text-sm text-[#0c0b1e] bg-white border border-black/[0.06] shadow-[0_12px_30px_-10px_rgba(12,11,30,0.35)] hover:shadow-[0_16px_38px_-10px_rgba(12,11,30,0.45)] hover:-translate-y-0.5"
                      }`}
                    >
                      Book a Free Call
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-20 text-center text-[#0c0b1e]/40 text-xs max-w-2xl mx-auto leading-relaxed">
          The low monthly rate is the point. I only keep getting paid if you
          stay — which means I&apos;m earning it every month, not disappearing
          after one big check.
        </p>
      </div>
    </section>
  );
}
