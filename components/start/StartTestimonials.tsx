"use client";

import { Quote, Star } from "lucide-react";
import { StaggerParent, StaggerChild } from "../StaggerParent";

const testimonials = [
  {
    quote:
      "Add your testimonial here. Quote a specific result the client got — more bookings, fewer missed calls, ranking improvements.",
    name: "Client Name",
    title: "Owner, Business Name",
  },
  {
    quote:
      "Add your testimonial here. Real client words land better than marketing copy — keep them honest and specific.",
    name: "Client Name",
    title: "Owner, Business Name",
  },
  {
    quote:
      "Add your testimonial here. A short one-liner about how working with Grady Digital changed something concrete.",
    name: "Client Name",
    title: "Owner, Business Name",
  },
];

export default function StartTestimonials() {
  return (
    <StaggerParent className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => (
        <StaggerChild
          key={i}
          className="bg-card border border-card-border rounded-2xl p-6 flex flex-col"
        >
          <Quote className="w-6 h-6 text-accent-light/60 mb-4" />
          <p className="text-white/80 text-sm leading-relaxed flex-1">
            &ldquo;{t.quote}&rdquo;
          </p>
          <div className="flex items-center gap-1 mt-6">
            {Array.from({ length: 5 }).map((_, j) => (
              <Star
                key={j}
                className="w-4 h-4 text-accent-light fill-accent-light"
              />
            ))}
          </div>
          <div className="mt-3 pt-4 border-t border-white/10">
            <div className="text-white text-sm font-medium">{t.name}</div>
            <div className="text-white/50 text-xs mt-0.5">{t.title}</div>
          </div>
        </StaggerChild>
      ))}
    </StaggerParent>
  );
}
