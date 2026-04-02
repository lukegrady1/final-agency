"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerParent, StaggerChild } from "@/components/StaggerParent";

interface IndustryLink {
  name: string;
  href: string;
}

interface IndustryGridProps {
  heading: string;
  industries: IndustryLink[];
}

export default function IndustryGrid({
  heading,
  industries,
}: IndustryGridProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-10">
          {heading}
        </h2>
        <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <StaggerChild key={industry.href}>
              <Link
                href={industry.href}
                className="flex items-center justify-between rounded-2xl bg-card border border-card-border p-6 hover:border-white/20 transition-colors group"
              >
                <span className="text-lg font-medium text-white">
                  {industry.name}
                </span>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-accent-light transition-colors" />
              </Link>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
