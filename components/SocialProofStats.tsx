"use client";

import { StaggerParent, StaggerChild } from "./StaggerParent";

const stats = [
  { value: "From $97/mo", label: "no setup fee, cancel anytime" },
  { value: "10 days", label: "to live, or your next month is free" },
  { value: "100%", label: "custom, no templates" },
  { value: "Reviews + SEO", label: "and social, handled monthly" },
  { value: "1 Inbox", label: "all your leads in one place" },
];

export default function SocialProofStats() {
  return (
    <section className="hidden md:block bg-white/50 backdrop-blur-sm border-y border-black/10 py-12 lg:py-16">
      {/* Desktop only — hidden on mobile. */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <StaggerParent className="flex flex-wrap items-start justify-center gap-x-8 gap-y-7 sm:gap-x-10 lg:gap-x-14">
          {stats.map((stat) => (
            <StaggerChild
              key={stat.value}
              className="flex flex-col items-center text-center"
            >
              <span className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#0c0b1e] whitespace-nowrap">
                {stat.value}
              </span>
              <span className="text-sm text-[#0c0b1e]/60 mt-1 max-w-[140px]">
                {stat.label}
              </span>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
