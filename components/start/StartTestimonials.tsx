"use client";

import { Quote, Star } from "lucide-react";
import { StaggerParent, StaggerChild } from "../StaggerParent";

const testimonials = [
  {
    quote:
      "Luke built us a site that actually looks like us. We went from having nothing online to getting calls from people who found us through our website. Honestly didn't think it would make that kind of difference.",
    name: "Matt Paharik",
    title: "Owner, MJP Auto Detailing",
  },
  {
    quote:
      "Before working with Luke, our website was basically a placeholder. Now when people call, they already know what we do and they're ready to book. It's been a game changer for us.",
    name: "Anthony Reece",
    title: "Owner, Reece Electric",
  },
  {
    quote:
      "We were relying on word of mouth for years. Luke put together a professional site that makes us look legit. Now when someone asks for our website, we're actually proud to send it. Worth every penny.",
    name: "John Grady",
    title: "Owner, Greater Boston Livery",
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
