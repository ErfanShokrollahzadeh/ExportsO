import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-cream"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 0-9-2-1-2 0 6-5 6l-.32-.23C7.85 4.45 11.63 2 17 2c0 0 1 6-3 9z" />
                </svg>
              </div>
              <span
                className="text-xl font-bold text-cream"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
               Global Trades
              </span>
            </div>
            <p className="text-sm leading-relaxed text-cream/55 max-w-xs">
              Bringing the finest produce and artisan goods from Pakistan to Turkey — with
              care, quality, and authenticity in every shipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-cream uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                // { href: "/shipping", label: "Shipping & Trade" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/55 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-xs font-semibold text-cream uppercase tracking-widest mb-5">
              Our Services
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/", label: "Invest" },
                { href: "/products", label: "Tax" },
                { href: "/about", label: "consultancy" },
                { href: "/contact", label: "Bookkeeping" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/55 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-cream uppercase tracking-widest mb-5">
              Get in Touch
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-cream/55">
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-amber"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a href="mailto:info@exportso.com" className="hover:text-cream transition-colors">
                  info@exportso.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 mt-0.5 shrink-0 text-amber"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Istanbul, Turkey</span>
              </li>
              <li className="flex items-start gap-3">
              </li>
            </ul>
          </div>
        </div>{/* end 3-col grid */}

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/35">
          <p>© {new Date().getFullYear()} ExportsO. All rights reserved.</p>
          <p>Sourced from Pakistan & Iran · Delivered to Turkey</p>
        </div>
      </div>
    </footer>
  );
}
