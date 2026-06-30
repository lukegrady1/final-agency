import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import Reveal from "./Reveal";

export default function GrowFinalCTA() {
  return (
    <section className="relative overflow-hidden grain-overlay py-28 lg:py-40 border-t border-black/10">
      {/* Concentric rings backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10 grid place-items-center">
        <div className="grow-spin-slow">
          {[280, 480, 700, 940].map((s) => (
            <div
              key={s}
              className="absolute rounded-full border border-[#0c0b1e]/[0.07]"
              style={{ width: s, height: s, left: -s / 2, top: -s / 2 }}
            />
          ))}
        </div>
      </div>
      {/* Amber-ember + indigo glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 50%, rgba(108,106,246,0.18), transparent 70%), radial-gradient(30% 30% at 72% 38%, rgba(245,165,36,0.16), transparent 70%), radial-gradient(30% 30% at 28% 68%, rgba(168,85,247,0.16), transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <Reveal
          as="span"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#b45309]"
        >
          <span className="w-6 h-px bg-amber" />
          Your next move
          <span className="w-6 h-px bg-amber" />
        </Reveal>

        <Reveal
          as="h2"
          delay={80}
          className="mt-5 text-5xl sm:text-6xl font-medium tracking-tight leading-[1.03] text-[#0c0b1e]"
        >
          Own more of your{" "}
          <span className="grow-gradient-text font-display italic">
            local market.
          </span>
        </Reveal>

        <Reveal
          as="p"
          delay={160}
          className="mt-6 text-[#0c0b1e]/70 text-lg leading-relaxed max-w-xl mx-auto"
        >
          Let&apos;s look at your current Google presence together and map the
          simplest path to more reviews, better rankings, and more calls. Free,
          no pressure.
        </Reveal>

        <Reveal
          delay={240}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/start#book"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-4 font-medium text-sm text-white bg-gradient-to-r from-cyan via-accent to-violet hover:opacity-90 transition-opacity shadow-lg shadow-accent/30"
          >
            Book your free call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <a
            href="tel:+19787982870"
            className="inline-flex items-center gap-2 rounded-full px-7 py-4 font-medium text-sm text-[#0c0b1e] border border-black/15 bg-white hover:bg-black/[0.03] hover:border-black/25 transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 text-[#0e8090]" />
            (978) 798-2870
          </a>
        </Reveal>

        <Reveal as="p" delay={320} className="mt-6 text-[#0c0b1e]/40 text-xs">
          Live in 10 business days, or your next month is free.
        </Reveal>
      </div>
    </section>
  );
}
