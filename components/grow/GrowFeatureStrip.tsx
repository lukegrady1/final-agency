import { Wrench, Star, MapPin, Inbox } from "lucide-react";

const items = [
  {
    icon: Wrench,
    title: "Done for you",
    label: "Built & managed",
    color: "text-accent",
    ring: "border-accent/20 bg-accent/10",
  },
  {
    icon: Star,
    title: "Reviews on autopilot",
    label: "5-star engine",
    color: "text-[#b45309]",
    ring: "border-amber/30 bg-amber/10",
  },
  {
    icon: MapPin,
    title: "Found on Google",
    label: "Local SEO",
    color: "text-[#0e8090]",
    ring: "border-cyan/30 bg-cyan/10",
  },
  {
    icon: Inbox,
    title: "One inbox",
    label: "Every lead",
    color: "text-[#8b3fd6]",
    ring: "border-violet/30 bg-violet/10",
  },
];

export default function GrowFeatureStrip() {
  return (
    <section className="border-y border-black/10 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-4 divide-x divide-black/[0.07]">
          {items.map(({ icon: Icon, title, label, color, ring }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-2 px-1.5 py-6 lg:gap-3 lg:px-4 lg:py-10"
            >
              <span
                className={`grid place-items-center w-9 h-9 lg:w-10 lg:h-10 rounded-xl border ${ring}`}
              >
                <Icon className={`w-4 h-4 lg:w-5 lg:h-5 ${color}`} />
              </span>
              <div>
                <div className="text-[#0c0b1e] font-medium text-[11px] leading-tight sm:text-sm lg:text-base">
                  {title}
                </div>
                <div className="hidden lg:block text-[10px] sm:text-xs uppercase tracking-wide text-[#0c0b1e]/40 mt-1">
                  {label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
