import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionLabel from "@/components/SectionLabel";
import BlurIn from "@/components/BlurIn";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CTABanner from "@/components/CTABanner";

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

const projects = [
  {
    name: "MJP Auto Detailing",
    description:
      "A clean, professional site that showcases services and drives bookings for a mobile auto detailing business.",
    image: "/mjp_after.webp",
    url: "https://mjpautodetailing.com/",
  },
  {
    name: "Reece Electric",
    description:
      "A modern site built to generate estimate requests and establish credibility for an electrical contractor.",
    image: "/reece_after.webp",
    url: "https://reecegroupllc.com/",
  },
  {
    name: "Greater Boston Livery",
    description:
      "A polished site that builds trust and drives ride bookings for a professional car service.",
    image: "/gbl_after.webp",
    url: "https://greaterbostonlivery.com/",
  },
];

export default function WorkPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative pt-40 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(108,106,246,0.18) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <BlurIn>
            <SectionLabel>Our Work</SectionLabel>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white mt-6">
              Local business websites we&apos;ve built
            </h1>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              Real websites we&apos;ve built for real businesses.
            </p>
          </BlurIn>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <BlurIn>
            <div className="bg-card border border-card-border rounded-2xl overflow-hidden">
              <BeforeAfterSlider
                beforeSrc="/white_springs_before.webp"
                afterSrc="/white_springs_after.webp"
                beforeAlt="White Springs website before Grady Digital redesign"
                afterAlt="White Springs website after Grady Digital redesign"
              />
              <div className="p-6">
                <h2 className="text-lg font-medium text-white">
                  White Springs
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mt-2">
                  A complete redesign that transformed an outdated site into a
                  modern, conversion-focused experience. Drag the slider to
                  compare.
                </p>
                <a
                  href="https://whitespringsfl-us.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-accent-light text-sm mt-4 hover:gap-2 transition-all"
                >
                  Visit live site
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </BlurIn>
          <BlurIn delay={0.1}>
            <div className="bg-card border border-card-border rounded-2xl overflow-hidden">
              <BeforeAfterSlider
                beforeSrc="/site_before.webp"
                afterSrc="/site_after.webp"
                beforeAlt="Imagine Construction website before Grady Digital redesign"
                afterAlt="Imagine Construction website after Grady Digital redesign"
              />
              <div className="p-6">
                <h2 className="text-lg font-medium text-white">
                  Imagine Construction
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mt-2">
                  A professional site that generates calls and estimate requests
                  for a growing construction company. Drag the slider to
                  compare.
                </p>
              </div>
            </div>
          </BlurIn>
          {projects.map((project, i) => (
            <BlurIn key={project.name} delay={i * 0.1}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-card border border-card-border rounded-2xl overflow-hidden transition-colors hover:border-white/20"
              >
                <div className="relative aspect-[16/10] bg-[#1a1730]">
                  <Image
                    src={project.image}
                    alt={`${project.name} website by Grady Digital`}
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-medium text-white">
                    {project.name}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed mt-2">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent-light text-sm mt-4 group-hover:gap-2 transition-all">
                    Visit live site
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            </BlurIn>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner />
    </main>
  );
}
