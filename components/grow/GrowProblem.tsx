"use client";

import { useEffect, useRef, useState } from "react";
import { Star, TrendingUp, ArrowDown } from "lucide-react";
import AuroraBackdrop from "./AuroraBackdrop";

const stories = [
  {
    n: "01",
    tag: "Trust",
    color: "text-accent",
    dot: "bg-accent",
    glow: "shadow-accent/15",
    title: "Reviews decide who feels safe to call.",
    body: "Before anyone visits your site, they scan your star rating, your most recent reviews, and how you reply. That quick read decides whether you get the call or the next business does.",
  },
  {
    n: "02",
    tag: "Visibility",
    color: "text-[#0e8090]",
    dot: "bg-cyan",
    glow: "shadow-cyan/15",
    title: "If you're not in the top three, you're barely in the running.",
    body: "Most people pick from the businesses Google shows first. Climbing into the local map pack is the difference between a steady flow of calls and getting skipped entirely.",
  },
  {
    n: "03",
    tag: "Speed",
    color: "text-[#8b3fd6]",
    dot: "bg-violet",
    glow: "shadow-violet/15",
    title: "The business that answers first usually wins the job.",
    body: "A missed call is a customer dialing the next name on the list. Every call, text, and form lands in one inbox so nothing slips through while you're on a job.",
  },
  {
    n: "04",
    tag: "Consistency",
    color: "text-[#b45309]",
    dot: "bg-amber",
    glow: "shadow-amber/15",
    title: "Showing up every week is the whole game.",
    body: "Fresh reviews, replies, and posts tell Google your business is active and worth ranking. Done once, it fades. Done every week, it compounds — and that's the part I handle for you.",
  },
];

const ranks = [
  { pos: 1, name: "Competitor with momentum", rating: "4.9", reviews: 214, you: false },
  { pos: 2, name: "Another local business", rating: "4.7", reviews: 138, you: false },
  { pos: 3, name: "Another local business", rating: "4.6", reviews: 96, you: false },
  { pos: 7, name: "Your business", rating: "4.2", reviews: 47, you: true },
];

// Scroll distance (in vh) the page travels per point while the section is pinned.
const STEP_VH = 60;

export default function GrowProblem() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [step, setStep] = useState(0);
  // Default OFF so the first paint (incl. SSR/mobile) is the safe stacked
  // layout. The effect upgrades to pinned only on large, non-reduced-motion
  // viewports — avoiding a layout-shift flash on mobile.
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const reduceMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const wideMq = window.matchMedia("(min-width: 1024px)");
    const N = stories.length;
    let raf = 0;
    let teardown: (() => void) | null = null;

    const update = () => {
      raf = 0;
      const sec = sectionRef.current;
      if (!sec) return;
      const rect = sec.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh; // pinned scroll distance
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const progress = total > 0 ? scrolled / total : 0; // 0..1
      const cont = progress * (N - 1); // 0 .. N-1
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const d = i - cont;
        const op = Math.max(0, 1 - Math.abs(d) * 1.6);
        const scale = 1 - Math.min(Math.abs(d) * 0.05, 0.1);
        el.style.opacity = op.toFixed(3);
        el.style.transform = `translateY(calc(-50% + ${(d * 42).toFixed(1)}px)) scale(${scale.toFixed(3)})`;
        el.style.pointerEvents = Math.abs(d) < 0.5 ? "auto" : "none";
      });
      const s = Math.round(cont);
      setStep((prev) => (prev === s ? prev : s));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    // Re-evaluate whenever the breakpoint / motion preference changes, so the
    // section reacts to resizes and orientation changes — not just first mount.
    const apply = () => {
      teardown?.();
      teardown = null;
      const enable = !reduceMq.matches && wideMq.matches;
      setPinned(enable);
      if (enable) {
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll, { passive: true });
        teardown = () => {
          window.removeEventListener("scroll", onScroll);
          window.removeEventListener("resize", onScroll);
        };
        update();
      } else {
        // Clear any inline styles the pinned mode left behind.
        cardRefs.current.forEach((el) => {
          if (el) {
            el.style.opacity = "1";
            el.style.transform = "none";
            el.style.pointerEvents = "";
          }
        });
      }
    };

    apply();
    wideMq.addEventListener("change", apply);
    reduceMq.addEventListener("change", apply);
    return () => {
      wideMq.removeEventListener("change", apply);
      reduceMq.removeEventListener("change", apply);
      teardown?.();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={
        pinned
          ? { height: `calc(100vh + ${(stories.length - 1) * STEP_VH}vh)` }
          : undefined
      }
    >
      <div
        className={`relative grain-overlay ${
          pinned
            ? "sticky top-0 h-screen overflow-hidden flex items-center"
            : "py-24"
        }`}
      >
        <AuroraBackdrop tone="cyan" />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#0e8090]">
              <span className="w-6 h-px bg-cyan" />
              The problem
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-medium tracking-tight leading-[1.05] text-[#0c0b1e]">
              Your next customer is{" "}
              <span className="grow-gradient-text font-display italic">
                already searching.
              </span>
            </h2>
            <p className="mt-5 text-[#0c0b1e]/60 text-lg leading-relaxed">
              The only question is whether Google sends them to you — or to the
              competitor with more reviews, a stronger profile, and a head
              start.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Map comparison */}
            <div className="relative rounded-3xl border border-black/[0.07] bg-white shadow-2xl shadow-[#0c0b1e]/10 p-6">
              <div
                aria-hidden
                className="absolute -inset-px rounded-3xl -z-10 opacity-70 blur-xl"
                style={{
                  background:
                    "radial-gradient(60% 60% at 30% 0%, rgba(52,211,224,0.35), transparent 70%)",
                }}
              />
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-[#0c0b1e]/40">
                  Local results · near you
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-[#0e8090]">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Live ranking
                </span>
              </div>

              <div className="mt-5 space-y-2.5">
                {ranks.map((r) => (
                  <div
                    key={r.pos}
                    className={`flex items-center gap-3 rounded-2xl border p-3 ${
                      r.you
                        ? "border-amber/40 bg-amber/10"
                        : "border-black/[0.06] bg-black/[0.02]"
                    }`}
                  >
                    <span
                      className={`grid place-items-center w-8 h-8 rounded-lg text-sm font-bold shrink-0 ${
                        r.you
                          ? "bg-amber text-[#1a1206]"
                          : r.pos === 1
                            ? "bg-gradient-to-br from-cyan to-accent text-white"
                            : "bg-black/[0.05] text-[#0c0b1e]/50"
                      }`}
                    >
                      {r.pos}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div
                        className={`text-sm font-medium truncate ${
                          r.you ? "text-[#0c0b1e]" : "text-[#0c0b1e]/80"
                        }`}
                      >
                        {r.name}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[#0c0b1e]/45">
                        <Star className="w-3 h-3 fill-amber text-amber" />
                        {r.rating} · {r.reviews} reviews
                      </div>
                    </div>
                    {r.you && (
                      <ArrowDown className="w-4 h-4 text-[#b45309] shrink-0" />
                    )}
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm font-medium text-[#0c0b1e]/70">
                Every search you miss can become somebody else&apos;s phone call.
              </p>
            </div>

            {/* Stepped story cards */}
            <div
              className={pinned ? "relative h-[300px]" : "space-y-5"}
            >
              {stories.map((s, i) => (
                <div
                  key={s.n}
                  ref={(el) => {
                    cardRefs.current[i] = el;
                  }}
                  style={pinned ? { willChange: "opacity, transform" } : undefined}
                  className={`rounded-3xl border border-black/[0.07] bg-white p-7 shadow-xl ${s.glow} ${
                    pinned ? "absolute top-1/2 left-0 right-0" : ""
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
                    <span className={`w-2 h-2 rounded-full ${s.dot}`} />
                    <span className={s.color}>
                      {s.n} / {s.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-medium leading-snug text-[#0c0b1e]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[#0c0b1e]/60 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Progress rail (pinned only) */}
          {pinned && (
            <div className="mt-12 flex items-center justify-center gap-2">
              {stories.map((s, i) => (
                <span
                  key={s.n}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === step
                      ? `w-8 ${s.dot}`
                      : i < step
                        ? "w-2 bg-[#0c0b1e]/30"
                        : "w-2 bg-[#0c0b1e]/12"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
