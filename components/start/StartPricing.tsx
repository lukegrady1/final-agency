"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import BlurIn from "../BlurIn";

const features = [
  "Custom conversion website",
  "Mobile-first, fast load times",
  "Google Business Profile optimization & SEO",
  "Hosting + SSL + monthly updates",
  "Lead-capture forms + email alerts",
  "CRM access included — manage leads, calls, and messages",
];

export default function StartPricing() {
  return (
    <div className="max-w-xl mx-auto">
      <BlurIn delay={0.1}>
        <div className="relative rounded-2xl p-8 lg:p-10 bg-gradient-to-b from-accent/10 to-card border border-accent/40">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent text-white text-xs font-medium px-3 py-1">
            One simple plan
          </span>

          <div className="text-center">
            <h3 className="text-xl font-medium text-white">
              The Grady Digital Growth Package
            </h3>
            <p className="text-white/60 text-sm mt-2 leading-relaxed max-w-sm mx-auto">
              Everything you need to get found on Google and turn visitors
              into paying clients — built and managed for you.
            </p>
          </div>

          <div className="text-center mt-8">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl lg:text-6xl font-medium text-white">
                $197
              </span>
              <span className="text-white/50 text-base">/month</span>
            </div>
            <div className="text-accent-light text-xs mt-2 font-medium">
              One-time $1,000 setup fee · Month-to-month · Cancel anytime
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
            No long-term contracts. Cancel anytime.
          </p>
        </div>
      </BlurIn>
    </div>
  );
}
