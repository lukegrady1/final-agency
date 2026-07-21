import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "./grow/Reveal";
import CursorSpotlight from "./CursorSpotlight";
import Magnetic from "./Magnetic";

export default function CTABanner() {
  return (
    <section className="relative isolate overflow-hidden grain-overlay py-24 lg:py-32 border-t border-black/10">
      <CursorSpotlight size={620} />
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
      {/* Multi-color glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(45% 45% at 50% 50%, rgba(108,106,246,0.16), transparent 70%), radial-gradient(30% 30% at 72% 38%, rgba(52,211,224,0.14), transparent 70%), radial-gradient(30% 30% at 28% 68%, rgba(168,85,247,0.14), transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <Reveal
          as="span"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-accent"
        >
          <span className="w-6 h-px bg-accent" />
          Three plans. From $97 a month.
          <span className="w-6 h-px bg-accent" />
        </Reveal>

        <Reveal
          as="h2"
          delay={80}
          className="mt-5 text-4xl sm:text-5xl font-medium tracking-tight leading-[1.05] text-[#0c0b1e]"
        >
          Ready to grow your{" "}
          <span className="grow-gradient-text font-display italic">
            business?
          </span>
        </Reveal>

        <Reveal
          as="p"
          delay={160}
          className="mt-6 text-[#0c0b1e]/70 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          A custom website with one inbox for your leads at $97/month, The
          Reputation System with a 5-star review engine at $147/month, or the
          full Growth System — Google presence and SEO too — at $297/month.
          Built and managed for you. No setup fee, cancel anytime.
        </Reveal>

        <Reveal
          delay={240}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Magnetic strength={0.4}>
            <Link
              href="/start"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-4 font-medium text-sm text-white bg-gradient-to-r from-cyan via-accent to-violet hover:opacity-90 transition-opacity shadow-lg shadow-accent/30"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Magnetic>
          <Link
            href="/work"
            className="inline-flex items-center rounded-full px-7 py-4 font-medium text-sm text-[#0c0b1e] border border-black/15 bg-white hover:bg-black/[0.03] hover:border-black/25 transition-colors shadow-sm"
          >
            See Our Work
          </Link>
        </Reveal>

        <Reveal as="p" delay={320} className="mt-6 text-[#0c0b1e]/40 text-xs">
          Fully managed — we handle everything.
        </Reveal>
      </div>
    </section>
  );
}
