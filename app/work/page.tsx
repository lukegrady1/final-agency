import type { Metadata } from "next";
import SectionWrapper from "@/components/SectionWrapper";
import BlurIn from "@/components/BlurIn";
import WorkShowcase from "@/components/WorkShowcase";
import CTABanner from "@/components/CTABanner";
import AuroraBackdrop from "@/components/grow/AuroraBackdrop";

export const metadata: Metadata = {
  title: "Our Work — Local Business Websites We've Built",
  description:
    "Real websites we've designed and built for local service businesses. See before-and-after results and live client sites.",
  keywords: [
    "local business website portfolio",
    "small business web design examples",
    "service business websites",
    "website redesign before and after",
    "local SEO results",
    "Grady Digital work",
  ],
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <main className="bg-transparent text-[#0c0b1e] overflow-x-clip">
      <section className="relative pt-40 pb-16 overflow-hidden grain-overlay">
        <AuroraBackdrop tone="indigo-cyan" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(12,11,30,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(12,11,30,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(70% 60% at 50% 20%, black, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(70% 60% at 50% 20%, black, transparent 80%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <BlurIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-[#0c0b1e] mt-6">
              Local business websites{" "}
              <span className="grow-gradient-text font-display italic">
                we&apos;ve built
              </span>
            </h1>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-[#0c0b1e]/60 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              Real websites we&apos;ve built for real businesses. Pick a site
              below to take a closer look.
            </p>
          </BlurIn>
        </div>
      </section>

      <SectionWrapper className="!pt-0">
        <BlurIn>
          <WorkShowcase />
        </BlurIn>
      </SectionWrapper>

      <CTABanner />
    </main>
  );
}
