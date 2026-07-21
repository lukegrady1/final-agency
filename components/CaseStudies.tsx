import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import BlurIn from "./BlurIn";
import WorkShowcase from "./WorkShowcase";

// Homepage teaser of the /work showcase — same filmstrip + stage pattern,
// limited to three sites. The full set lives on /work.
export default function CaseStudies() {
  return (
    <SectionWrapper>
      <div className="text-center mb-10 md:mb-12 max-w-2xl mx-auto">
        <BlurIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium text-[#0c0b1e] tracking-tight">
            The click is only half the job.{" "}
            <span className="grow-gradient-text font-display italic">
              Here&apos;s what wins the call.
            </span>
          </h2>
        </BlurIn>
        <BlurIn delay={0.2}>
          <p className="text-[#0c0b1e]/60 text-base md:text-lg leading-relaxed mt-4">
            Reviews get them to your site. A fast, modern website gets them to
            pick up the phone. Drag any slider to see the difference.
          </p>
        </BlurIn>
      </div>

      <BlurIn delay={0.15}>
        <WorkShowcase
          include={[
            "Imagine Construction",
            "Garabedian Plumbing & Heating",
            "Tee's Deli & Catering",
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
