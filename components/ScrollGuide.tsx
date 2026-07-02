"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

// A thread that meanders down the full height of the page in the background.
// An arrow rides it, anchored near the visitor's reading line so it keeps pace
// with the scroll (never lags), rotating to follow the curve. The traveled
// portion draws in; a faint dotted track shows the path ahead. Sits behind the
// content and never intercepts clicks.

const AMP_RATIO = 0.26;
const AMP_MAX = 300;
const WAVELENGTH = 1150; // px of page per left-right swing
const ANCHOR = 0.44; // arrow's resting height in the viewport (fraction)

function buildPath(w: number, h: number): string {
  const cx = w * 0.5;
  const amp = Math.min(w * AMP_RATIO, AMP_MAX);
  const waves = Math.max(2, Math.round(h / WAVELENGTH));
  const k = (waves * Math.PI * 2) / Math.max(h, 1);
  let d = "";
  for (let y = 0; y <= h; y += 16) {
    const x = cx + amp * Math.sin(y * k);
    d += (y === 0 ? "M" : "L") + `${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d.trim();
}

export default function ScrollGuide() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const trackRef = useRef<SVGPathElement>(null);
  const drawnRef = useRef<SVGPathElement>(null);
  const arrowRef = useRef<SVGGElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;
    const wrap = wrapRef.current;
    const svg = svgRef.current;
    const track = trackRef.current;
    const drawn = drawnRef.current;
    const arrow = arrowRef.current;
    if (!wrap || !svg || !track || !drawn || !arrow) return;

    let tl: gsap.core.Timeline | null = null;
    let st: ScrollTrigger | null = null;
    let pageH = 1;
    let heroBottom = 1;

    // Tie the arrow's progress to the reading line so it keeps pace with the
    // scroll instead of crawling by arc-length on tall pages. The whole guide
    // fades in only once the visitor has scrolled off the hero.
    const update = () => {
      if (!tl) return;
      const y = window.scrollY;
      const f = Math.min(Math.max((y + window.innerHeight * ANCHOR) / pageH, 0), 1);
      tl.progress(f);
      const fade = Math.min(
        Math.max((y - heroBottom * 0.7) / (heroBottom * 0.3), 0),
        1,
      );
      gsap.set(wrap, { opacity: fade });
    };

    const setup = () => {
      const w = wrap.clientWidth || document.documentElement.clientWidth;
      const h = wrap.offsetHeight || document.body.offsetHeight;
      pageH = h;
      const hero = document.querySelector("main section");
      heroBottom = hero
        ? hero.getBoundingClientRect().bottom + window.scrollY
        : window.innerHeight;
      gsap.set(wrap, { opacity: 0 });
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      const d = buildPath(w, h);
      track.setAttribute("d", d);
      drawn.setAttribute("d", d);
      const len = drawn.getTotalLength();
      gsap.set(drawn, { strokeDasharray: len, strokeDashoffset: len });

      tl?.kill();
      st?.kill();

      if (prefersReducedMotion()) {
        gsap.set(drawn, { strokeDashoffset: len * 0.5 });
        gsap.set(arrow, { opacity: 0 });
        tl = null;
        st = null;
        return;
      }

      gsap.set(arrow, { opacity: 1 });
      tl = gsap.timeline({ paused: true });
      tl.to(drawn, { strokeDashoffset: 0, ease: "none" }, 0).to(
        arrow,
        {
          motionPath: {
            path: drawn,
            align: drawn,
            alignOrigin: [0.5, 0.5],
            autoRotate: true,
          },
          ease: "none",
        },
        0,
      );
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
      tl?.kill();
      st?.kill();
    };
  }, [pathname]);

  // The scroll-guide arrow only runs on the homepage.
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
          <linearGradient id="guideGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#12b5c9" />
            <stop offset="45%" stopColor="#6c6af6" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
          <filter id="guideGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* faint full-journey track */}
        <path
          ref={trackRef}
          d=""
          stroke="#6c6af6"
          strokeWidth={1.75}
          strokeLinecap="round"
          strokeDasharray="1 12"
          opacity={0.16}
        />
        {/* traveled portion */}
        <path
          ref={drawnRef}
          d=""
          stroke="url(#guideGrad)"
          strokeWidth={2.75}
          strokeLinecap="round"
          opacity={0.5}
          filter="url(#guideGlow)"
        />
        {/* the arrow the visitor follows */}
        <g ref={arrowRef} opacity={0} filter="url(#guideGlow)">
          <circle r={21} fill="#6c6af6" opacity={0.1} />
          <circle r={13} fill="#ffffff" opacity={0.92} />
          <circle
            r={13}
            fill="none"
            stroke="#6c6af6"
            strokeWidth={1.25}
            opacity={0.4}
          />
          <path d="M -6 -8 L 11 0 L -6 8 Z" fill="#6c6af6" opacity={0.85} />
        </g>
      </svg>
    </div>
  );
}
