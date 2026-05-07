"use client";

import Link from "next/link";
import { ShieldOff, Zap, Clock } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import BlurIn from "./BlurIn";

export default function AboutSnippet() {
  return (
    <SectionWrapper>
      <div className="max-w-3xl">
        <BlurIn>
          <SectionLabel>About Grady Digital</SectionLabel>
        </BlurIn>
        <BlurIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium text-white mt-4 leading-tight">
            Built by an engineer who thinks like a marketer.
          </h2>
        </BlurIn>
        <div className="mt-6 space-y-4">
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-sm leading-relaxed">
              Most local businesses either don&apos;t have a website or have one
              that looks like it was built ten years ago. When a potential
              customer looks you up and sees an outdated site, they move on. You
              lose the job before you even had a chance.
            </p>
          </BlurIn>
          <BlurIn delay={0.25}>
            <p className="text-white/60 text-sm leading-relaxed">
              Grady Digital builds custom, conversion-focused websites for local
              service businesses. Every site is designed from scratch, fully
              managed, and built to do one thing: get you more clients.
            </p>
          </BlurIn>
          <BlurIn delay={0.3}>
            <p className="text-white/60 text-sm leading-relaxed">
              You work directly with Luke — no account managers, no outsourcing,
              no runaround. Just a software engineer who builds websites that
              actually work.
            </p>
          </BlurIn>
        </div>

        <BlurIn delay={0.35}>
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <ShieldOff className="w-4 h-4 text-accent-light" />
              No Contracts — month-to-month
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Clock className="w-4 h-4 text-accent-light" />
              Live in two weeks
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Zap className="w-4 h-4 text-accent-light" />
              Fully managed — we handle everything
            </div>
          </div>
        </BlurIn>

        <BlurIn delay={0.4}>
          <Link
            href="/about"
            className="inline-block text-accent-light text-sm mt-6 hover:underline"
          >
            Learn more about us &rarr;
          </Link>
        </BlurIn>
      </div>
    </SectionWrapper>
  );
}
