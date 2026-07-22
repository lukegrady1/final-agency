import { Star } from "lucide-react";
import Reveal from "../grow/Reveal";

// ─────────────────────────────────────────────────────────────────────────
// Real client testimonials for Grady Digital. The `placeholder` flag renders
// any not-yet-collected quote as a clearly-marked slot — we never fabricate a
// quote or attribute one to a real client.
// ─────────────────────────────────────────────────────────────────────────
type Testimonial = {
  placeholder: boolean;
  quote: string;
  name: string;
  business: string;
};

const testimonials: Testimonial[] = [
  {
    placeholder: false,
    quote:
      "Luke built us a site that actually looks like us. We went from having nothing online to getting calls from people who found us through our website. Honestly didn't think it would make that kind of difference.",
    name: "Matt Paharik",
    business: "MJP Auto Detailing",
  },
  {
    placeholder: false,
    quote:
      "Before working with Luke, our website was basically a placeholder. Now when people call, they already know what we do and they're ready to book. It's been a game changer for us.",
    name: "Anthony Reece",
    business: "Reece Electric",
  },
];

function Card({ t, index }: { t: Testimonial; index: number }) {
  if (t.placeholder) {
    return (
      <Reveal
        delay={index * 90}
        className="flex flex-col rounded-2xl border border-dashed border-black/15 bg-white/40 p-6 lg:p-7"
      >
        <div className="flex items-center gap-0.5 opacity-40">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="w-4 h-4 fill-amber text-amber" />
          ))}
        </div>
        <p className="mt-3 text-[#0c0b1e]/45 text-sm leading-relaxed italic">
          {t.quote}
        </p>
        <div className="mt-4 text-xs text-[#0c0b1e]/40">
          {t.name} &middot; {t.business}
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal
      delay={index * 90}
      className="flex flex-col rounded-2xl border border-black/[0.08] bg-white p-6 lg:p-7 shadow-sm"
    >
      <div className="flex items-center gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star key={i} className="w-4 h-4 fill-amber text-amber" />
        ))}
      </div>
      <p className="mt-3 text-[#0c0b1e]/80 text-base leading-relaxed">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-5 text-sm">
        <span className="font-medium text-[#0c0b1e]">{t.name}</span>
        <span className="text-[#0c0b1e]/50"> &middot; {t.business}</span>
      </div>
    </Reveal>
  );
}

export default function Testimonials() {
  return (
    <section className="py-14 lg:py-20 border-b border-black/10">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Card key={i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
