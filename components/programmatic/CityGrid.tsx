"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { StaggerParent, StaggerChild } from "@/components/StaggerParent";

interface CityLink {
  name: string;
  state: string;
  href: string;
}

interface CityGridProps {
  heading: string;
  cities: CityLink[];
}

export default function CityGrid({ heading, cities }: CityGridProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-medium text-white mb-10">
          {heading}
        </h2>
        <StaggerParent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cities.map((city) => (
            <StaggerChild key={city.href}>
              <Link
                href={city.href}
                className="flex items-center gap-2 rounded-2xl bg-card border border-card-border p-4 text-sm text-white/70 hover:text-white hover:border-white/20 transition-colors"
              >
                <MapPin className="w-4 h-4 text-accent-light shrink-0" />
                {city.name}, {city.state}
              </Link>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
