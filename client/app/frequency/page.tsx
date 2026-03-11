"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

export default function FrequencyPage() {
  const { lang } = useLanguage();
  const P = translations[lang].frequency;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 60%, #4F7A35 0%, transparent 50%), radial-gradient(circle at 80% 25%, #DEC99A 0%, transparent 45%)`,
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
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 fill-cream">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Routes */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">{P.freightOptions}</p>
            <h2 className="text-4xl font-bold text-forest" style={{ fontFamily: "var(--font-playfair)" }}>
              {P.shippingRoutes}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {P.routes.map((r) => (
              <div key={r.mode} className="bg-white rounded-2xl p-8 shadow-sm border border-sand/40 hover:shadow-md hover:-translate-y-0.5 transition-all relative">
                {r.badge && (
                  <span className="absolute top-6 right-6 bg-amber/15 border border-amber/30 text-amber text-xs font-semibold px-2.5 py-1 rounded-full">
                    {r.badge}
                  </span>
                )}
                <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-5">{r.mode}</p>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm text-bark font-medium">{r.from}</span>
                  <svg className="w-4 h-4 text-amber shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="text-sm text-bark font-medium">{r.to}</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted">{P.frequencyLabel}</span>
                    <span className="font-semibold text-forest">{r.frequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted">{P.transitLabel}</span>
                    <span className="font-semibold text-forest">{r.transit}</span>
                  </div>
                  <div className="pt-3 border-t border-sand/40">
                    <span className="text-muted">{P.bestForLabel} </span>
                    <span className="text-bark">{r.best}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasonal Calendar */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">{P.planAhead}</p>
            <h2 className="text-4xl font-bold text-forest" style={{ fontFamily: "var(--font-playfair)" }}>
              {P.seasonalWindows}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {P.seasons.map((s) => (
              <div key={s.label} className={`rounded-2xl p-8 border ${s.color} bg-white`}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold">{s.label}</h3>
                  <span className="text-xs font-semibold border rounded-full px-3 py-1 border-current opacity-60">{s.months}</span>
                </div>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-24 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 70% 40%, #DEC99A 0%, transparent 55%)` }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">{P.planningTips}</p>
            <h2 className="text-4xl font-bold text-cream" style={{ fontFamily: "var(--font-playfair)" }}>
              {P.orderSmarter}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {P.tips.map((t) => (
              <div key={t.title} className="bg-white/10 border border-white/15 rounded-2xl p-7 hover:bg-white/15 transition-colors flex gap-5">
                <span className="text-2xl shrink-0">{t.icon}</span>
                <div>
                  <h3 className="text-base font-semibold text-cream mb-2">{t.title}</h3>
                  <p className="text-cream/55 text-sm leading-relaxed">{t.desc}</p>
                </div>
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
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-forest text-cream font-semibold px-10 py-4 rounded-full hover:bg-forest/85 transition-colors shadow-lg text-base"
          >
            {P.contactUs}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
