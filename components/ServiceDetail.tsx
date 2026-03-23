"use client";

import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import BlurIn from "./BlurIn";

interface ServiceDetailProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
  visual: string;
  reversed?: boolean;
}

export default function ServiceDetail({
  icon: Icon,
  title,
  description,
  bullets,
  visual,
  reversed,
}: ServiceDetailProps) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        reversed ? "lg:direction-rtl" : ""
      }`}
      style={reversed ? { direction: "rtl" } : undefined}
    >
      <div style={reversed ? { direction: "ltr" } : undefined}>
        <BlurIn>
          <div className="rounded-xl bg-accent/10 p-2 w-fit">
            <Icon className="w-8 h-8 text-accent-light" />
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-white mt-4">
            {title}
          </h2>
          <p className="text-white/60 text-base leading-relaxed mt-3">
            {description}
          </p>
          <ul className="mt-4 space-y-2">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-2 text-sm text-white/60"
              >
                <span className="text-accent-light mt-0.5">&#x2022;</span>
                {bullet}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200 mt-6"
          >
            Get a free audit
            <ArrowRight className="w-4 h-4" />
          </Link>
        </BlurIn>
      </div>

      {/* Decorative visual panel */}
      <div style={reversed ? { direction: "ltr" } : undefined}>
        <BlurIn delay={0.2}>
          <ServiceVisual type={visual} />
        </BlurIn>
      </div>
    </div>
  );
}

function ServiceVisual({ type }: { type: string }) {
  const visuals: Record<string, React.ReactNode> = {
    chat: (
      <div className="space-y-3">
        <div className="bg-white/10 rounded-lg px-4 py-2 text-sm text-white/70 w-3/4">
          Hi! How can I help you today?
        </div>
        <div className="bg-accent/20 rounded-lg px-4 py-2 text-sm text-white/70 w-3/4 ml-auto">
          I&apos;d like to book an appointment
        </div>
        <div className="bg-white/10 rounded-lg px-4 py-2 text-sm text-white/70 w-3/4">
          I can help with that! What day works best?
        </div>
      </div>
    ),
    voice: (
      <div className="flex items-center justify-center gap-1 h-24">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="w-1 bg-accent-light/40 rounded-full"
            style={{
              height: `${20 + Math.sin(i * 0.6) * 30 + Math.cos(i * 0.3) * 20}px`,
            }}
          />
        ))}
      </div>
    ),
    workflow: (
      <div className="space-y-4">
        {["Lead captured", "Auto follow-up sent", "Appointment booked"].map(
          (step, i) => (
            <div key={step} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-xs text-accent-light font-medium">
                {i + 1}
              </div>
              <div className="flex-1 bg-white/5 rounded-lg px-4 py-2 text-sm text-white/60">
                {step}
              </div>
            </div>
          )
        )}
      </div>
    ),
    web: (
      <div className="space-y-2">
        <div className="h-3 bg-white/10 rounded w-full" />
        <div className="h-20 bg-white/5 rounded" />
        <div className="grid grid-cols-3 gap-2">
          <div className="h-12 bg-white/5 rounded" />
          <div className="h-12 bg-white/5 rounded" />
          <div className="h-12 bg-white/5 rounded" />
        </div>
      </div>
    ),
    seo: (
      <div className="space-y-3">
        {[1, 2, 3].map((pos) => (
          <div
            key={pos}
            className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3"
          >
            <span className="text-accent-light font-medium text-sm">
              #{pos}
            </span>
            <div className="flex-1">
              <div className="h-2 bg-white/10 rounded w-3/4" />
              <div className="h-1.5 bg-white/5 rounded w-1/2 mt-1" />
            </div>
          </div>
        ))}
      </div>
    ),
    analytics: (
      <div className="flex items-end gap-2 h-32 justify-center">
        {[40, 55, 35, 70, 60, 85, 75, 90].map((h, i) => (
          <div
            key={i}
            className="w-6 bg-accent/30 rounded-t"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    ),
  };

  return (
    <div className="bg-card border border-card-border rounded-2xl p-8">
      {visuals[type] ?? null}
    </div>
  );
}
