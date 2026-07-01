import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import AuroraBackdrop from "./grow/AuroraBackdrop";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden grain-overlay flex items-center min-h-[92vh] pt-36 pb-20 lg:pt-44 lg:pb-28">
      <AuroraBackdrop tone="indigo-cyan" />
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

      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center gap-7">
        <span
          data-reveal-load
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-[#0c0b1e]/70 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-accent" />
          Websites, SEO &amp; reviews for local businesses
        </span>

        <h1
          data-reveal-load
          style={{ ["--reveal-delay" as string]: "100ms" }}
          className="text-[2.7rem] leading-[1.05] sm:text-6xl lg:text-[4.2rem] font-medium text-[#0c0b1e] tracking-tight"
        >
          More customers, better rankings,
          <br />
          one place to{" "}
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
          <Link
            href="/start"
            className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium text-sm text-white bg-gradient-to-r from-cyan via-accent to-violet hover:opacity-90 transition-opacity shadow-lg shadow-accent/25"
          >
            Get Started
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center rounded-full px-6 py-3.5 font-medium text-sm text-[#0c0b1e] border border-black/10 bg-white hover:bg-black/[0.03] hover:border-black/20 transition-colors shadow-sm"
          >
            See Our Work
          </Link>
        </div>

        <div
          data-reveal-load
          style={{ ["--reveal-delay" as string]: "550ms" }}
          className="flex items-center gap-3"
        >
          <div className="flex -space-x-2">
            {[
              "from-cyan to-accent",
              "from-violet to-accent",
              "from-amber to-violet",
              "from-accent to-cyan",
            ].map((g, i) => (
              <span
                key={i}
                className={`w-7 h-7 rounded-full bg-gradient-to-br ${g} border-2 border-[#f4f5fb]`}
              />
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
