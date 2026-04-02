"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StaggerParent, StaggerChild } from "@/components/StaggerParent";

interface ServiceLink {
  name: string;
  description: string;
  href: string;
}

interface ServiceGridProps {
  heading: string;
  services: ServiceLink[];
}

export default function ServiceGrid({ heading, services }: ServiceGridProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-10">
          {heading}
        </h2>
        <StaggerParent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <StaggerChild key={service.href}>
              <Link
                href={service.href}
                className="block rounded-2xl bg-card border border-card-border p-6 hover:border-white/20 transition-colors group"
              >
                <h3 className="text-lg font-medium text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm text-accent-light group-hover:text-white transition-colors">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
