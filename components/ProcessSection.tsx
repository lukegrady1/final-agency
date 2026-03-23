"use client";

import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import { StaggerParent, StaggerChild } from "./StaggerParent";
import BlurIn from "./BlurIn";

const steps = [
  {
    number: "01",
    title: "Audit",
    body: "We review your website, Google presence, and lead capture process. You see exactly where you're losing customers.",
  },
  {
    number: "02",
    title: "Build",
    body: "We set up your AI agents, website, and automations — starting with whatever drives the most leads fastest.",
  },
  {
    number: "03",
    title: "Launch",
    body: "Everything goes live after thorough testing. Most automations are running within 5–7 days.",
  },
  {
    number: "04",
    title: "Grow",
    body: "We track real results — leads, calls, bookings — and keep tuning your system every month.",
  },
];

export default function ProcessSection() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <BlurIn>
          <SectionLabel>Our Process</SectionLabel>
        </BlurIn>
        <BlurIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
            From audit to booked jobs in weeks, not months
          </h2>
        </BlurIn>
      </div>
      <StaggerParent className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <StaggerChild key={step.number} className="relative liquid-glass p-6">
            <div className="text-5xl font-medium text-white/10">
              {step.number}
            </div>
            <h3 className="text-lg font-medium text-white mt-2">
              {step.title}
            </h3>
            <p className="text-sm text-white/60 mt-2">{step.body}</p>
            {i < steps.length - 1 && (
              <span className="hidden md:block absolute top-6 -right-3 text-2xl text-white/20">
                &rarr;
              </span>
            )}
          </StaggerChild>
        ))}
      </StaggerParent>
    </SectionWrapper>
  );
}
