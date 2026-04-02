"use client";

import { CheckCircle2 } from "lucide-react";
import FadeUp from "@/components/FadeUp";
import type { Service, City } from "@/data";

interface Type2ContentProps {
  service: Service;
  city: City;
}

export default function Type2Content({ service, city }: Type2ContentProps) {
  return (
    <>
      {/* Service Overview */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              {service.name} for {city.name} Businesses
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl mb-8">
              {service.description} Here&apos;s what&apos;s included when you
              work with Grady Digital on {service.name.toLowerCase()} in{" "}
              {city.name}:
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <ul className="space-y-3 max-w-2xl mb-8">
              {service.includes.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/70 text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl">
              {city.uniqueSentence}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Why Grady */}
      <section className="py-24 lg:py-32 bg-white/[0.02] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-10">
              Why {city.name} Businesses Choose Grady Digital
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <FadeUp delay={0.05}>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Local service business focus
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We work exclusively with trades, home services, and local
                  businesses. Our {service.name.toLowerCase()} strategies are
                  built for companies like yours.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Based in Central Massachusetts
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  We&apos;re in Leominster, MA — close to {city.name}. We
                  understand the {city.county} market and what local customers
                  respond to.
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  No long-term contracts
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Month-to-month. If you&apos;re not seeing results, you&apos;re
                  not locked in. We earn your business every month.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
