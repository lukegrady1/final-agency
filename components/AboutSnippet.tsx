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
          <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4 leading-tight">
            Built by an engineer who thinks like a{" "}
            <span className="grow-gradient-text font-display italic">
              marketer.
            </span>
          </h2>
        </BlurIn>
        <div className="mt-6 space-y-4">
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-sm leading-relaxed">
              Most local businesses either don&apos;t have a website or have one
              that looks like it was built ten years ago. When a potential
              customer looks you up and sees an outdated site, they move on. You
              lose the job before you even had a chance.
            </p>
          </BlurIn>
          <BlurIn delay={0.25}>
            <p className="text-[#0c0b1e]/60 text-sm leading-relaxed">
              Grady Digital builds your website and runs your Google presence,
              posts and cross-posts to social, brings in better reviews, and
              handles your SEO so you rank higher and get found by people
              already searching for what you do. Everything a local business
              needs to turn high-intent searches into paying customers — not
              window shoppers.
            </p>
          </BlurIn>
          <BlurIn delay={0.3}>
            <p className="text-[#0c0b1e]/60 text-sm leading-relaxed">
              You work directly with Luke — no account managers, no outsourcing,
              no runaround. Just a software engineer who builds websites that
              actually work.
            </p>
          </BlurIn>
        </div>

        <BlurIn delay={0.35}>
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-[#0c0b1e]/80">
              <ShieldOff className="w-4 h-4 text-accent" />
              No Contracts — month-to-month
            </div>
            <div className="flex items-center gap-2 text-sm text-[#0c0b1e]/80">
              <Clock className="w-4 h-4 text-[#0e8090]" />
              Live in 10 business days, or your next month is free
            </div>
            <div className="flex items-center gap-2 text-sm text-[#0c0b1e]/80">
              <Zap className="w-4 h-4 text-[#b45309]" />
              Fully managed — we handle everything
            </div>
          </div>
        </BlurIn>

        <BlurIn delay={0.4}>
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-6 hover:gap-2 transition-all"
          >
            Learn more about us &rarr;
          </Link>
        </BlurIn>
      </div>
    </SectionWrapper>
  );
}
