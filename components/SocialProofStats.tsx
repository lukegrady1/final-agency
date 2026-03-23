"use client";

import { StaggerParent, StaggerChild } from "./StaggerParent";

const stats = [
  { value: "<60s", label: "average lead response time with our automations" },
  { value: "0", label: "missed calls when our AI receptionist is on the line" },
  { value: "2x", label: "more booked jobs within 90 days on average" },
  { value: "24/7", label: "your AI answers calls, chats, and follows up" },
  { value: "5–7 days", label: "to get your first automation live" },
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
        <p className="text-white/40 text-xs mt-6 text-center">
          Results from real client engagements across service businesses
        </p>
      </div>
    </section>
  );
}
