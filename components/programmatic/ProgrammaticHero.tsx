"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlurIn from "@/components/BlurIn";
import SectionLabel from "@/components/SectionLabel";
import Breadcrumbs from "./Breadcrumbs";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ProgrammaticHeroProps {
  label: string;
  h1: string;
  subheadline: string;
  trustBar: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function ProgrammaticHero({
  label,
  h1,
  subheadline,
  trustBar,
  breadcrumbs,
}: ProgrammaticHeroProps) {
  return (
    <section className="pt-36 pb-16 lg:pt-44 lg:pb-24 relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(108,106,246,0.2) 0%, transparent 60%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <BlurIn>
          <Breadcrumbs items={breadcrumbs} />
        </BlurIn>
        <div className="mt-8">
          <BlurIn delay={0.05}>
            <SectionLabel>{label}</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mt-6 leading-tight lg:leading-[1.2]">
              {h1}
            </h1>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mt-6">
              {subheadline}
            </p>
          </BlurIn>
          <BlurIn delay={0.3}>
            <div className="flex items-center gap-4 flex-wrap mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200"
              >
                Get a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </BlurIn>
          <BlurIn delay={0.35}>
            <p className="text-white/40 text-sm mt-6">{trustBar}</p>
          </BlurIn>
        </div>
      </div>
    </section>
  );
}
