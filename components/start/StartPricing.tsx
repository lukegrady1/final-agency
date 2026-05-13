"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import BlurIn from "../BlurIn";

const features = [
  "Custom conversion website",
  "Mobile-first, fast load times",
  "Hosting + SSL + monthly updates",
  "Basic SEO",
  "Lead-capture form + email alerts",
  "Mobile app to manage leads, calls, and messages in one place",
];

export default function StartPricing() {
  const [annual, setAnnual] = useState(false);

  const price = annual ? "$970" : "$97";
  const cadence = annual ? "/year" : "/month";
  const savings = annual ? "Save $194 vs. monthly" : "Billed monthly";

  return (
    <div className="max-w-xl mx-auto">
      <BlurIn>
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                !annual
                  ? "bg-foreground text-background"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 inline-flex items-center gap-2 ${
                annual
                  ? "bg-foreground text-background"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Annual
              <span
                className={`text-xs rounded-full px-2 py-0.5 ${
                  annual
                    ? "bg-background/10 text-background"
                    : "bg-accent/20 text-accent-light"
                }`}
              >
                2 mo free
              </span>
            </button>
          </div>
        </div>
      </BlurIn>

      <BlurIn delay={0.1}>
        <div className="relative rounded-2xl p-8 lg:p-10 bg-gradient-to-b from-accent/10 to-card border border-accent/40">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent text-white text-xs font-medium px-3 py-1">
            One simple plan
          </span>

          <div className="text-center">
            <h3 className="text-xl font-medium text-white">
              Grady Digital Website
            </h3>
            <p className="text-white/60 text-sm mt-2 leading-relaxed max-w-sm mx-auto">
              Everything you need to look the part on Google, capture leads,
              and grow — built and managed for you.
            </p>
          </div>

          <div className="text-center mt-8">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl lg:text-6xl font-medium text-white">
                {price}
              </span>
              <span className="text-white/50 text-base">{cadence}</span>
            </div>
            <div className="text-accent-light text-xs mt-2 font-medium">
              {savings}
            </div>
          </div>

          <ul className="mt-8 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-accent-light" />
                <span className="text-white/80 text-sm leading-relaxed">
                  {f}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200"
          >
            Book a Free Call
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-center text-white/40 text-xs mt-4">
            No contracts. Cancel anytime.
          </p>
        </div>
      </BlurIn>
    </div>
  );
}
