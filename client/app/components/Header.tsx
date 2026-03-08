"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm shadow-sm border-b border-sand/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-forest rounded-lg flex items-center justify-center shadow-md group-hover:bg-forest-mid transition-colors">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-cream"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 0-9-2-1-2 0 6-5 6l-.32-.23C7.85 4.45 11.63 2 17 2c0 0 1 6-3 9z" />
              </svg>
            </div>
            <div>
              <span
                className={`text-xl font-bold tracking-tight transition-colors ${
                  scrolled ? "text-forest" : "text-cream"
                }`}
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                ExportsO
              </span>
              <p
                className={`text-xs leading-none -mt-0.5 tracking-wide transition-colors ${
                  scrolled ? "text-muted" : "text-cream/60"
                }`}
              >
                Premium Imports
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors relative group ${
                  pathname === link.href
                    ? scrolled
                      ? "text-forest"
                      : "text-cream"
                    : scrolled
                    ? "text-bark/60 hover:text-forest"
                    : "text-cream/70 hover:text-cream"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-amber transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Trigger */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-forest text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-forest-mid transition-colors shadow-md"
            >
              Get in Touch
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-bark" : "bg-cream"
                } ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-bark" : "bg-cream"
                } ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-5 h-0.5 transition-all duration-300 ${
                  scrolled ? "bg-bark" : "bg-cream"
                } ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-cream border-t border-sand/60 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium py-3 border-b border-sand/50 transition-colors ${
                pathname === link.href ? "text-forest" : "text-bark/70 hover:text-forest"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-forest text-cream text-sm font-medium px-5 py-3 rounded-full text-center hover:bg-forest-mid transition-colors"
          >
            Get in Touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
