"use client";

import { CheckCircle2 } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import type { Industry } from "@/data";

interface Type4ContentProps {
  industry: Industry;
}

export default function Type4Content({ industry }: Type4ContentProps) {
  return (
    <section className="py-24 lg:py-32 bg-white/[0.02] border-y border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp>
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
            The Digital Marketing Challenges {industry.name} Face
          </h2>
          <p className="text-white/60 text-base leading-relaxed max-w-3xl mb-8">
            We understand the {industry.shortName.toLowerCase()} industry:
            seasonal demand swings, reputation-driven sales cycles, and the
            challenge of competing against bigger companies with bigger marketing
            budgets. Here&apos;s what we hear most:
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <ul className="space-y-3 max-w-2xl">
            {industry.painPoints.map((point, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-white/70 text-base"
              >
                <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                {point}
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
