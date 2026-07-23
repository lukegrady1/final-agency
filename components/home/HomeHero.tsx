import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GrowProfileMockup from "../grow/GrowProfileMockup";
import AuroraBackdrop from "../grow/AuroraBackdrop";

// Homepage hero. Same visual language as the /grow hero (two columns, GBP
// mockup on the right) but tells the one-product story: reviews win the click,
// the website wins the call, every lead lands in one inbox.
export default function HomeHero() {
  return (
    <section className="relative overflow-hidden grain-overlay pt-28 pb-12 lg:pt-44 lg:pb-28">
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
            "radial-gradient(70% 60% at 50% 30%, black, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 50% 30%, black, transparent 80%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left: copy */}
          <div>
            <h1
              data-reveal-load
              style={{ ["--reveal-delay" as string]: "100ms" }}
              className="mt-2 lg:mt-6 text-[2.4rem] leading-[1.06] sm:text-6xl lg:text-[4.1rem] lg:leading-[1.02] font-medium text-[#0c0b1e] tracking-tight"
            >
              Get found.
              <br />
              Get chosen.
              <br />
              <span
                className="grow-gradient-text font-display italic"
                style={{ paddingRight: "0.1em" }}
              >
                Get the call.
              </span>
            </h1>

            <p
              data-reveal-load
              style={{ ["--reveal-delay" as string]: "250ms" }}
              className="mt-4 lg:mt-6 text-[#0c0b1e]/60 text-base sm:text-lg leading-relaxed max-w-md"
            >
              Someone searches, your reviews win the click, your website wins the
              call, and every lead lands in one inbox. One system that turns
              nearby searches into real customers &mdash; $197 a month, no setup
              fee.
            </p>

            <div
              data-reveal-load
              style={{ ["--reveal-delay" as string]: "400ms" }}
              className="mt-6 lg:mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/start"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium text-sm text-white bg-gradient-to-r from-cyan via-accent to-violet hover:opacity-90 transition duration-200 ease-out active:scale-[0.97] shadow-lg shadow-accent/25"
              >
                Book a Free Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="#how"
                className="inline-flex items-center rounded-full px-6 py-3.5 font-medium text-sm text-[#0c0b1e] border border-black/10 bg-white hover:bg-black/[0.03] hover:border-black/20 transition duration-200 ease-out active:scale-[0.97] shadow-sm"
              >
                See how it works
              </Link>
            </div>

            <div
              data-reveal-load
              style={{ ["--reveal-delay" as string]: "550ms" }}
              className="mt-6 lg:mt-8 flex items-center gap-3"
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

          {/* Right: animated GBP mockup */}
          <div className="relative w-full max-w-xs sm:max-w-sm mx-auto lg:max-w-none">
            <div
              style={{
                transform:
                  "perspective(2000px) rotateY(-9deg) rotateX(3deg) rotate(3deg)",
                transformStyle: "preserve-3d",
                filter:
                  "drop-shadow(0 35px 55px rgba(12,11,30,0.22)) drop-shadow(0 12px 24px rgba(12,11,30,0.14))",
              }}
            >
              <GrowProfileMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
