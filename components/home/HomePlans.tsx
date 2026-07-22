"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, Star, Store, TrendingUp } from "lucide-react";
import type { ComponentType } from "react";
import Reveal from "../grow/Reveal";
import AuroraBackdrop from "../grow/AuroraBackdrop";
import { guaranteeTerms } from "@/lib/plans";

type HomePlan = {
  id: string;
  name: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  subtitle: string;
  price: number;
  /** Anchor price shown struck through before `price` (Foundation only). */
  anchor?: number;
  bullets: string[];
  featured?: boolean;
};

// Homepage pricing. Three cards, left → right:
//   Reputation (reviews only) · Foundation (website + reviews, featured) · Growth
// The website-only plan is pulled out to a footnote below the cards. Isolated
// from the shared PricingPlans so /grow and /start keep their own table.
const cards: HomePlan[] = [
  {
    id: "reputation",
    name: "The Reputation System",
    icon: Star,
    subtitle: "Fill your Google profile with 5-star reviews",
    price: 97,
    bullets: [
      "A tap-to-review NFC card that brings in more 5-star reviews",
      "Every review answered in your voice",
      "Old, unfair reviews challenged for you",
    ],
  },
  {
    id: "foundation",
    name: "The Foundation Package",
    icon: Store,
    subtitle: "Reputation System + Custom Website · save $47/mo",
    price: 147,
    anchor: 194,
    featured: true,
    bullets: [
      "Everything in The Reputation System, plus:",
      "A fast custom website that turns visitors into calls",
      "Every call, text, and lead in one inbox",
    ],
  },
  {
    id: "growth",
    name: "The Growth System",
    icon: TrendingUp,
    subtitle: "Everything, plus marketing",
    price: 297,
    bullets: [
      "Everything in The Foundation Package, plus:",
      "Google profile set up, posted weekly, cross-posted to social",
      "Ongoing local SEO with a simple monthly report",
    ],
  },
];

// Short label for the mobile plan tabs.
const shortName = (name: string) =>
  name.replace(/^The /, "").replace(/ (System|Package)$/, "");

function PlanCard({ plan }: { plan: HomePlan }) {
  const { icon: Icon, featured } = plan;
  return (
    <div
      className={`relative h-full flex flex-col rounded-[1.75rem] bg-white p-6 lg:p-7 ${
        featured
          ? "border-2 border-accent shadow-[0_30px_70px_-30px_rgba(108,106,246,0.55)]"
          : "border border-black/[0.08] shadow-sm"
      }`}
    >
      {featured && (
        <span className="absolute top-5 right-5 rounded-full bg-accent/10 px-2.5 py-1 text-[12px] font-medium text-accent">
          Most popular
        </span>
      )}

      {/* Icon */}
      <span
        className={`grid place-items-center w-11 h-11 rounded-xl border ${
          featured
            ? "border-accent/30 bg-accent/10 text-accent"
            : "border-black/10 bg-black/[0.02] text-[#0c0b1e]/60"
        }`}
      >
        <Icon className="w-5 h-5" strokeWidth={1.75} />
      </span>

      {/* Name + subtitle */}
      <h3 className="mt-5 text-[15px] sm:text-base font-medium text-[#0c0b1e]">
        {plan.name}
      </h3>
      <p className="mt-1 text-sm text-[#0c0b1e]/50 leading-snug">
        {plan.subtitle}
      </p>

      {/* Price */}
      <div className="mt-4 flex items-baseline gap-2">
        {plan.anchor && (
          <span className="text-sm text-[#0c0b1e]/40 line-through">
            ${plan.anchor}
          </span>
        )}
        <span className="text-2xl sm:text-[28px] font-semibold text-[#0c0b1e] leading-none">
          ${plan.price}
        </span>
        <span className="text-sm text-[#0c0b1e]/45">/mo</span>
      </div>

      {/* Bullets */}
      <ul className="mt-5 space-y-2.5">
        {plan.bullets.map((b, i) => {
          const isInherit = i === 0 && b.startsWith("Everything in");
          return (
            <li key={b} className="flex items-start gap-2.5">
              <Check
                className={`w-4 h-4 mt-0.5 shrink-0 ${
                  featured ? "text-accent" : "text-[#0c0b1e]/40"
                }`}
              />
              <span
                className={`text-sm leading-snug ${
                  isInherit
                    ? "text-[#0c0b1e]/80 font-medium"
                    : "text-[#0c0b1e]/60"
                }`}
              >
                {b}
              </span>
            </li>
          );
        })}
      </ul>

      {/* Button pinned to bottom */}
      <Link href="/start" className="mt-auto pt-6 block">
        <span
          className={`flex items-center justify-center w-full rounded-full px-5 py-3 font-medium text-sm transition duration-200 ease-out active:scale-[0.97] ${
            featured
              ? "text-white bg-accent hover:bg-accent/90 shadow-lg shadow-accent/25"
              : "text-[#0c0b1e] border border-black/15 bg-white hover:border-black/30 hover:bg-black/[0.02]"
          }`}
        >
          Book a Free Call
        </span>
      </Link>
    </div>
  );
}

export default function HomePlans() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const featuredIndex = Math.max(
    cards.findIndex((c) => c.featured),
    0,
  );
  const [active, setActive] = useState(featuredIndex);
  const reduceMotion = useReducedMotion();

  const offsetFor = (card: HTMLDivElement, track: HTMLDivElement) =>
    card.offsetLeft - (track.clientWidth - card.clientWidth) / 2;

  const centerCard = (i: number) => {
    const track = trackRef.current;
    const card = cardRefs.current[i];
    if (!track || !card) return;
    track.scrollTo({ left: offsetFor(card, track), behavior: "smooth" });
  };

  // On mobile, open positioned on the featured (Foundation) card, with its
  // neighbors peeking in from either side. We center it both at mount and the
  // first time the carousel scrolls into view — the latter guarantees it lands
  // on Foundation even if the mount-time layout wasn't final yet.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const centerOnFeatured = () => {
      const card = cardRefs.current[featuredIndex];
      if (!track || !card || track.clientWidth === 0) return;
      track.scrollLeft = offsetFor(card, track);
    };

    // Center once layout has settled.
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(centerOnFeatured),
    );

    // Re-center the first time the pricing carousel enters the viewport.
    let centered = false;
    const io =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting && !centered) {
                centered = true;
                centerOnFeatured();
                io?.disconnect();
              }
            },
            { threshold: 0.25 },
          )
        : null;
    io?.observe(track);

    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
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
    <section
      id="plans"
      className="relative overflow-hidden grain-overlay py-14 lg:py-32 border-t border-black/10 bg-gradient-to-b from-[#f3effb] to-[#f4f5fb]"
    >
      <AuroraBackdrop tone="violet" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-14">
          <Reveal
            as="span"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#8b3fd6]"
          >
            <span className="w-6 h-px bg-violet" />
            The plans
            <span className="w-6 h-px bg-violet" />
          </Reveal>
          <Reveal
            as="h2"
            delay={80}
            className="mt-3 lg:mt-4 text-3xl sm:text-5xl font-medium tracking-tight leading-[1.05] text-[#0c0b1e]"
          >
            One system.{" "}
            <span className="grow-gradient-text font-display italic">
              Sized to fit.
            </span>
          </Reveal>
          <Reveal
            as="p"
            delay={160}
            className="mt-4 lg:mt-5 text-[#0c0b1e]/60 text-base sm:text-lg leading-relaxed"
          >
            The Foundation Package is the full loop &mdash; a website that wins
            the call and a review engine that wins the click. Want just the
            reviews, or the whole managed Google presence? Size down or up.
          </Reveal>
          <Reveal
            as="p"
            delay={200}
            className="mt-5 text-sm font-medium text-[#0c0b1e]/50"
          >
            {guaranteeTerms}
          </Reveal>
        </div>

        {/* Mobile plan tabs — one segmented pill; the selection springs between
            options on tap or swipe (shared-layout "magic move"). */}
        <div className="lg:hidden mb-5">
          <div className="mx-auto flex max-w-sm items-center rounded-full border border-black/10 bg-black/[0.05] p-1">
            {cards.map((p, i) => {
              const isActive = active === i;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => centerCard(i)}
                  aria-pressed={isActive}
                  className="relative flex-1 rounded-full px-2 py-1.5 text-xs font-medium"
                >
                  {isActive && (
                    <motion.span
                      layoutId="planTabActive"
                      aria-hidden
                      className="absolute inset-0 rounded-full bg-[#0c0b1e] shadow-sm"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 400, damping: 34, mass: 0.9 }
                      }
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive ? "text-white" : "text-[#0c0b1e]/55"
                    }`}
                  >
                    {shortName(p.name)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile: swipeable carousel with peeking neighbors */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pt-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((plan, i) => (
            <div
              key={plan.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="snap-center shrink-0 w-[80vw] max-w-[330px]"
            >
              <PlanCard plan={plan} />
            </div>
          ))}
        </div>

        {/* Desktop: 3-up grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6 items-stretch">
          {cards.map((plan, i) => (
            <Reveal key={plan.id} delay={100 + i * 90} className="h-full">
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        {/* Website-only — its own dark rectangle below the table */}
        <Reveal delay={180}>
          <div className="mt-8 rounded-2xl border border-white/10 bg-[#0c0b1e] shadow-xl shadow-[#0c0b1e]/25 p-6 md:p-7 flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
            <div className="flex-1">
              <div className="flex items-baseline gap-2.5 flex-wrap">
                <h3 className="text-base md:text-lg font-medium text-white">
                  Just need a website?
                </h3>
                <span className="flex items-baseline gap-1">
                  <span className="text-xl font-semibold text-white">$97</span>
                  <span className="text-sm text-white/50">/mo</span>
                </span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mt-1.5">
                A fast, custom site with every lead in one inbox &mdash; look
                great online and never miss a call. Add the review engine
                whenever you&apos;re ready.
              </p>
            </div>
            <Link
              href="/start"
              className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-sm text-[#0c0b1e] bg-white hover:bg-white/90 transition duration-200 ease-out active:scale-[0.97] shadow-lg"
            >
              Book a Free Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
