"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
          {/* Top group: heading + subtitle */}
          <div className="flex flex-col gap-6">
            {/* HEADING */}
            <h1 className="font-medium leading-tight lg:leading-[1.2] text-4xl md:text-5xl lg:text-6xl text-white">
              <span className="block">
                More leads, better rankings,
              </span>
              <span>one place to </span>
              <span className="font-['Playfair_Display'] italic">manage it all.</span>
            </h1>

            {/* SUBTITLE */}
            <BlurIn delay={0.2} duration={0.6}>
              <p className="text-white/80 text-lg font-normal leading-relaxed max-w-xl">
                We build your website and run your Google presence so customers
                find you first and turn into paying clients. Plans start at $97 a
                month. No setup fee.
              </p>
            </BlurIn>
          </div>

          {/* CTA BUTTONS */}
          <BlurIn delay={0.4} duration={0.6}>
            <div className="flex items-center gap-4 flex-wrap">
              {/* Primary CTA */}
              <Link
                href="/start"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-white text-[#070612] font-medium text-sm hover:bg-white/90 transition-colors duration-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/work"
                className="inline-flex items-center rounded-full px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-medium text-sm hover:bg-white/30 transition-colors duration-200"
              >
                See Our Work
              </Link>
            </div>
          </BlurIn>
        </div>
      </div>
    </section>
  );
}
