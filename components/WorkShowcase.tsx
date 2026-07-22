"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface Project {
  name: string;
  category: string;
  description: string;
  /** Full-size "after" shot — also used for the filmstrip thumbnail. */
  image: string;
  /** Present only for redesigns — enables the before/after slider. */
  before?: string;
  url?: string;
}

// Every site in one filmstrip — no scrolling past stacked cards to see the
// portfolio. Selecting a thumbnail swaps the big stage below.
const projects: Project[] = [
  {
    name: "White Springs",
    category: "Town Government",
    description:
      "A complete redesign that transformed an outdated site into a modern, conversion-focused experience. Drag the slider to compare.",
    image: "/white_springs_after.webp",
    before: "/white_springs_before.webp",
    url: "https://whitespringsfl-us.com/",
  },
  {
    name: "Imagine Construction",
    category: "General Contractor",
    description:
      "A professional site that generates calls and estimate requests for a growing construction company. Drag the slider to compare.",
    image: "/site_after.webp",
    before: "/site_before.webp",
  },
  {
    name: "Garabedian Plumbing & Heating",
    category: "Plumbing & HVAC",
    description:
      "A century-old, family-owned plumbing and heating company gets a bold, modern site built to win local jobs. Drag the slider to compare.",
    image: "/garabedian_after.webp",
    before: "/garabedian_before.webp",
  },
  {
    name: "Tee's Deli & Catering",
    category: "Deli & Catering",
    description:
      "A dated template site becomes a clean, modern home for a West Boylston deli and full-service caterer — built to win catering quotes and online orders. Drag the slider to compare.",
    image: "/tees-deli-website-hero-section.webp",
    before: "/tees-deli-website-hero-section-before.webp",
    url: "https://teesdeli.com/",
  },
  {
    name: "Greg's Cuts",
    category: "Barber Shop",
    description:
      "A bold, no-nonsense site for a Gardner barbershop that drives calls and walk-ins with a clear, high-contrast design.",
    image: "/greg-cuts-website-hero-section.webp",
  },
  {
    name: "MJP Auto Detailing",
    category: "Auto Detailing",
    description:
      "A clean, professional site that showcases services and drives bookings for a mobile auto detailing business.",
    image: "/mjp_after.webp",
    url: "https://mjpautodetailing.com/",
  },
  {
    name: "Reece Electric",
    category: "Electrical Contractor",
    description:
      "A modern site built to generate estimate requests and establish credibility for an electrical contractor.",
    image: "/reece_after.webp",
    url: "https://reecegroupllc.com/",
  },
  {
    name: "Greater Boston Livery",
    category: "Car Service",
    description:
      "A polished site that builds trust and drives ride bookings for a professional car service.",
    image: "/gbl_after.webp",
    url: "https://greaterbostonlivery.com/",
  },
];

interface WorkShowcaseProps {
  /** Show only these projects (by name), e.g. a 3-site teaser on the homepage. */
  include?: string[];
  /** Which project to show first on load (by name). Defaults to the first item. */
  initialName?: string;
  /** Put the big before/after stage on top and the thumbnail strip below. */
  stageFirst?: boolean;
}

export default function WorkShowcase({
  include,
  initialName,
  stageFirst,
}: WorkShowcaseProps) {
  const items = include
    ? projects.filter((p) => include.includes(p.name))
    : projects;
  const initialIndex = initialName
    ? Math.max(0, items.findIndex((p) => p.name === initialName))
    : 0;
  const [active, setActive] = useState(initialIndex);
  const [paused, setPaused] = useState(false);
  const p = items[active];
  const prev = () => setActive((active + items.length - 1) % items.length);
  const next = () => setActive((active + 1) % items.length);

  // Auto-advance through the sites so the whole portfolio plays without a click.
  // Pauses on hover/focus, and respects prefers-reduced-motion.
  useEffect(() => {
    if (paused || items.length <= 1) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % items.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused, items.length, active]);

  return (
    <div
      className={`flex ${stageFirst ? "flex-col-reverse" : "flex-col"} gap-4 md:gap-6`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Filmstrip — every site visible at a glance */}
      <div
        className={`grid gap-2 md:gap-3 ${
          items.length > 3 ? "grid-cols-3 lg:grid-cols-6" : "grid-cols-3"
        }`}
      >
        {items.map((proj, i) => {
          const selected = i === active;
          return (
            <button
              key={proj.name}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={selected}
              className="group text-left"
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden rounded-lg md:rounded-xl bg-[#f4f5fb] border transition-all duration-200 ${
                  selected
                    ? "border-accent ring-2 ring-accent/60 shadow-md shadow-accent/20"
                    : "border-black/[0.08] group-hover:border-black/25 opacity-80 group-hover:opacity-100"
                }`}
              >
                <Image
                  src={proj.image}
                  alt={`${proj.name} website thumbnail`}
                  fill
                  sizes={
                    items.length > 3
                      ? "(min-width: 1024px) 16vw, 33vw"
                      : "33vw"
                  }
                  className="object-cover object-top"
                />
                {proj.before && (
                  <span className="absolute bottom-1 right-1 rounded-full bg-[#0c0b1e]/70 backdrop-blur-sm text-white text-[8px] md:text-[9px] font-semibold uppercase tracking-wide px-1.5 py-0.5">
                    Before / After
                  </span>
                )}
              </div>
              <span
                className={`block mt-1.5 text-[10px] md:text-xs font-medium truncate transition-colors ${
                  selected ? "text-accent" : "text-[#0c0b1e]/50 group-hover:text-[#0c0b1e]/80"
                }`}
              >
                {proj.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Stage — the selected site, big */}
      <div className="bg-white border border-black/[0.08] rounded-2xl overflow-hidden shadow-sm">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={p.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {p.before ? (
              <BeforeAfterSlider
                beforeSrc={p.before}
                afterSrc={p.image}
                beforeAlt={`${p.name} website before Grady Digital redesign`}
                afterAlt={`${p.name} website after Grady Digital redesign`}
              />
            ) : (
              <div className="relative aspect-[16/10] bg-[#f4f5fb]">
                <Image
                  src={p.image}
                  alt={`${p.name} website by Grady Digital`}
                  fill
                  sizes="(min-width: 1280px) 1152px, 100vw"
                  className="object-contain object-center"
                />
              </div>
            )}

            {/* Info bar */}
            <div className="p-4 md:p-6 flex items-start justify-between gap-4 border-t border-black/[0.06]">
              <div className="min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h2 className="text-base md:text-lg font-medium text-[#0c0b1e]">
                    {p.name}
                  </h2>
                  <span className="rounded-full px-2 py-0.5 text-[10px] md:text-[11px] font-medium border border-accent/30 bg-accent/10 text-accent whitespace-nowrap">
                    {p.category}
                  </span>
                </div>
                <p className="text-[#0c0b1e]/60 text-xs md:text-sm leading-snug md:leading-relaxed mt-1.5 max-w-2xl">
                  {p.description}
                </p>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1 text-accent text-xs md:text-sm mt-2.5 hover:gap-2 transition-all"
                  >
                    Visit live site
                    <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </a>
                )}
              </div>

              {/* Prev / next */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous site"
                  className="grid place-items-center w-9 h-9 rounded-full border border-black/10 bg-white text-[#0c0b1e]/70 hover:text-[#0c0b1e] hover:border-black/25 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next site"
                  className="grid place-items-center w-9 h-9 rounded-full border border-black/10 bg-white text-[#0c0b1e]/70 hover:text-[#0c0b1e] hover:border-black/25 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
