"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlurIn from "@/components/BlurIn";

interface ProgrammaticCTAProps {
  heading: string;
  body: string;
}

export default function ProgrammaticCTA({
  heading,
  body,
}: ProgrammaticCTAProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(108,106,246,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <BlurIn>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white">
            {heading}
          </h2>
        </BlurIn>
        <BlurIn delay={0.1}>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
            {body}
          </p>
        </BlurIn>
        <BlurIn delay={0.2}>
          <div className="flex items-center justify-center gap-4 flex-wrap mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </BlurIn>
        <BlurIn delay={0.3}>
          <div className="flex items-center justify-center gap-6 flex-wrap mt-8">
            <span className="text-white/40 text-sm">No contracts</span>
            <span className="text-white/40 text-sm">
              Free audit — no obligation
            </span>
            <span className="text-white/40 text-sm">Response within 24 hours</span>
          </div>
        </BlurIn>
      </div>
    </section>
  );
}
