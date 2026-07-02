"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AuroraBackdrop from "./grow/AuroraBackdrop";
import CursorSpotlight from "./CursorSpotlight";
import Magnetic from "./Magnetic";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.to(content, {
        yPercent: -18,
        opacity: 0.12,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden grain-overlay flex items-center min-h-[92vh] pt-36 pb-20 lg:pt-44 lg:pb-28"
    >
      <AuroraBackdrop tone="indigo-cyan" />
      <CursorSpotlight />
      {/* Subtle grid lines, masked toward center */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,11,30,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(12,11,30,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(70% 60% at 50% 40%, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 50% 40%, black, transparent 80%)",
        }}
      />

      <div
        ref={contentRef}
        className="relative z-20 w-full max-w-6xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-7"
      >
        <h1
          data-reveal-load
          className="text-[2.5rem] leading-[1.12] sm:text-5xl lg:text-[3.9rem] lg:leading-[1.1] font-medium text-[#0c0b1e] tracking-tight text-balance"
        >
          More customers. Better rankings.
          <br />
          One place to{" "}
          <br className="sm:hidden" />
          <span
            className="grow-gradient-text font-display italic"
            style={{ paddingRight: "0.1em" }}
          >
            manage it all.
          </span>
        </h1>

        <p
          data-reveal-load
          style={{ ["--reveal-delay" as string]: "250ms" }}
          className="text-[#0c0b1e]/60 text-lg leading-relaxed max-w-xl"
        >
          We build your website and get you ranking higher on Google, so you&apos;re
          found by people already searching for what you do — ready-to-hire
          customers, not tire-kickers. Plans start at $97 a month, no setup fee.
        </p>

        <div
          data-reveal-load
          style={{ ["--reveal-delay" as string]: "400ms" }}
          className="flex items-center gap-3 flex-wrap justify-center"
        >
          <Magnetic strength={0.4}>
            <Link
              href="/start"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium text-sm text-white bg-gradient-to-r from-cyan via-accent to-violet hover:opacity-90 transition-opacity shadow-lg shadow-accent/25"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Magnetic>
          <Magnetic strength={0.4}>
            <Link
              href="/work"
              className="inline-flex items-center rounded-full px-6 py-3.5 font-medium text-sm text-[#0c0b1e] border border-black/10 bg-white hover:bg-black/[0.03] hover:border-black/20 transition-colors shadow-sm"
            >
              See Our Work
            </Link>
          </Magnetic>
        </div>

        <div
          data-reveal-load
          style={{ ["--reveal-delay" as string]: "550ms" }}
          className="flex items-center gap-3"
        >
          <div className="flex -space-x-2">
            {[
              { g: "from-cyan to-accent", initial: "M" },
              { g: "from-violet to-accent", initial: "R" },
              { g: "from-amber to-violet", initial: "J" },
              { g: "from-accent to-cyan", initial: "G" },
            ].map((a, i) => (
              <span
                key={i}
                className={`grid place-items-center w-7 h-7 rounded-full bg-gradient-to-br ${a.g} border-2 border-[#f4f5fb] text-white text-[10px] font-semibold`}
              >
                {a.initial}
              </span>
            ))}
          </div>
          <span className="text-[#0c0b1e]/50 text-sm">
            Built for busy local business owners
          </span>
        </div>
      </div>
    </section>
  );
}
