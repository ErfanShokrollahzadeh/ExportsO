"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { translations, fruitBadgeTypes } from "../lib/translations";

export default function ProductsPage() {
  const { lang } = useLanguage();
  const P = translations[lang].products;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, #DEC99A 0%, transparent 50%)`,
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
          <p className="text-cream/55 mt-5 max-w-xl text-lg">
            {P.heroSubtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-12 fill-cream"
          >
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Fruits Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-4xl">🍊</span>
            <div>
              <p className="text-amber text-sm font-semibold uppercase tracking-widest">
                {P.currentRange}
              </p>
              <h2
                className="text-3xl font-bold text-forest"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {P.freshFruits}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {P.fruits.map((fruit, idx) => (
              <div
                key={fruit.name}
                className="bg-white rounded-2xl p-6 shadow-sm border border-sand/40 hover:shadow-md hover:-translate-y-0.5 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-bark group-hover:text-forest transition-colors">
                      {fruit.name}
                    </h3>
                    <p className="text-muted text-xs mt-0.5">{fruit.origin}</p>
                  </div>
                  {fruitBadgeTypes[idx] && (
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${
                        fruitBadgeTypes[idx] === "premium"
                          ? "bg-amber/15 text-amber"
                          : "bg-forest/10 text-forest"
                      }`}
                    >
                      {fruitBadgeTypes[idx] === "premium" ? P.badgePremium : P.badgeSeasonal}
                    </span>
                  )}
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">{fruit.desc}</p>
                <div className="flex items-center gap-2 text-xs text-muted/60 border-t border-sand/40 pt-4">
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {P.season} {fruit.season}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber/15 border border-amber/30 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
              <span className="text-amber text-xs font-semibold uppercase tracking-widest">
                {P.expandingSoon}
              </span>
            </div>
            <h2
              className="text-4xl font-bold text-forest"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {P.comingCategories}
            </h2>
            <p className="text-muted mt-3 max-w-xl mx-auto text-sm">
              {P.comingText}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {P.upcoming.map((cat) => (
              <div
                key={cat.title}
                className="bg-white/60 rounded-2xl p-8 border border-dashed border-sand text-center hover:bg-white/80 transition-colors"
              >
                <div className="text-5xl mb-5">{cat.icon}</div>
                <h3 className="text-xl font-semibold text-forest/60 mb-3">{cat.title}</h3>
                <p className="text-muted/70 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="py-20 bg-sand">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2
            className="text-3xl font-bold text-forest mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {P.ctaTitle}
          </h2>
          <p className="text-muted mb-8 max-w-xl mx-auto">
            {P.ctaText}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-forest text-cream font-semibold px-8 py-4 rounded-full hover:bg-forest-mid transition-colors shadow-md"
          >
            {P.sendInquiry}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
