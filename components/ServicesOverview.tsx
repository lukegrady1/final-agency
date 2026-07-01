"use client";

import Link from "next/link";
import {
  Paintbrush,
  MapPin,
  Star,
  TrendingUp,
  MessageSquare,
  UserRound,
} from "lucide-react";
import type { ComponentType } from "react";
import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import BlurIn from "./BlurIn";
import { StaggerParent, StaggerChild } from "./StaggerParent";
import {
  capabilities,
  type CapabilityIcon,
  type CapabilityPlanTag,
} from "@/lib/plans";

const iconMap: Record<
  CapabilityIcon,
  ComponentType<{ className?: string }>
> = {
  website: Paintbrush,
  inbox: MessageSquare,
  reviews: Star,
  "google-social": MapPin,
  seo: TrendingUp,
  luke: UserRound,
};

// Chip color per capability, cycled for visual variety.
const chipStyles = [
  "border-accent/20 bg-accent/10 text-accent",
  "border-cyan/30 bg-cyan/10 text-[#0e8090]",
  "border-amber/30 bg-amber/10 text-[#b45309]",
  "border-violet/30 bg-violet/10 text-[#8b3fd6]",
  "border-accent/20 bg-accent/10 text-accent",
  "border-cyan/30 bg-cyan/10 text-[#0e8090]",
];

function planTagClass(tag: CapabilityPlanTag) {
  if (tag === "All plans") return "border-black/15 text-[#0c0b1e]/55";
  if (tag === "The Reputation System")
    return "border-accent/40 bg-accent/10 text-accent";
  return "border-violet/40 bg-violet/10 text-[#8b3fd6]";
}

export default function ServicesOverview() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <BlurIn>
          <SectionLabel>What We Do</SectionLabel>
        </BlurIn>
        <BlurIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
            One system to{" "}
            <span className="grow-gradient-text font-display italic">
              grow your business
            </span>
          </h2>
        </BlurIn>
        <BlurIn delay={0.2}>
          <p className="text-[#0c0b1e]/60 text-lg leading-relaxed max-w-2xl mx-auto mt-4">
            Everything below is built and managed for you. It comes in three
            simple plans — start with a website at $97 a month, add the review
            engine at $147, or run the full Growth System at $297. Each tag
            shows which plan a piece belongs to.
          </p>
        </BlurIn>
      </div>

      <StaggerParent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {capabilities.map((cap, i) => {
          const Icon = iconMap[cap.iconKey];
          return (
            <StaggerChild
              key={cap.title}
              className="bg-white border border-black/[0.08] rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-3">
                <div
                  className={`grid place-items-center w-11 h-11 rounded-xl border ${chipStyles[i]}`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium border ${planTagClass(
                    cap.planTag,
                  )}`}
                >
                  {cap.planTag}
                </span>
              </div>
              <h3 className="text-lg font-medium text-[#0c0b1e] mt-4 mb-2">
                {cap.title}
              </h3>
              <p className="text-[#0c0b1e]/60 text-sm leading-relaxed">
                {cap.body}
              </p>
            </StaggerChild>
          );
        })}
      </StaggerParent>

      <div className="text-center mt-12">
        <Link
          href="#plans"
          className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all"
        >
          See the three plans &rarr;
        </Link>
      </div>
    </SectionWrapper>
  );
}
