import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AuroraBackdrop from "@/components/grow/AuroraBackdrop";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay bg-[#f4f5fb] text-[#0c0b1e]">
      <AuroraBackdrop tone="indigo-cyan" />
      <div className="relative text-center px-6">
        <h1 className="text-8xl font-['Playfair_Display'] italic grow-gradient-text">
          404
        </h1>
        <p className="text-[#0c0b1e]/60 text-lg mt-4">
          Page not found. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium text-sm text-white bg-gradient-to-r from-cyan via-accent to-violet hover:opacity-90 transition-opacity shadow-lg shadow-accent/25 mt-8"
        >
          Go Home
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </main>
  );
}
