"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

export default function TaxPage() {
  const { lang } = useLanguage();
  const P = translations[lang].tax;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 75% 40%, #B87333 0%, transparent 50%), radial-gradient(circle at 15% 70%, #4F7A35 0%, transparent 50%)`,
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
          <div className="mt-10 flex flex-wrap gap-3">
            {P.tags.map((tag) => (
              <span key={tag} className="inline-flex items-center bg-white/10 border border-white/20 text-cream/70 text-xs font-medium px-3 py-1.5 rounded-full">
                {tag}
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

      {/* Services Grid */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">{P.whatWeCover}</p>
            <h2 className="text-4xl font-bold text-forest" style={{ fontFamily: "var(--font-playfair)" }}>
              {P.ourTaxServices}
            </h2>
            <p className="text-muted mt-3 max-w-lg mx-auto text-sm">
              {P.servicesSubtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {P.services.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 shadow-sm border border-sand/40 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <div className="text-3xl mb-5">{s.icon}</div>
                <h3 className="text-lg font-semibold text-bark mb-3">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">{P.commonQuestions}</p>
            <h2 className="text-4xl font-bold text-forest" style={{ fontFamily: "var(--font-playfair)" }}>
              {P.taxFaq}
            </h2>
          </div>
          <div className="space-y-5">
            {P.faqs.map((f) => (
              <div key={f.q} className="bg-white rounded-2xl p-8 shadow-sm border border-sand/40">
                <h3 className="text-base font-semibold text-forest mb-3">{f.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, #DEC99A 0%, transparent 60%)` }} />
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
            {P.bookConsultation}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
