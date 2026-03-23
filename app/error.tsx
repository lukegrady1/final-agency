"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-['Playfair_Display'] italic text-white">
          Oops
        </h1>
        <p className="text-white/60 text-lg mt-4">Something went wrong.</p>
        <button
          onClick={reset}
          className="inline-flex items-center rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200 mt-8"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
