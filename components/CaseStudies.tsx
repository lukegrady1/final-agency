import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import BlurIn from "./BlurIn";
import WorkShowcase from "./WorkShowcase";

// Homepage teaser of the /work showcase — same filmstrip + stage pattern,
// limited to three sites. The full set lives on /work.
export default function CaseStudies() {
  return (
    <SectionWrapper>
      <div className="text-center mb-10 md:mb-12">
        <BlurIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight">
            Sites we&apos;ve built for{" "}
            <span className="grow-gradient-text font-display italic">
              businesses like yours
            </span>
          </h2>
        </BlurIn>
      </div>

      <BlurIn delay={0.15}>
        <WorkShowcase
          include={[
            "Imagine Construction",
            "Garabedian Plumbing & Heating",
            "MJP Auto Detailing",
          ]}
        />
      </BlurIn>

      <div className="text-center mt-10 md:mt-12">
        <Link
          href="/work"
          className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:gap-2 transition-all"
        >
          View all projects &rarr;
        </Link>
      </div>
    </SectionWrapper>
  );
}
