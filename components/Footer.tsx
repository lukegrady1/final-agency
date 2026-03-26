import Link from "next/link";
import { Linkedin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-['Playfair_Display'] italic text-xl text-white"
            >
              Grady Digital
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mt-4">
              AI receptionists, chatbots, automated follow-up, and websites
              for local service businesses. No contracts. Real results.
            </p>

            {/* Contact links (clickable tel: and mailto:) */}
            <div className="flex flex-col gap-2 mt-4">
              <a
                href="tel:+19787982870"
                className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                (978) 798-2870
              </a>
              <a
                href="mailto:luke@gradydigital.com"
                className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                luke@gradydigital.com
              </a>
            </div>

            {/* Social media links */}
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.linkedin.com/company/grady-digital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/40 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://g.page/grady-digital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Business Profile"
                className="text-white/40 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </a>
            </div>

            <p className="text-white/40 text-xs mt-4">
              &copy; 2026 Grady Digital. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium text-white mb-4">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/blog", label: "Blog" },
                { href: "/about", label: "About" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-medium text-white mb-4">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-sm font-medium text-white mb-4">
              Ready to grow?
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full px-5 py-3 bg-foreground text-background font-medium text-sm hover:bg-white/90 transition-colors duration-200"
            >
              Get Your Free Audit
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <span className="text-white/40 text-xs">
            &copy; 2026 Grady Digital
          </span>
          <span className="text-white/40 text-xs">
            AI agents &amp; automation for local businesses.
          </span>
        </div>
      </div>
    </footer>
  );
}
