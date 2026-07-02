"use client";

import AuroraBackdrop from "@/components/grow/AuroraBackdrop";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay bg-transparent text-[#0c0b1e]">
      <AuroraBackdrop tone="violet" />
      <div className="relative text-center px-6">
        <h1 className="text-6xl font-['Playfair_Display'] italic grow-gradient-text">
          Oops
        </h1>
        <p className="text-[#0c0b1e]/60 text-lg mt-4">Something went wrong.</p>
        <button
          onClick={reset}
          className="group inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-medium text-sm text-white bg-gradient-to-r from-cyan via-accent to-violet hover:opacity-90 transition-opacity shadow-lg shadow-accent/25 mt-8"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
