"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Check, Monitor, Star, TrendingUp, Plus } from "lucide-react";
import type { ComponentType } from "react";
import BlurIn from "./BlurIn";
import {
  plans,
  inheritsFrom,
  guaranteeTerms,
  liveGuarantee,
  type PlanId,
} from "@/lib/plans";

interface PricingPlansProps {
  /** Where every "Book a Free Call" button points. */
  ctaHref?: string;
  /** Show the "low monthly rate is the point" footnote (used on /start). */
  showFootnote?: boolean;
}

type PlanStyle = {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  header: string;
  title: string;
  check: string;
};

// Visual treatment per rung — the /grow card design, now shared site-wide.
// Copy/prices/features come from lib/plans.ts.
const planStyles: Record<PlanId, PlanStyle> = {
  website: {
    icon: Monitor,
    header: "from-[#8b5cf6] to-[#6366f1]",
    title: "text-[#7c3aed]",
    check: "text-[#7c3aed]",
  },
  "website-reviews": {
    icon: Star,
    header: "from-[#ec4899] to-[#a855f7]",
    title: "text-[#db2777]",
    check: "text-[#db2777]",
  },
  "growth-system": {
    icon: TrendingUp,
    header: "from-[#2dd4bf] to-[#22b8cf]",
    title: "text-[#0d9488]",
    check: "text-[#0d9488]",
  },
};

// Short label for the mobile plan tabs.
const shortName = (name: string) =>
  name.replace(/^The /, "").replace(/ System$/, "");

// White wave divider that sits at the bottom of the colored header.
function Wave() {
  return (
    <div className="absolute -bottom-px left-0 right-0">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-8 sm:h-10"
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

// Scattered white sparkles/plus marks in the header.
function HeaderSparkles() {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none">
      <Plus className="absolute top-5 left-8 w-3 h-3 text-white/50" />
      <Plus className="absolute top-9 right-10 w-4 h-4 text-white/40" />
      <Plus className="absolute bottom-12 right-8 w-3 h-3 text-white/45" />
      <span className="absolute top-6 right-20 w-2 h-2 rounded-full border border-white/40" />
      <span className="absolute top-14 left-12 w-2.5 h-2.5 rounded-full border border-white/30" />
      <span className="absolute bottom-14 left-8 w-1.5 h-1.5 rounded-full bg-white/40" />
    </div>
  );
}

function PlanCard({
  plan,
  index,
  ctaHref,
}: {
  plan: (typeof plans)[number];
  index: number;
  ctaHref: string;
}) {
  const featured = plan.featured;
  const prev = inheritsFrom(index);
  const style = planStyles[plan.id];
  const Icon = style.icon;
  const features = prev
    ? [`Everything in ${prev}, plus:`, ...plan.adds]
    : plan.adds;
  return (
    <div
      className={`relative h-full flex flex-col rounded-[1.75rem] bg-white border border-black/[0.06] lg:border-transparent ${
        featured
          ? "lg:shadow-[0_60px_120px_-20px_rgba(12,11,30,0.45),0_30px_60px_-25px_rgba(219,39,119,0.55),0_12px_24px_-8px_rgba(12,11,30,0.3)]"
          : "lg:shadow-[0_20px_50px_-24px_rgba(12,11,30,0.35)]"
      }`}
    >
      {/* Colored header */}
      <div
        className={`relative h-24 md:h-32 rounded-t-[1.75rem] overflow-hidden bg-gradient-to-br ${style.header}`}
      >
        {/* sheen */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
        />
        <HeaderSparkles />
        {featured && (
          <span className="absolute top-2.5 md:top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/85 whitespace-nowrap">
            Most popular
          </span>
        )}
        <div className="absolute inset-0 flex items-center justify-center pb-4 md:pb-5">
          <Icon
            className="w-9 h-9 md:w-11 md:h-11 text-white"
            strokeWidth={1.25}
          />
        </div>
        <Wave />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 text-center px-5 pt-2 pb-5 md:px-7 md:pt-3 md:pb-6">
        <p className="text-[11px] font-medium uppercase tracking-wide text-[#0c0b1e]/45 mb-1">
          {plan.bestFor}
        </p>
        <h3
          className={`font-bold uppercase tracking-[0.18em] ${style.title} ${
            featured ? "text-lg md:text-xl" : "text-base"
          }`}
        >
          {plan.name}
        </h3>

        <div className="mt-2 md:mt-2.5 flex items-baseline justify-center gap-1">
          <span
            className={`font-semibold text-[#0c0b1e] ${
              featured ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"
            }`}
          >
            ${plan.price}
          </span>
          <span className="text-[#0c0b1e]/45 text-base">/month</span>
        </div>
        <div className="mt-1 text-[11px] font-medium text-[#0c0b1e]/45">
          {guaranteeTerms}
        </div>

        <p className="mt-2 md:mt-2.5 text-xs md:text-sm text-[#0c0b1e]/55 leading-snug">
          {plan.tagline}
        </p>

        <ul className="mt-3 md:mt-4 mx-auto inline-block text-left space-y-1.5 md:space-y-2">
          {features.map((f, fi) => (
            <li key={f} className="flex items-start gap-2.5">
              <Check className={`w-4 h-4 mt-0.5 shrink-0 ${style.check}`} />
              <span
                className={`text-[13px] md:text-sm leading-snug ${
                  fi === 0 && prev
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
        <div className="mt-auto pt-4 md:pt-5 flex justify-center">
          <Link
            href={ctaHref}
            className={`inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-200 ${
              featured
                ? "px-9 py-3 md:py-3.5 text-sm text-white bg-gradient-to-r from-[#ec4899] to-[#a855f7] shadow-[0_16px_36px_-10px_rgba(219,39,119,0.6)] hover:shadow-[0_20px_44px_-10px_rgba(219,39,119,0.7)] hover:-translate-y-0.5"
                : "px-8 py-2.5 md:py-3 text-sm text-[#0c0b1e] bg-white border border-black/[0.06] shadow-[0_12px_30px_-10px_rgba(12,11,30,0.35)] hover:shadow-[0_16px_38px_-10px_rgba(12,11,30,0.45)] hover:-translate-y-0.5"
            }`}
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function PricingPlans({
  ctaHref = "/start#book",
  showFootnote = false,
}: PricingPlansProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const featuredIndex = Math.max(
    plans.findIndex((p) => p.featured),
    0,
  );
  const [active, setActive] = useState(featuredIndex);

  const offsetFor = (card: HTMLDivElement, track: HTMLDivElement) =>
    card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;

  const centerCard = (i: number) => {
    const track = trackRef.current;
    const card = cardRefs.current[i];
    if (!track || !card) return;
    track.scrollTo({ left: offsetFor(card, track), behavior: "smooth" });
  };

  // On mobile, start positioned on the most-popular (middle) plan. Runs after
  // layout via rAF, and only when the carousel is actually visible (mobile).
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const track = trackRef.current;
      const card = cardRefs.current[featuredIndex];
      if (!track || !card || track.clientWidth === 0) return;
      track.scrollLeft = offsetFor(card, track);
    });
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const c = card.offsetLeft + card.clientWidth / 2;
      const d = Math.abs(c - center);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    setActive(best);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Mobile plan tabs */}
      <div className="lg:hidden flex items-center justify-center gap-2 mb-5">
        {plans.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => centerCard(i)}
            aria-pressed={active === i}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
              active === i
                ? "bg-[#0c0b1e] text-white"
                : "bg-white text-[#0c0b1e]/60 border border-black/10"
            }`}
          >
            {shortName(p.name)}
          </button>
        ))}
      </div>

      {/* Mobile: swipeable side-by-side carousel with peeking neighbors */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pt-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {plans.map((plan, i) => (
          <div
            key={plan.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="snap-center shrink-0 w-[78vw] max-w-[330px]"
          >
            <PlanCard plan={plan} index={i} ctaHref={ctaHref} />
          </div>
        ))}
      </div>

      {/* Desktop: 3-column grid, most-popular plan elevated like on /grow.
          The top padding gives the raised card room to float. */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1.3fr_1fr] gap-7 lg:gap-8 items-stretch lg:pt-12">
        {plans.map((plan, i) => (
          // The translate lives on this wrapper (not on BlurIn) because
          // framer-motion writes an inline transform that would override it.
          <div
            key={plan.id}
            className={plan.featured ? "relative z-10 lg:-translate-y-12" : ""}
          >
            <BlurIn delay={0.1 + i * 0.1} className="h-full">
              <PlanCard plan={plan} index={i} ctaHref={ctaHref} />
            </BlurIn>
          </div>
        ))}
      </div>

      <BlurIn delay={0.4}>
        <div className="mt-8 rounded-xl bg-accent/10 border border-accent/20 p-4 max-w-3xl mx-auto">
          <p className="text-[#0c0b1e]/80 text-sm leading-relaxed text-center">
            <span className="text-accent font-medium">{liveGuarantee}</span> No
            big setup fee on any plan. Your first month gets your site built and
            live. If I don&apos;t have you live within 10 business days, your
            next month is on me.
          </p>
        </div>
      </BlurIn>

      {showFootnote && (
        <BlurIn delay={0.5}>
          <p className="text-center text-[#0c0b1e]/50 text-xs leading-relaxed mt-6 max-w-2xl mx-auto">
            The low monthly rate is the point. Agencies that charge thousands
            upfront get paid no matter what happens next. I only keep getting
            paid if you stay, which means I&apos;m earning it every month
            instead of disappearing after one big check. Your results and my
            paycheck are the same thing.
          </p>
        </BlurIn>
      )}
    </div>
  );
}
