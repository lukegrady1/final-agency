"use client";

import Link from "next/link";
import { ShieldOff, Zap, PhoneCall } from "lucide-react";
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
            We build the systems. You get the customers.
          </h2>
        </BlurIn>
        <div className="mt-6 space-y-4">
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-sm leading-relaxed">
              Most local businesses are losing leads every day — missed calls
              that go to voicemail, website visitors who leave without booking,
              and old contacts sitting forgotten in a spreadsheet.
            </p>
          </BlurIn>
          <BlurIn delay={0.25}>
            <p className="text-white/60 text-sm leading-relaxed">
              Grady Digital fixes that. We build AI-powered systems that answer
              your phone, follow up with leads in seconds, and turn your
              website into a 24/7 booking machine. No extra staff. No manual
              work.
            </p>
          </BlurIn>
          <BlurIn delay={0.3}>
            <p className="text-white/60 text-sm leading-relaxed">
              We work with HVAC companies, contractors, salons, restaurants,
              and service businesses across the country. If your business
              depends on phone calls and appointments, we can help you get
              more of both.
            </p>
          </BlurIn>
        </div>

        <BlurIn delay={0.35}>
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <ShieldOff className="w-4 h-4 text-accent-light" />
              No Contracts — cancel anytime, month-to-month
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Zap className="w-4 h-4 text-accent-light" />
              Live in days — most automations running in under a week
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <PhoneCall className="w-4 h-4 text-accent-light" />
              Zero missed calls — AI answers your phone 24/7/365
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
