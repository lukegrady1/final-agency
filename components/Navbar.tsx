"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${barClass}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
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
              href="/start#book"
              className={`inline-flex items-center rounded-full px-4 py-2 font-medium text-sm transition-colors duration-200 ${ctaClass}`}
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden backdrop-blur-md border-b bg-white/95 border-black/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
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
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0c0b1e]/70"
              >
                <Phone className="w-4 h-4 text-[#0e8090]" />
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/start#book"
                className={`inline-flex items-center justify-center rounded-full px-4 py-2 font-medium text-sm mt-2 ${ctaClass}`}
              >
                Book a Free Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
