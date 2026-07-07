"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

// A downward arrow that guides the visitor through the page, but only ever
// travels through the whitespace *between* sections — never over content. As
// the reading line moves through a gap the arrow advances; when it reaches the
// content it parks at the gap's edge (staying visible), and it resumes from the
// exact same spot in the next gap, so the motion reads as continuous rather
// than jumping. Homepage only; behind content; never intercepts clicks.

const ANCHOR = 0.44; // arrow's resting height in the viewport (fraction)
const WAVELENGTH = 380; // px of traveled distance per left/right swing
const TAIL = 120; // px of trailing ribbon behind the arrow

const clamp01 = (n: number) => Math.min(Math.max(n, 0), 1);

export default function ScrollGuide() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const arrowRef = useRef<SVGGElement>(null);
  const tailRef = useRef<SVGPathElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const wrap = wrapRef.current;
    const svg = svgRef.current;
    const arrow = arrowRef.current;
    const tail = tailRef.current;
    if (!wrap || !svg || !arrow || !tail) return;

    let st: ScrollTrigger | null = null;
    // Gap bands between sections, in page-Y, plus derived geometry.
    let bands: [number, number][] = [];
    let cx = 0;
    let amp = 0;
    const k = (Math.PI * 2) / WAVELENGTH;
    let heroBottom = 1;

    // Gentle primary swing plus a whisper of second harmonic for a soft,
    // S-curving route that leans through each gap rather than darting across it.
    const meanderX = (t: number) =>
      cx + amp * Math.sin(t * k) + amp * 0.12 * Math.sin(t * k * 2);

    const update = () => {
      const vh = window.innerHeight;
      const y = window.scrollY;

      // Fade the whole guide in only once past the hero.
      gsap.set(wrap, {
        opacity: clamp01((y - heroBottom * 0.7) / (heroBottom * 0.3)),
      });
      if (bands.length === 0) return;

      const readingY = y + vh * ANCHOR;
      let arrowY = bands[0][0];
      let traveled = 0; // distance along the "gaps-only" path
      let gapTop = bands[0][0];
      let gapBase = 0; // traveled at the top of the current gap
      let visible = false;
      let cumulative = 0;
      let prevBottom: number | null = null;
      let matched = false;

      for (let i = 0; i < bands.length; i++) {
        const [s, e] = bands[i];
        if (readingY < s) {
          // In content above this band — park at the previous gap's edge.
          if (prevBottom === null) {
            visible = false;
            arrowY = s;
            traveled = 0;
          } else {
            visible = true;
            arrowY = prevBottom;
            traveled = cumulative;
            gapTop = bands[i - 1][0];
            gapBase = cumulative - (bands[i - 1][1] - bands[i - 1][0]);
          }
          matched = true;
          break;
        }
        if (readingY <= e) {
          // Travelling through this gap.
          visible = true;
          arrowY = readingY;
          traveled = cumulative + (readingY - s);
          gapTop = s;
          gapBase = cumulative;
          matched = true;
          break;
        }
        cumulative += e - s;
        prevBottom = e;
      }

      if (!matched) {
        // Past every gap — park at the final gap's edge.
        visible = prevBottom !== null;
        arrowY = prevBottom ?? bands[bands.length - 1][1];
        traveled = cumulative;
        gapTop = bands[bands.length - 1][0];
        gapBase = cumulative - (bands[bands.length - 1][1] - bands[bands.length - 1][0]);
      }

      const x = meanderX(traveled);
      gsap.set(arrow, { x, y: arrowY, opacity: visible ? 1 : 0 });

      // Curved trailing ribbon that follows the same meander, clipped to the
      // current gap so it never spills into the content above. Sampling the
      // path (rather than a straight chord) is what makes the S visible.
      const tailTopY = Math.max(gapTop, arrowY - TAIL);
      const STEPS = 16;
      let d = "";
      for (let i = 0; i <= STEPS; i++) {
        const yy = tailTopY + ((arrowY - tailTopY) * i) / STEPS;
        const tt = gapBase + (yy - gapTop);
        d += `${i === 0 ? "M" : "L"} ${meanderX(tt).toFixed(1)} ${yy.toFixed(1)} `;
      }
      tail.setAttribute("d", d.trim());
      tail.style.opacity = visible ? "1" : "0";
    };

    const setup = () => {
      const w = wrap.clientWidth || document.documentElement.clientWidth;
      const h = wrap.offsetHeight || document.body.offsetHeight;
      cx = w * 0.5;
      amp = Math.min(w * 0.06, 54); // gentle lean; scales down on narrow screens
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);

      const sy = window.scrollY;
      const hero = document.querySelector("main section");
      heroBottom = hero
        ? hero.getBoundingClientRect().bottom + sy
        : window.innerHeight;

      const sections = Array.from(document.querySelectorAll("main section"))
        .map((el) => {
          const r = el.getBoundingClientRect();
          return { top: r.top + sy, bottom: r.bottom + sy, height: r.height };
        })
        .filter((s) => s.height > 4)
        .sort((a, b) => a.top - b.top);

      const HALF = 92; // half-height of each gap band (how far the arrow travels)
      bands = [];
      for (let i = 0; i < sections.length - 1; i++) {
        const boundary = (sections[i].bottom + sections[i + 1].top) / 2;
        bands.push([boundary - HALF, boundary + HALF]);
      }

      st?.kill();
      gsap.set(wrap, { opacity: 0 });

      if (prefersReducedMotion()) {
        gsap.set(arrow, { opacity: 0 });
        tail.style.opacity = "0";
        st = null;
        return;
      }

      st = ScrollTrigger.create({ start: 0, end: "max", onUpdate: update });
      update();
    };

    setup();
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    let debounce: number | undefined;
    const relayout = () => {
      window.clearTimeout(debounce);
      debounce = window.setTimeout(() => {
        setup();
        ScrollTrigger.refresh();
      }, 200);
    };
    window.addEventListener("resize", relayout);
    const ro = new ResizeObserver(relayout);
    ro.observe(document.body);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(debounce);
      window.removeEventListener("resize", relayout);
      ro.disconnect();
      st?.kill();
    };
  }, [pathname]);

  if (pathname !== "/") return null;

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      <svg
        ref={svgRef}
        preserveAspectRatio="none"
        className="w-full h-full"
        fill="none"
      >
        <defs>
          <filter id="guideGlow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* comet fade: transparent at the top of the trail, solid at the arrow */}
          <linearGradient id="guideTail" gradientUnits="objectBoundingBox" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#6c6af6" stopOpacity="0" />
            <stop offset="1" stopColor="#6c6af6" stopOpacity="0.55" />
          </linearGradient>
        </defs>

        {/* curved trailing ribbon behind the arrow */}
        <path
          ref={tailRef}
          fill="none"
          stroke="url(#guideTail)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0}
        />

        {/* the down-arrow marker */}
        <g ref={arrowRef} opacity={0} filter="url(#guideGlow)">
          <circle r={19} fill="#6c6af6" opacity={0.14} />
          <circle r={12} fill="#ffffff" opacity={0.96} />
          <circle
            r={12}
            fill="none"
            stroke="#6c6af6"
            strokeWidth={1.25}
            opacity={0.5}
          />
          <path
            d="M -5 -3 L 0 4 L 5 -3"
            fill="none"
            stroke="#6c6af6"
            strokeWidth={2.4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}
