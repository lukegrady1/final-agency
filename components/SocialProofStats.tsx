"use client";

import { StaggerParent, StaggerChild } from "./StaggerParent";

const stats = [
  { value: "$297/mo", label: "everything included" },
  { value: "10 days", label: "to live, or your next month is free" },
  { value: "100%", label: "custom, no templates" },
  { value: "Reviews + SEO", label: "and social, handled monthly" },
  { value: "1 Inbox", label: "all your leads in one place" },
];

export default function SocialProofStats() {
  return (
    <section className="bg-white/[0.02] border-y border-white/[0.08] py-12 lg:py-16">
      {/* Mobile: single-line auto-sliding ticker */}
      <div className="md:hidden overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 gap-10 pr-10"
              aria-hidden={group === 1}
            >
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="flex flex-col items-center text-center shrink-0"
                >
                  <span className="text-3xl font-medium text-white whitespace-nowrap">
                    {stat.value}
                  </span>
                  <span className="text-sm text-white/60 mt-1 whitespace-nowrap">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: centered row */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 lg:px-12">
        <StaggerParent className="flex flex-wrap items-start justify-center gap-8 lg:gap-12">
          {stats.map((stat) => (
            <StaggerChild
              key={stat.value}
              className="flex flex-col items-center text-center"
            >
              <span className="text-3xl lg:text-4xl font-medium text-white">
                {stat.value}
              </span>
              <span className="text-sm text-white/60 mt-1 max-w-[140px]">
                {stat.label}
              </span>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
