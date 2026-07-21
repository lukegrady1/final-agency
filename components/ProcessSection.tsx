"use client";

import SectionWrapper from "./SectionWrapper";
import { StaggerParent, StaggerChild } from "./StaggerParent";
import BlurIn from "./BlurIn";

const steps = [
  {
    number: "01",
    title: "Book a Call",
    body: "We learn about your business, your goals, and what you need from your website.",
  },
  {
    number: "02",
    title: "We Design & Build",
    body: "Custom site built around your brand. You review it and request any changes before launch.",
  },
  {
    number: "03",
    title: "Launch",
    body: "Your site goes live after final testing and a smooth handoff — no tech headaches on your end.",
  },
  {
    number: "04",
    title: "We Manage It",
    body: "Hosting, updates, speed, and security — all handled. Need a change? Just ask.",
  },
];

export default function ProcessSection() {
  return (
    <SectionWrapper>
      <div className="text-center mb-10 md:mb-16">
        <BlurIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
            From first call to launch, fully handled
          </h2>
        </BlurIn>
      </div>
      {/* Mobile: compact number-beside-text rows so all four steps fit one
          screen. Desktop: the original four-column cards. */}
      <StaggerParent className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-6">
        {steps.map((step, i) => (
          <StaggerChild key={step.number} className="relative bg-white border border-black/[0.08] rounded-2xl p-4 md:p-6 shadow-sm flex items-start gap-4 md:block">
            <div className="text-3xl md:text-5xl leading-none font-medium text-transparent bg-clip-text bg-gradient-to-br from-black/[0.12] to-black/[0.04] shrink-0">
              {step.number}
            </div>
            <div>
              <h3 className="text-base md:text-lg font-medium text-[#0c0b1e] md:mt-2">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-[#0c0b1e]/60 mt-1 md:mt-2">{step.body}</p>
            </div>
            {i < steps.length - 1 && (
              <span className="hidden md:block absolute top-6 -right-3 text-2xl text-[#0c0b1e]/20">
                &rarr;
              </span>
            )}
          </StaggerChild>
        ))}
      </StaggerParent>
    </SectionWrapper>
  );
}
