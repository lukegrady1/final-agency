"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

// Start-page pricing table. Desktop: Foundation dominant in the center, the
// two options smaller either side. Mobile: a swipeable carousel with a
// segmented pill, centered on Foundation — the same feel as the homepage.

const foundationIncludes = [
  "A fast custom website built to turn visitors into calls",
  "A review engine that fills your Google profile with 5-star reviews",
  "Every review answered in your voice, unfair ones challenged",
  "All your calls, texts, and leads in one simple inbox",
  "Hosting, updates, security, and speed — all handled",
  "Direct access to Luke, the engineer who builds it",
];

type Plan = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  anchor?: number;
  save?: number;
  /** Show the "$299 website setup fee waived" line (bundles that include the site). */
  setupWaived?: boolean;
  bullets: string[];
  featured?: boolean;
};

const cards: Plan[] = [
  {
    id: "reputation",
    name: "The Reputation System",
    subtitle: "Just the review engine",
    price: 97,
    bullets: [
      "A tap-to-review NFC card for more 5-star reviews",
      "Every review answered in your voice",
      "Old, unfair reviews challenged for you",
    ],
  },
  {
    id: "foundation",
    name: "The Foundation Package",
    subtitle: "Website + review engine, working together",
    price: 197,
    anchor: 244,
    save: 47,
    setupWaived: true,
    bullets: foundationIncludes,
    featured: true,
  },
  {
    id: "growth",
    name: "The Growth System",
    subtitle: "Everything, plus marketing",
    price: 297,
    setupWaived: true,
    bullets: [
      "Everything in Foundation, plus:",
      "Weekly Google posts, cross-posted to social",
      "Ongoing local SEO with a monthly report",
    ],
  },
];

// The waived one-time website setup fee — shows the math ($299 → waived).
function SetupWaived() {
  return (
    <p className="mt-2.5 flex items-center gap-1.5 text-xs text-[#0c0b1e]/55">
      <span className="line-through text-[#0c0b1e]/35">$299</span>
      website setup fee
      <span className="font-semibold text-accent">waived</span>
    </p>
  );
}

const shortName = (name: string) =>
  name.replace(/^The /, "").replace(/ (System|Package)$/, "");

function FeaturedCard() {
  const f = cards[1];
  return (
    <div className="relative h-full rounded-[1.75rem] bg-white border-2 border-accent p-6 md:p-8 shadow-[0_50px_100px_-40px_rgba(108,106,246,0.65)]">
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-lg shadow-accent/30 whitespace-nowrap">
        Most popular
      </span>
      <h3 className="text-lg md:text-xl font-medium text-[#0c0b1e] mt-1">
        {f.name}
      </h3>
      <p className="text-sm text-[#0c0b1e]/50 mt-1">{f.subtitle}</p>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-base text-[#0c0b1e]/40 line-through">
          ${f.anchor}
        </span>
        <span className="text-4xl md:text-5xl font-semibold text-[#0c0b1e] leading-none">
          ${f.price}
        </span>
        <span className="text-sm text-[#0c0b1e]/45">/month</span>
        <span className="ml-auto rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent">
          save ${f.save}/mo
        </span>
      </div>
      {f.setupWaived && <SetupWaived />}
      <ul className="mt-6 space-y-2.5">
        {f.bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <Check className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
            <span className="text-sm text-[#0c0b1e]/75 leading-snug">{b}</span>
          </li>
        ))}
      </ul>
      <Link
        href="#book"
        className="mt-7 flex items-center justify-center gap-2 w-full rounded-full px-5 py-3.5 font-medium text-sm text-white bg-accent hover:bg-accent/90 transition duration-200 ease-out active:scale-[0.97] shadow-lg shadow-accent/25"
      >
        Book a Free Call
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function SideCard({ plan }: { plan: Plan }) {
  return (
    <div className="flex flex-col h-full bg-white border border-black/[0.08] rounded-2xl p-7 md:p-8 shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0c0b1e]/[0.06]">
      <h3 className="text-lg font-medium text-[#0c0b1e]">{plan.name}</h3>
      <p className="text-sm text-[#0c0b1e]/50 mt-1.5">{plan.subtitle}</p>
      <div className="mt-5 flex items-baseline gap-1.5">
        <span className="text-3xl font-semibold text-[#0c0b1e] leading-none">
          ${plan.price}
        </span>
        <span className="text-sm text-[#0c0b1e]/45">/mo</span>
      </div>
      {plan.setupWaived && <SetupWaived />}
      <ul className="mt-6 space-y-3.5 flex-1">
        {plan.bullets.map((b, i) => {
          const inherit = i === 0 && b.startsWith("Everything");
          return (
            <li key={b} className="flex items-start gap-2.5">
              <Check className="w-4 h-4 mt-0.5 shrink-0 text-[#0c0b1e]/40" />
              <span
                className={`text-sm leading-relaxed ${
                  inherit
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
      <Link
        href="#book"
        className="mt-7 flex items-center justify-center w-full rounded-full px-4 py-3.5 font-medium text-sm text-[#0c0b1e] border border-black/15 bg-white hover:border-black/30 hover:bg-black/[0.02] transition duration-200 ease-out active:scale-[0.97]"
      >
        Book a Free Call
      </Link>
    </div>
  );
}

function CardFor({ plan }: { plan: Plan }) {
  return plan.featured ? <FeaturedCard /> : <SideCard plan={plan} />;
}

export default function StartPricingTable() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const featuredIndex = 1;
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

  // Open centered on Foundation, both at mount and the first time the carousel
  // scrolls into view (in case the mount-time layout wasn't final yet).
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const centerOnFeatured = () => {
      const card = cardRefs.current[featuredIndex];
      if (!track || !card || track.clientWidth === 0) return;
      track.scrollLeft = offsetFor(card, track);
    };
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(centerOnFeatured),
    );
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
    <div className="relative">
      {/* Mobile segmented pill */}
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
                    layoutId="startTabActive"
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-[#0c0b1e] shadow-sm"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : {
                            type: "spring",
                            stiffness: 400,
                            damping: 34,
                            mass: 0.9,
                          }
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
        className="lg:hidden flex items-center gap-4 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pt-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {cards.map((plan, i) => (
          <div
            key={plan.id}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="snap-center shrink-0 w-[80vw] max-w-[340px]"
          >
            <CardFor plan={plan} />
          </div>
        ))}
      </div>

      {/* Desktop: Foundation dominant in the center */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1.3fr_1fr] lg:items-center gap-5 max-w-6xl mx-auto">
        <SideCard plan={cards[0]} />
        <div className="lg:-translate-y-3">
          <FeaturedCard />
        </div>
        <SideCard plan={cards[2]} />
      </div>
    </div>
  );
}
