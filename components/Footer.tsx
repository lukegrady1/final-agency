import Link from "next/link";

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
            <p className="text-white/40 text-xs mt-4">
              &copy; 2026 Grady Digital. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4">
              Quick Links
            </h4>
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
            <h4 className="text-sm font-medium text-white mb-4">Legal</h4>
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
            <h4 className="text-sm font-medium text-white mb-4">
              Ready to grow?
            </h4>
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
