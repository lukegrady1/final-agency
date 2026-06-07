"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import BlurIn from "../BlurIn";

const features = [
  "A fast custom website that looks great on phones and turns visitors into calls",
  "Your Google listing set up, posted to weekly, and shared to Instagram, Facebook, and YouTube",
  "More 5-star reviews, replies written for you, and old unfair ones challenged",
  "Ongoing SEO so you keep showing up when people search Google for what you do",
  "An all-in-one inbox where every call, text, and lead lands in one place",
  "Hosting, updates, security, and speed, all handled for you",
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
              The Growth System
            </h3>
            <p className="text-white/60 text-sm mt-2 leading-relaxed max-w-sm mx-auto">
              Everything you need to get found on Google, win the trust of
              customers, and turn clicks into calls. Built and managed for you.
            </p>
          </div>

          <div className="text-center mt-8">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl lg:text-6xl font-medium text-white">
                $297
              </span>
              <span className="text-white/50 text-base">/month</span>
            </div>
            <div className="text-accent-light text-xs mt-2 font-medium">
              No setup fee · Month-to-month · Cancel anytime
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

          <div className="mt-8 rounded-xl bg-accent/10 border border-accent/20 p-4">
            <p className="text-white/80 text-sm leading-relaxed">
              <span className="text-accent-light font-medium">
                Live in 10 business days, or your next month is free.
              </span>{" "}
              No big setup fee. Your first month gets your site built and live.
              If I don&apos;t have you live within 10 business days, your next
              month is on me.
            </p>
          </div>

          <Link
            href="#book"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200"
          >
            Book a Free Call
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-center text-white/50 text-xs leading-relaxed mt-5">
            The low monthly rate is the point. Agencies that charge thousands
            upfront get paid no matter what happens next. I only keep getting
            paid if you stay, which means I&apos;m earning it every month
            instead of disappearing after one big check. Your results and my
            paycheck are the same thing.
          </p>
        </div>
      </BlurIn>
    </div>
  );
}
