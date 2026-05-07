"use client";

import { StaggerParent, StaggerChild } from "./StaggerParent";

const stats = [
  { value: "$97", label: "per month, fully managed" },
  { value: "2 weeks", label: "from call to launch" },
  { value: "0", label: "contracts or setup fees" },
  { value: "100%", label: "custom — no templates" },
  { value: "24/7", label: "hosting, updates, and support" },
];

export default function SocialProofStats() {
  return (
    <section className="bg-white/[0.02] border-y border-white/[0.08] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
