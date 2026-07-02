import Image from "next/image";
import BlurIn from "./BlurIn";

// Businesses Grady Digital has worked with. No logo image files exist yet, so
// each renders as a clean wordmark (monogram + name). To use a real logo,
// drop the file in /public and set `logo` (and optional width/height) below —
// the component will render the image instead of the wordmark automatically.
type Client = {
  name: string;
  mark: string;
  logo?: string;
  width?: number;
  height?: number;
  /** Override the logo size — use for tall/emblem logos so they don't look oversized. */
  logoClass?: string;
};

const clients: Client[] = [
  {
    name: "Reece Group LLC — Electrical Contracting",
    mark: "RE",
    logo: "/reece-logo.webp",
    width: 1007,
    height: 141,
  },
  {
    name: "MJP Auto Detail",
    mark: "MJP",
    logo: "/mjp-logo.webp",
    width: 557,
    height: 256,
  },
  {
    name: "Greater Boston Livery",
    mark: "GBL",
    logo: "/gbl_logo.webp",
    width: 243,
    height: 134,
    logoClass: "h-12 lg:h-14 w-auto object-contain",
  },
  {
    name: "Garabedian Plumbing, Heating & A/C",
    mark: "G",
    logo: "/garabedian-logo.webp",
    width: 512,
    height: 176,
  },
  {
    name: "Greg's Cuts",
    mark: "GC",
    logo: "/greg-cuts-logo.webp",
    width: 1700,
    height: 438,
  },
  {
    name: "Tee's Deli & Catering",
    mark: "T",
    logo: "/tees-deli-logo.webp",
    width: 2048,
    height: 1299,
    logoClass: "h-12 lg:h-14 w-auto object-contain",
  },
  {
    name: "Functional Massage Therapy",
    mark: "FM",
    logo: "/functional-massage-therapy-logo.webp",
    width: 800,
    height: 570,
    logoClass: "h-12 lg:h-14 w-auto object-contain",
  },
];

function Logo({ c }: { c: Client }) {
  return (
    <div
      className="shrink-0 opacity-90 hover:opacity-100 transition-opacity duration-300"
      title={c.name}
    >
      {c.logo ? (
        <Image
          src={c.logo}
          alt={c.name}
          width={c.width ?? 130}
          height={c.height ?? 40}
          className={
            c.logoClass ?? "h-9 lg:h-10 w-auto max-w-[150px] object-contain"
          }
        />
      ) : (
        <div className="flex items-center gap-2.5">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyan/25 to-accent/25 border border-black/10 text-[11px] font-bold text-[#0c0b1e]/70">
            {c.mark}
          </span>
          <span className="font-medium text-[#0c0b1e]/75 text-sm sm:text-base whitespace-nowrap">
            {c.name}
          </span>
        </div>
      )}
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className="py-12 lg:py-16 border-b border-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <BlurIn>
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#0c0b1e]/40">
            Trusted by local businesses across Massachusetts
          </p>
        </BlurIn>
      </div>

      {/* Full-width sliding marquee, faded at both edges. */}
      <BlurIn delay={0.1}>
        <div
          className="mt-8 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center gap-x-10 lg:gap-x-14 pr-10 lg:pr-14"
                aria-hidden={group === 1}
              >
                {clients.map((c) => (
                  <Logo key={c.name} c={c} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </BlurIn>
    </section>
  );
}
