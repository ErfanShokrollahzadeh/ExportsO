"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

export default function FaqPage() {
  const { lang } = useLanguage();
  const P = translations[lang].ask;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 40%, #B87333 0%, transparent 55%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-4">
            {P.badge}
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-cream max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {P.heroTitle}
          </h1>
          <p className="text-cream/55 mt-5 max-w-xl text-lg leading-relaxed">
            {P.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {P.categories.map((c) => (
              <span key={c.label} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-cream/70 text-xs font-medium px-3 py-1.5 rounded-full">
                {c.icon} {c.label}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 fill-cream">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-16">
          {P.categories.map((cat) => (
            <div key={cat.label}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{cat.icon}</span>
                <h2 className="text-2xl font-bold text-forest" style={{ fontFamily: "var(--font-playfair)" }}>
                  {cat.label}
                </h2>
              </div>
              <div className="space-y-4">
                {cat.faqs.map((f) => (
                  <div key={f.q} className="bg-white rounded-2xl p-7 shadow-sm border border-sand/40 hover:shadow-md transition-shadow">
                    <h3 className="text-base font-semibold text-forest mb-3 flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-amber/15 text-amber text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">?</span>
                      {f.q}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed pl-8">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 60% 50%, #DEC99A 0%, transparent 55%)` }} />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl font-bold text-cream mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
            {P.ctaTitle}
          </h2>
          <p className="text-cream/55 text-lg mb-10 leading-relaxed">
            {P.ctaText}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-amber text-white font-semibold px-10 py-4 rounded-full hover:bg-amber/90 transition-colors shadow-lg text-base"
          >
            {P.contactTeam}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
