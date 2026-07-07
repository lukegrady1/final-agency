"use client";

import { useSearchParams } from "next/navigation";
import { CalendarCheck } from "lucide-react";
import BlurIn from "../BlurIn";
import AuroraBackdrop from "../grow/AuroraBackdrop";

function formatBookedTime(raw: string | null): string | null {
  if (!raw) return null;
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function BookedHero() {
  const params = useSearchParams();
  const firstName = params.get("invitee_first_name")?.trim() || null;
  const bookedTime = formatBookedTime(params.get("event_start_time"));

  return (
    <section className="relative pt-24 lg:pt-28 pb-10 lg:pb-12 overflow-hidden grain-overlay">
      <AuroraBackdrop tone="indigo-cyan" />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <BlurIn delay={0.15}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight lg:leading-[1.1] text-[#0c0b1e] tracking-tight mt-6">
            You&apos;re Booked.
            <br />
            Let&apos;s Build Your{" "}
            <span className="grow-gradient-text font-display italic">
              Roadmap.
            </span>
          </h1>
        </BlurIn>
        <BlurIn delay={0.3}>
          <p className="text-[#0c0b1e]/70 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
            Your Roadmap Call is locked in{firstName ? `, ${firstName}` : ""}. On
            this call I&apos;ll show you exactly how I&apos;ll get your business to
            the top of Google and turn those searches into booked jobs. Take 3
            minutes to run through the steps below so we hit the ground running.{" "}
            <span className="text-[#0c0b1e] font-medium">
              By the end, you&apos;ll have a clear plan to own your local market —
              and everything I&apos;d build to make it happen.
            </span>
          </p>
        </BlurIn>
        {bookedTime && (
          <BlurIn delay={0.4}>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-[#0c0b1e]/70 mt-8 shadow-sm">
              <CalendarCheck className="w-4 h-4 text-accent" />
              You&apos;re booked for {bookedTime}
            </div>
          </BlurIn>
        )}
      </div>
    </section>
  );
}
