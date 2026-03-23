import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-['Playfair_Display'] italic text-white">
          404
        </h1>
        <p className="text-white/60 text-lg mt-4">
          Page not found. Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200 mt-8"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
