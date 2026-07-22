"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

// Jump the window to the top. This page suppresses animated scrolling (native
// "smooth", GSAP, and rAF tweens all silently no-op here — likely the Next
// <Link> scroll handling), while an instant scrollTo() reliably sticks. We set
// it now and again on the next frame in case the click's own scroll handling
// runs a beat later and tries to override it.
function scrollToTop() {
  if (typeof window === "undefined" || window.scrollY <= 0) return;
  window.scrollTo(0, 0);
  requestAnimationFrame(() => window.scrollTo(0, 0));
}

const PHONE_DISPLAY = "(978) 798-2870";
const PHONE_HREF = "tel:+19787982870";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Lock body scroll while the full-screen menu is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Post-booking confirmation page is a distraction-free funnel — no nav.
  if (pathname === "/booked") return null;

  // The whole site now uses the light Grow aesthetic — dark-on-light nav.
  const barClass = scrolled
    ? "bg-white/80 backdrop-blur-md border-b border-black/10 shadow-sm"
    : "bg-transparent";

  const logoClass = "text-[#0c0b1e]";
  const linkActive = "text-[#0c0b1e] font-medium";
  const linkIdle = "text-[#0c0b1e]/60 hover:text-[#0c0b1e]";
  const ctaClass = "bg-[#0c0b1e] text-white hover:bg-[#0c0b1e]/90";
  const iconClass = "text-[#0c0b1e]";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar has its own background/blur so the full-screen overlay below
          isn't trapped by a backdrop-filter ancestor once the page is scrolled. */}
      <div className={`relative z-10 transition-all duration-300 ${barClass}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <Link
          href="/"
          onClick={(e) => {
            setMobileOpen(false);
            if (pathname === "/") {
              e.preventDefault();
              scrollToTop();
            }
          }}
          className={`font-['Playfair_Display'] italic text-xl ${logoClass}`}
        >
          Grady Digital
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href ? linkActive : linkIdle
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-5">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0c0b1e]/70 hover:text-[#0c0b1e] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#0e8090]" />
            {PHONE_DISPLAY}
          </a>
          <Magnetic strength={0.5}>
            <Link
              href="/start"
              className={`inline-flex items-center rounded-full px-4 py-2 font-medium text-sm transition duration-200 ease-out active:scale-[0.97] ${ctaClass}`}
            >
              Book a Free Call
            </Link>
          </Magnetic>
        </div>

        {/* Mobile: tap-to-call + hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <a
            href={PHONE_HREF}
            className={iconClass}
            aria-label={`Call ${PHONE_DISPLAY}`}
          >
            <Phone className="w-5 h-5" />
          </a>
          <button
            className={iconClass}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        </div>
      </div>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden fixed inset-0 bg-white/95 backdrop-blur-xl"
          >
            <div className="flex flex-col h-full px-6 pt-24 pb-10">
              <nav className="flex flex-col">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.06 + i * 0.05,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-3.5 text-3xl font-medium tracking-tight border-b border-black/[0.06] transition-colors ${
                        pathname === link.href
                          ? "text-[#0c0b1e]"
                          : "text-[#0c0b1e]/55 hover:text-[#0c0b1e]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24, duration: 0.3, ease: "easeOut" }}
                className="mt-auto flex flex-col gap-4"
              >
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 text-base font-medium text-[#0c0b1e]/70"
                >
                  <Phone className="w-5 h-5 text-[#0e8090]" />
                  {PHONE_DISPLAY}
                </a>
                <Link
                  href="/start"
                  className={`inline-flex items-center justify-center rounded-full px-5 py-3.5 font-medium text-sm transition duration-200 ease-out active:scale-[0.97] ${ctaClass}`}
                >
                  Book a Free Call
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
