"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import BlurIn from "./BlurIn";
import {
  plans,
  inheritsFrom,
  guaranteeTerms,
  liveGuarantee,
} from "@/lib/plans";

interface PricingPlansProps {
  /** Where every "Book a Free Call" button points. */
  ctaHref?: string;
  /** Show the "low monthly rate is the point" footnote (used on /start). */
  showFootnote?: boolean;
}

// Per-tier accent so each plan reads as a rung on the same ladder.
const tone = {
  website: { check: "text-[#0e8090]" },
  "website-reviews": { check: "text-accent" },
  "growth-system": { check: "text-[#8b3fd6]" },
} as const;

// Short label for the mobile plan tabs.
const shortName = (name: string) =>
  name.replace(/^The /, "").replace(/ System$/, "");

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
  const check = tone[plan.id].check;
  return (
    <div
      className={`relative h-full flex flex-col rounded-2xl p-7 lg:p-8 ${
        featured
          ? "bg-gradient-to-b from-accent/[0.08] to-white border border-accent/40 ring-1 ring-accent/20 lg:scale-[1.03] shadow-2xl shadow-accent/15"
          : "bg-white border border-black/[0.08] shadow-sm"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan via-accent to-violet text-white text-xs font-medium px-3 py-1 whitespace-nowrap shadow-lg shadow-accent/25">
          Most popular
        </span>
      )}

      <div>
        <p
          className={`text-[11px] font-semibold uppercase tracking-wide ${
            featured ? "text-accent" : "text-[#0c0b1e]/45"
          }`}
        >
          {plan.bestFor}
        </p>
        <h3 className="text-xl font-medium text-[#0c0b1e] mt-1.5">
          {plan.name}
        </h3>
        <p className="text-[#0c0b1e]/60 text-sm mt-2 leading-relaxed">
          {plan.tagline}
        </p>
      </div>

      <div className="mt-8">
        <div className="flex items-baseline gap-1">
          <span className="text-5xl font-medium text-[#0c0b1e]">
            ${plan.price}
          </span>
          <span className="text-[#0c0b1e]/50 text-base">/month</span>
        </div>
        <div
          className={`text-xs mt-2 font-medium ${
            featured ? "text-accent" : "text-[#0c0b1e]/50"
          }`}
        >
          {guaranteeTerms}
        </div>
      </div>

      <ul className="mt-8 space-y-3 flex-1">
        {prev && (
          <li className="flex items-start gap-3">
            <Check className={`w-4 h-4 mt-0.5 shrink-0 ${check}`} />
            <span className="text-[#0c0b1e]/80 text-sm leading-relaxed font-medium">
              Everything in {prev}, plus:
            </span>
          </li>
        )}
        {plan.adds.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <Check className={`w-4 h-4 mt-0.5 shrink-0 ${check}`} />
            <span className="text-[#0c0b1e]/80 text-sm leading-relaxed">
              {f}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={`group mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-medium text-sm transition-all ${
          featured
            ? "text-white bg-gradient-to-r from-cyan via-accent to-violet hover:opacity-90 shadow-lg shadow-accent/25"
            : "text-[#0c0b1e] border border-black/10 bg-white hover:bg-black/[0.03] hover:border-black/20 shadow-sm"
        }`}
      >
        Book a Free Call
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </Link>
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

      {/* Desktop: 3-column grid */}
      <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-stretch">
        {plans.map((plan, i) => (
          <BlurIn key={plan.id} delay={0.1 + i * 0.1}>
            <PlanCard plan={plan} index={i} ctaHref={ctaHref} />
          </BlurIn>
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
