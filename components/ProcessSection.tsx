"use client";

import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
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
    body: "Your site goes live within two weeks. Fast, mobile-friendly, and ready to convert.",
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
      <div className="text-center mb-16">
        <BlurIn>
          <SectionLabel>How It Works</SectionLabel>
        </BlurIn>
        <BlurIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
            From call to launch in two weeks
          </h2>
        </BlurIn>
      </div>
      <StaggerParent className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <StaggerChild key={step.number} className="relative bg-card border border-card-border rounded-2xl p-6">
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
