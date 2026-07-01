"use client";

import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import BlurIn from "./BlurIn";
import FAQAccordion from "./FAQAccordion";

export default function HomeFAQ() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <BlurIn>
          <SectionLabel>FAQ</SectionLabel>
        </BlurIn>
        <BlurIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight mt-4">
            Common questions from business owners{" "}
            <span className="grow-gradient-text font-display italic">like you</span>
          </h2>
        </BlurIn>
      </div>
      <FAQAccordion />
    </SectionWrapper>
  );
}
