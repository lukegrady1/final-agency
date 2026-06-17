"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import BlurIn from "../BlurIn";

const websiteFeatures = [
  "A fast custom website that looks great on phones and turns visitors into calls",
  "An all-in-one inbox where every call, text, and lead lands in one place",
  "Hosting, updates, security, and speed, all handled for you",
];

const growthFeatures = [
  "Your Google listing set up, posted to weekly, and shared to Instagram, Facebook, and YouTube",
  "More 5-star reviews, replies written for you, and old unfair ones challenged",
  "Ongoing SEO so you keep showing up when people search Google for what you do",
];

export default function StartPricing() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        {/* WEBSITE PLAN */}
        <BlurIn delay={0.1}>
          <div className="relative h-full flex flex-col rounded-2xl p-8 lg:p-10 bg-card border border-card-border">
            <div>
              <h3 className="text-xl font-medium text-white">Website</h3>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">
                A fast, professional website built and managed for you, with one
                inbox for every lead. Perfect if you just need to look great
                online and never miss a call.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl lg:text-6xl font-medium text-white">
                  $97
                </span>
                <span className="text-white/50 text-base">/month</span>
              </div>
              <div className="text-white/50 text-xs mt-2 font-medium">
                No setup fee · Month-to-month · Cancel anytime
              </div>
            </div>

            <ul className="mt-8 space-y-3 flex-1">
              {websiteFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-white/50" />
                  <span className="text-white/80 text-sm leading-relaxed">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="#book"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 bg-white/10 backdrop-blur-sm text-white font-medium text-sm hover:bg-white/20 transition-colors duration-200"
            >
              Book a Free Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </BlurIn>

        {/* GROWTH PLAN — recommended */}
        <BlurIn delay={0.2}>
          <div className="relative h-full flex flex-col rounded-2xl p-8 lg:p-10 bg-gradient-to-b from-accent/10 to-card border border-accent/40">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent text-white text-xs font-medium px-3 py-1 whitespace-nowrap">
              Most popular
            </span>

            <div>
              <h3 className="text-xl font-medium text-white">
                The Growth System
              </h3>
              <p className="text-white/60 text-sm mt-2 leading-relaxed">
                Everything you need to get found on Google, win the trust of
                customers, and turn clicks into calls. Built and managed for you.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl lg:text-6xl font-medium text-white">
                  $297
                </span>
                <span className="text-white/50 text-base">/month</span>
              </div>
              <div className="text-accent-light text-xs mt-2 font-medium">
                No setup fee · Month-to-month · Cancel anytime
              </div>
            </div>

            <ul className="mt-8 space-y-3 flex-1">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 mt-0.5 shrink-0 text-accent-light" />
                <span className="text-white/80 text-sm leading-relaxed font-medium">
                  Everything in Website, plus:
                </span>
              </li>
              {growthFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-accent-light" />
                  <span className="text-white/80 text-sm leading-relaxed">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="#book"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200"
            >
              Book a Free Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </BlurIn>
      </div>

      <BlurIn delay={0.3}>
        <div className="mt-6 rounded-xl bg-accent/10 border border-accent/20 p-4 max-w-3xl mx-auto">
          <p className="text-white/80 text-sm leading-relaxed text-center">
            <span className="text-accent-light font-medium">
              Live in 10 business days, or your next month is free.
            </span>{" "}
            No big setup fee on either plan. Your first month gets your site
            built and live. If I don&apos;t have you live within 10 business
            days, your next month is on me.
          </p>
        </div>
      </BlurIn>

      <BlurIn delay={0.4}>
        <p className="text-center text-white/50 text-xs leading-relaxed mt-6 max-w-2xl mx-auto">
          The low monthly rate is the point. Agencies that charge thousands
          upfront get paid no matter what happens next. I only keep getting paid
          if you stay, which means I&apos;m earning it every month instead of
          disappearing after one big check. Your results and my paycheck are the
          same thing.
        </p>
      </BlurIn>
    </div>
  );
}
