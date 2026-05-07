"use client";

import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import SectionLabel from "./SectionLabel";
import BlurIn from "./BlurIn";
import { StaggerParent, StaggerChild } from "./StaggerParent";

const projects = [
  {
    name: "Imagine Construction",
    type: "General Contractor",
    image: "/site_after.PNG",
  },
  {
    name: "MJP Auto Detailing",
    type: "Auto Detailing",
    image: "/mjp_after.PNG",
  },
  {
    name: "Reece Electric",
    type: "Electrical Contractor",
    image: "/reece_after.PNG",
  },
  {
    name: "Greater Boston Livery",
    type: "Car Service",
    image: "/gbl_after.PNG",
  },
];

export default function CaseStudies() {
  return (
    <SectionWrapper>
      <div className="text-center mb-16">
        <BlurIn>
          <SectionLabel>Our Work</SectionLabel>
        </BlurIn>
        <BlurIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium text-white mt-4">
            Sites we&apos;ve built for businesses like yours
          </h2>
        </BlurIn>
      </div>

      <StaggerParent className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <StaggerChild
            key={project.name}
            className="bg-card border border-card-border rounded-2xl overflow-hidden"
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
              <span className="text-xs font-medium text-accent-light uppercase tracking-wider">
                {project.type}
              </span>
              <h3 className="text-lg font-medium text-white mt-1">
                {project.name}
              </h3>
            </div>
          </StaggerChild>
        ))}
      </StaggerParent>

      <div className="text-center mt-12">
        <Link
          href="/work"
          className="text-accent-light text-sm hover:underline"
        >
          View all projects &rarr;
        </Link>
      </div>
    </SectionWrapper>
  );
}
