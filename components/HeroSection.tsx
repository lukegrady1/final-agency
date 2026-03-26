"use client";

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import BlurIn from "./BlurIn";
import HeroVideo from "./HeroVideo";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: "#070612" }}
    >
      <HeroVideo src="https://stream.mux.com/s8pMcOvMQXc4GD6AX4e1o01xFogFxipmuKltNfSYza0200.m3u8" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-12">
          {/* Top group: badge + heading + subtitle */}
          <div className="flex flex-col gap-6">
            {/* BADGE */}
            <BlurIn delay={0} duration={0.6}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 backdrop-blur-sm px-3 py-1.5">
                <Sparkles className="w-3 h-3 text-white/80" />
                <span className="text-sm font-medium text-white/80">
                  AI That Works While You Sleep
                </span>
              </div>
            </BlurIn>

            {/* HEADING — renders visible immediately for LCP, no animation delay */}
            <h1 className="font-medium leading-tight lg:leading-[1.2] text-4xl md:text-5xl lg:text-6xl text-white">
              <span className="block">
                More Leads, Fewer Missed Calls
              </span>
              <span>Powered by </span>
              <span className="font-['Playfair_Display'] italic">AI.</span>
            </h1>

            {/* SUBTITLE */}
            <BlurIn delay={0.2} duration={0.6}>
              <p className="text-white/80 text-lg font-normal leading-relaxed max-w-xl">
                AI chatbots that book appointments. Voice agents that answer
                every call. Websites that turn visitors into customers. We
                build the systems — you get the results.
              </p>
            </BlurIn>
          </div>

          {/* CTA BUTTONS */}
          <BlurIn delay={0.4} duration={0.6}>
            <div className="flex items-center gap-4 flex-wrap">
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-[#070612] font-medium text-sm hover:bg-white/90 transition-colors duration-200"
              >
                Get Your Free Audit
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/services"
                className="inline-flex items-center rounded-full px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-medium text-sm hover:bg-white/30 transition-colors duration-200"
              >
                See What We Build
              </Link>
            </div>
          </BlurIn>
        </div>
      </div>
    </section>
  );
}
