import type { CSSProperties } from "react";

// Fixed, site-wide decorative layer that sits behind all content. Pure CSS
// (no JS, no scroll listeners) so it stays smooth on every device, and it
// respects prefers-reduced-motion via globals.css. Revealed through the
// translucent / transparent sections as the visitor scrolls.

const orbs: { cls: string; style: CSSProperties }[] = [
  {
    cls: "ambient-orb-1",
    style: {
      width: "44vw",
      height: "44vw",
      top: "-12%",
      left: "-6%",
      background: "rgba(108,106,246,0.5)",
    },
  },
  {
    cls: "ambient-orb-2",
    style: {
      width: "34vw",
      height: "34vw",
      top: "26%",
      right: "-10%",
      background: "rgba(52,211,224,0.42)",
    },
  },
  {
    cls: "ambient-orb-3",
    style: {
      width: "40vw",
      height: "40vw",
      bottom: "-16%",
      left: "12%",
      background: "rgba(168,85,247,0.4)",
    },
  },
  {
    cls: "ambient-orb-4",
    style: {
      width: "28vw",
      height: "28vw",
      top: "56%",
      left: "58%",
      background: "rgba(245,165,36,0.3)",
    },
  },
];

// Deterministic positions/timings — no Math.random (SSR-safe, no hydration
// mismatch).
const particles: {
  top: string;
  left: string;
  size: number;
  bg: string;
  dur: string;
  delay: string;
}[] = [
  { top: "12%", left: "9%", size: 5, bg: "#6c6af6", dur: "19s", delay: "0s" },
  { top: "22%", left: "82%", size: 4, bg: "#34d3e0", dur: "23s", delay: "-4s" },
  { top: "34%", left: "26%", size: 3, bg: "#a855f7", dur: "18s", delay: "-9s" },
  { top: "44%", left: "68%", size: 6, bg: "#6c6af6", dur: "26s", delay: "-2s" },
  { top: "58%", left: "16%", size: 4, bg: "#34d3e0", dur: "21s", delay: "-13s" },
  { top: "64%", left: "88%", size: 3, bg: "#f5a524", dur: "24s", delay: "-6s" },
  { top: "72%", left: "40%", size: 5, bg: "#a855f7", dur: "20s", delay: "-16s" },
  { top: "80%", left: "72%", size: 4, bg: "#6c6af6", dur: "22s", delay: "-3s" },
  { top: "18%", left: "52%", size: 3, bg: "#34d3e0", dur: "25s", delay: "-11s" },
  { top: "38%", left: "94%", size: 4, bg: "#6c6af6", dur: "19s", delay: "-7s" },
  { top: "50%", left: "4%", size: 3, bg: "#a855f7", dur: "27s", delay: "-1s" },
  { top: "88%", left: "30%", size: 5, bg: "#34d3e0", dur: "23s", delay: "-14s" },
  { top: "28%", left: "62%", size: 3, bg: "#f5a524", dur: "18s", delay: "-5s" },
  { top: "70%", left: "56%", size: 4, bg: "#6c6af6", dur: "24s", delay: "-10s" },
  { top: "8%", left: "38%", size: 3, bg: "#a855f7", dur: "26s", delay: "-8s" },
  { top: "84%", left: "10%", size: 4, bg: "#34d3e0", dur: "20s", delay: "-17s" },
];

export default function AmbientBackground() {
  return (
    <div aria-hidden className="ambient-bg">
      <div className="ambient-grid" />
      {orbs.map((o, i) => (
        <div key={i} className={`ambient-orb ${o.cls}`} style={o.style} />
      ))}
      {particles.map((p, i) => (
        <span
          key={i}
          className="ambient-particle"
          style={
            {
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              background: p.bg,
              ["--float-dur" as string]: p.dur,
              ["--float-delay" as string]: p.delay,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
