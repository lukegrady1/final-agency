"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion, hasFinePointer } from "@/lib/gsap";

interface CursorSpotlightProps {
  color?: string;
  size?: number;
}

// A soft glow that trails the cursor across its parent section — adds depth and
// interactivity. Place inside a `relative` (ideally `isolate`) section. Tracks
// the parent element; desktop pointer only; disabled under reduced motion.
export default function CursorSpotlight({
  color = "rgba(108,106,246,0.16)",
  size = 520,
}: CursorSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent || prefersReducedMotion() || !hasFinePointer()) return;

    gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0 });
    const xTo = gsap.quickTo(el, "x", { duration: 0.55, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.55, ease: "power3.out" });

    const onMove = (e: MouseEvent) => {
      const r = parent.getBoundingClientRect();
      xTo(e.clientX - r.left);
      yTo(e.clientY - r.top);
    };
    const onEnter = () => gsap.to(el, { opacity: 1, duration: 0.4 });
    const onLeave = () => gsap.to(el, { opacity: 0, duration: 0.5 });

    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseenter", onEnter);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseenter", onEnter);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute top-0 left-0 rounded-full opacity-0"
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}, transparent 70%)`,
        zIndex: 0,
      }}
    />
  );
}
