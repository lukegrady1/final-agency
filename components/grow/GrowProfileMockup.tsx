import { Star } from "lucide-react";
import type { CSSProperties } from "react";

/**
 * "Google Business Profile" mockup for the /grow hero (light theme).
 * Pure CSS animation (no JS), so it renders reliably on load.
 * Styled to match the LocalRank reference: dark map-position panel,
 * lime-green emphasis, and a flat royal-blue map pack.
 */

// 5 columns x 2 rows. Active (ranked) tiles are royal blue; the rest idle.
const tiles: { rank: number; active: boolean }[] = [
  { rank: 8, active: false },
  { rank: 7, active: false },
  { rank: 6, active: false },
  { rank: 5, active: false },
  { rank: 3, active: true },
  { rank: 7, active: false },
  { rank: 6, active: false },
  { rank: 3, active: true },
  { rank: 2, active: true },
  { rank: 1, active: true },
];

const BLUE = "#3878ff";
const LIME = "#c9ff45";
const DARK = "#08111f";

export default function GrowProfileMockup() {
  return (
    <div
      data-reveal-load
      style={{ ["--reveal-delay" as string]: "300ms" }}
      className="relative w-full max-w-md mx-auto"
    >
      {/* Ambient glow behind the card */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(40% 50% at 72% 18%, rgba(56,120,255,0.32), transparent 70%), radial-gradient(45% 55% at 18% 82%, rgba(201,255,69,0.22), transparent 70%), radial-gradient(40% 40% at 90% 90%, rgba(56,120,255,0.18), transparent 70%)",
        }}
      />

      {/* Card */}
      <div className="relative rounded-[28px] border border-black/[0.06] bg-white p-5 sm:p-6 shadow-2xl shadow-[#0c0b1e]/10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-lg font-bold" style={{ color: BLUE }}>
              G
            </span>
            <span className="text-[#0c0b1e] font-semibold text-[15px]">
              Business Profile
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ddf8ea] px-2.5 py-1 text-[10px] font-bold tracking-wide text-[#1a7f44] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] grow-pulse" />
            Live Growth
          </span>
        </div>

        <div className="mt-5 h-px bg-black/[0.07]" />

        {/* Business row */}
        <div className="mt-6 flex items-start justify-between">
          <div>
            <h3 className="text-[#0c0b1e] font-bold text-xl">Your Business</h3>
            <p className="text-[#0c0b1e]/45 text-xs mt-1">
              Local service · Open now
            </p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold text-[#0c0b1e] leading-none">
              4.9
            </div>
            <div className="flex items-center gap-0.5 mt-1.5 justify-end">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber text-amber" />
              ))}
            </div>
          </div>
        </div>

        {/* Map position panel — dark */}
        <div
          className="mt-6 rounded-[20px] p-5"
          style={{ backgroundColor: DARK }}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
            Local map position
          </span>
          <div className="mt-1 flex items-end justify-between">
            <span
              className="text-5xl font-extrabold leading-none"
              style={{ color: LIME }}
            >
              #2
            </span>
            <div className="text-right">
              <div
                className="text-sm font-bold flex items-center gap-1 justify-end"
                style={{ color: LIME }}
              >
                <span aria-hidden>↑</span> Moving up
              </div>
              <div className="text-white/40 text-[11px] font-medium tracking-wide mt-0.5">
                163 REVIEWS
              </div>
            </div>
          </div>
        </div>

        {/* Map-pack grid */}
        <div className="mt-4 grid grid-cols-5 gap-2.5">
          {tiles.map((t, i) => (
            <div
              key={i}
              className="grow-rank-pop aspect-square rounded-xl grid place-items-center text-sm font-bold"
              style={
                {
                  animationDelay: `${700 + i * 60}ms`,
                  backgroundColor: t.active ? BLUE : "#edf1f6",
                  color: t.active ? "#ffffff" : "rgba(12,11,30,0.35)",
                } as CSSProperties
              }
            >
              {t.rank}
            </div>
          ))}
        </div>
      </div>

      {/* Floating "+38% more calls" badge */}
      <div className="absolute -top-4 -right-3 sm:-right-6 grow-float">
        <div
          className="rounded-2xl px-4 py-2.5 shadow-xl shadow-[#0c0b1e]/30 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(14,27,45,0.86)" }}
        >
          <div
            className="text-lg font-extrabold leading-none"
            style={{ color: LIME }}
          >
            +38%
          </div>
          <div className="text-white text-[11px] font-medium mt-0.5">
            more calls
          </div>
        </div>
      </div>

      {/* Floating "new review received" toast */}
      <div className="absolute -bottom-5 -left-3 sm:-left-8 grow-float-slow">
        <div
          className="rounded-2xl px-4 py-3 shadow-xl shadow-[#0c0b1e]/30 backdrop-blur-sm"
          style={{ backgroundColor: "rgba(14,27,45,0.86)" }}
        >
          <div className="flex items-center gap-0.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star
                key={i}
                className="w-3 h-3"
                style={{ fill: LIME, color: LIME }}
              />
            ))}
          </div>
          <div className="text-white text-xs font-medium mt-1">
            new review received
          </div>
        </div>
      </div>
    </div>
  );
}
