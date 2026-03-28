"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const T = translations[lang];

  const navLinks = [
    { href: "/", label: T.nav.home },
    { href: "/products", label: T.nav.products },
    { href: "/about", label: T.nav.about },
    { href: "/contact", label: T.nav.contact },
  ];

  const authLinks = [
    {
      href: "/login",
      label: T.nav.login,
      variant: "ghost" as const,
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
          <polyline points="10 17 15 12 10 7" />
          <line x1="15" y1="12" x2="3" y2="12" />
        </svg>
      ),
    },
    {
      href: "/signup",
      label: T.nav.signup,
      variant: "solid" as const,
      icon: (
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5a4 4 0 1 1-4 4" />
          <circle cx="12" cy="9" r="4" />
          <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          <path d="M9 13h6" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
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
                Global Trades
              </span>
              <p
                className={`text-xs leading-none -mt-0.5 tracking-wide transition-colors ${
                  scrolled ? "text-muted" : "text-cream/60"
                }`}
              >
                {T.nav.exportImport}
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

          {/* CTA + Language + Mobile Trigger */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div ref={langRef} className="relative hidden md:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-full border transition-all ${
                  scrolled
                    ? "border-sand/60 text-bark/70 hover:text-forest hover:border-forest/30"
                    : "border-white/20 text-cream/80 hover:text-cream hover:bg-white/10"
                }`}
                aria-label="Switch language"
              >
                <span>{lang === "en" ? "🇬🇧" : "🇹🇷"}</span>
                <span className="uppercase tracking-wider text-xs font-semibold">{lang}</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute right-0 top-full mt-2 w-36 bg-white rounded-xl shadow-lg border border-sand/40 overflow-hidden transition-all duration-200 origin-top-right ${
                  langOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {(["en", "tr"] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className={`w-full flex items-center gap-2.5 px-4 py-3 text-sm transition-colors ${
                      lang === l
                        ? "bg-forest/8 text-forest font-semibold"
                        : "text-bark/70 hover:bg-sand/30 hover:text-forest"
                    }`}
                  >
                    <span>{l === "en" ? "🇬🇧" : "🇹🇷"}</span>
                    <span>{l === "en" ? "English" : "Türkçe"}</span>
                    {lang === l && (
                      <svg className="w-3.5 h-3.5 ml-auto text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 bg-forest text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-forest-mid transition-colors shadow-md"
            >
              {T.nav.getInTouch}
            </Link>

            <div className="hidden md:flex items-center gap-2">
              {authLinks.map(({ href, label, icon, variant }) => {
                const active = pathname === href;
                const base =
                  "inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 border";
                const solid =
                  "bg-gradient-to-r from-forest to-forest-mid text-cream border-forest shadow-md hover:shadow-lg";
                const ghost = scrolled
                  ? "border-sand/70 text-bark/80 hover:text-forest hover:border-forest/40 bg-white/80"
                  : "border-white/20 text-cream/90 hover:bg-white/10";
                const activeRing = active ? "ring-2 ring-amber/60" : "";
                const classes = [base, variant === "solid" ? solid : ghost, activeRing].join(" ");
                return (
                  <Link key={href} href={href} className={classes} aria-label={label}>
                    {icon}
                    <span>{label}</span>
                  </Link>
                );
              })}
            </div>

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
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
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

          <div className="grid grid-cols-2 gap-3 py-4">
            {authLinks.map(({ href, label, icon, variant }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-center gap-2 text-sm font-semibold px-3 py-2 rounded-lg border transition-all ${
                  variant === "solid"
                    ? "bg-forest text-cream border-forest shadow-md"
                    : "border-sand/60 text-bark/70 hover:border-forest/50"
                }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile language toggle */}
          <div className="flex gap-2 py-3 border-b border-sand/50">
            {(["en", "tr"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  lang === l
                    ? "bg-forest text-cream border-forest"
                    : "border-sand/60 text-bark/60 hover:border-forest/40"
                }`}
              >
                <span>{l === "en" ? "🇬🇧" : "🇹🇷"}</span>
                <span className="uppercase">{l}</span>
              </button>
            ))}
          </div>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-forest text-cream text-sm font-medium px-5 py-3 rounded-full text-center hover:bg-forest-mid transition-colors"
          >
            {T.nav.getInTouch}
          </Link>
        </nav>
      </div>
    </header>
  );
}
