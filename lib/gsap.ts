import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register once, client-side only. Safe to import from any Client Component.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, ScrollToPlugin);
}

export { gsap, ScrollTrigger, MotionPathPlugin, ScrollToPlugin };

/** True when the visitor prefers reduced motion (skip GSAP effects). */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** True on devices with a real hover-capable pointer (skip cursor effects on touch). */
export function hasFinePointer(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
}
