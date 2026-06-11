"use client";

import { useSearchParams } from "next/navigation";
import { CalendarCheck } from "lucide-react";
import BlurIn from "../BlurIn";

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
    <section className="relative pt-24 lg:pt-28 pb-10 lg:pb-12 overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(108,106,246,0.20) 0%, transparent 70%)",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <BlurIn>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-sm px-4 py-1.5 text-xs text-accent-light font-medium">
            <CalendarCheck className="w-3.5 h-3.5" />
            Your Roadmap Call is Confirmed
          </span>
        </BlurIn>
        <BlurIn delay={0.15}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight lg:leading-[1.1] text-white mt-6">
            You&apos;re Booked.
            <br />
            Let&apos;s Build Your{" "}
            <span className="font-display italic text-accent-light">
              Roadmap.
            </span>
          </h1>
        </BlurIn>
        <BlurIn delay={0.3}>
          <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
            Your Roadmap Call is locked in{firstName ? `, ${firstName}` : ""}. On
            this call I&apos;ll show you exactly how I&apos;ll get your business to
            the top of Google and turn those searches into booked jobs. Take 3
            minutes to run through the steps below so we hit the ground running.{" "}
            <span className="text-white font-medium">
              By the end, you&apos;ll have a clear plan to own your local market —
              and everything I&apos;d build to make it happen.
            </span>
          </p>
        </BlurIn>
        {bookedTime && (
          <BlurIn delay={0.4}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/80 mt-8">
              <CalendarCheck className="w-4 h-4 text-accent-light" />
              You&apos;re booked for {bookedTime}
            </div>
          </BlurIn>
        )}
      </div>
    </section>
  );
}
