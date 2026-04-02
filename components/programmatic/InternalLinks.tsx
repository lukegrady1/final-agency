"use client";

import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import FadeUp from "@/components/FadeUp";

interface LinkItem {
  label: string;
  href: string;
}

interface InternalLinksProps {
  nearbyCities?: LinkItem[];
  relatedPages?: LinkItem[];
}

export default function InternalLinks({
  nearbyCities,
  relatedPages,
}: InternalLinksProps) {
  if (!nearbyCities?.length && !relatedPages?.length) return null;

  return (
    <section className="py-16 lg:py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {nearbyCities && nearbyCities.length > 0 && (
          <FadeUp>
            <div className="mb-12">
              <h3 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-light" />
                Also Serving Nearby Cities
              </h3>
              <div className="flex flex-wrap gap-3">
                {nearbyCities.map((city) => (
                  <Link
                    key={city.href}
                    href={city.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 hover:text-white hover:border-white/20 transition-colors"
                  >
                    {city.label}
                  </Link>
                ))}
              </div>
            </div>
          </FadeUp>
        )}
        {relatedPages && relatedPages.length > 0 && (
          <FadeUp delay={0.1}>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">
                Related Services
              </h3>
              <div className="flex flex-col gap-2">
                {relatedPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="inline-flex items-center gap-1.5 text-sm text-accent-light hover:text-white transition-colors"
                  >
                    {page.label}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </FadeUp>
        )}
      </div>
    </section>
  );
}
