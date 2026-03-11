"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

export default function IndustryPage() {
  const { lang } = useLanguage();
  const P = translations[lang].industry;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 65%, #4F7A35 0%, transparent 50%), radial-gradient(circle at 80% 25%, #B87333 0%, transparent 50%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-4">
            {P.badge}
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-cream max-w-3xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {P.heroTitle1}<br />
            <span className="text-sand">{P.heroTitle2}</span>
          </h1>
          <p className="text-cream/55 mt-5 max-w-xl text-lg leading-relaxed">
            {P.heroSubtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber text-white font-semibold px-8 py-4 rounded-full hover:bg-amber/90 transition-colors shadow-lg text-base"
            >
              {P.discussRequirements}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/25 text-cream font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-colors text-base"
            >
              {P.viewProducts}
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 fill-cream">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {P.stats.map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-sand/40">
                <p className="text-4xl font-bold text-forest mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  {s.value}
                </p>
                <p className="text-muted text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">{P.whoWeWorkWith}</p>
            <h2 className="text-4xl font-bold text-forest" style={{ fontFamily: "var(--font-playfair)" }}>
              {P.industriesWeServe}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {P.industries.map((ind) => (
              <div key={ind.title} className="bg-white rounded-2xl p-8 shadow-sm border border-sand/40 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <div className="text-4xl mb-5">{ind.icon}</div>
                <h3 className="text-xl font-bold text-forest mb-3 group-hover:text-bark transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                  {ind.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">{ind.desc}</p>
                <ul className="space-y-1.5">
                  {ind.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-muted/70">
                      <span className="w-1.5 h-1.5 bg-amber rounded-full shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why ExportsO */}
      <section className="py-24 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 40% 60%, #DEC99A 0%, transparent 55%)` }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">{P.whyChooseUs}</p>
            <h2 className="text-4xl font-bold text-cream" style={{ fontFamily: "var(--font-playfair)" }}>
              {P.exportsDifference}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {P.differentiators.map((d) => (
              <div key={d.title} className="bg-white/10 border border-white/15 rounded-2xl p-8 hover:bg-white/15 transition-colors">
                <h3 className="text-lg font-semibold text-cream mb-3">{d.title}</h3>
                <p className="text-cream/55 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl font-bold text-forest mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
            {P.ctaTitle}
          </h2>
          <p className="text-muted text-lg mb-10 leading-relaxed">
            {P.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-forest text-cream font-semibold px-10 py-4 rounded-full hover:bg-forest/85 transition-colors shadow-lg text-base"
            >
              {P.getInTouch}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-forest text-forest font-semibold px-10 py-4 rounded-full hover:bg-forest/5 transition-colors text-base"
            >
              {P.browseProducts}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
