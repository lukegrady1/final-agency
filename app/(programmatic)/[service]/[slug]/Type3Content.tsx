"use client";

import { CheckCircle2 } from "lucide-react";
import BlurIn from "@/components/BlurIn";
import FadeUp from "@/components/FadeUp";
import type { Service, Industry } from "@/data";

interface Type3ContentProps {
  service: Service;
  industry: Industry;
}

export default function Type3Content({
  service,
  industry,
}: Type3ContentProps) {
  return (
    <>
      {/* Pain Points */}
      <section className="py-24 lg:py-32 bg-white/[0.02] border-y border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              Common Challenges {industry.name} Face Online
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <ul className="space-y-3 max-w-2xl mt-6">
              {industry.painPoints.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-white/70 text-base"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              How {service.name} Works for {industry.name}
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl mb-8">
              {service.description} Here&apos;s how we apply{" "}
              {service.name.toLowerCase()} specifically for{" "}
              {industry.name.toLowerCase()}:
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
          <BlurIn delay={0.2}>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl">
              We currently serve {industry.name.toLowerCase()} across Central
              Massachusetts, Greater Boston, Southern New Hampshire, Rhode
              Island, and Connecticut.
            </p>
          </BlurIn>
        </div>
      </section>
    </>
  );
}
