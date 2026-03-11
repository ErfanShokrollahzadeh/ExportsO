"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

export default function ConsultancyPage() {
  const { lang } = useLanguage();
  const P = translations[lang].consultancy;

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 60% 30%, #B87333 0%, transparent 50%), radial-gradient(circle at 10% 80%, #DEC99A 0%, transparent 45%)`,
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
              {P.bookConsultation}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 fill-cream">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">{P.whatWeOffer}</p>
            <h2 className="text-4xl font-bold text-forest" style={{ fontFamily: "var(--font-playfair)" }}>
              {P.consultancyServices}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {P.offerings.map((o) => (
              <div key={o.title} className="bg-white rounded-2xl p-7 shadow-sm border border-sand/40 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <div className="text-3xl mb-5">{o.icon}</div>
                <h3 className="text-lg font-semibold text-bark mb-3 group-hover:text-forest transition-colors">{o.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">{P.whoWeWorkWith}</p>
            <h2 className="text-4xl font-bold text-forest" style={{ fontFamily: "var(--font-playfair)" }}>
              {P.ourClients}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {P.clients.map((c) => (
              <div key={c.label} className="bg-white rounded-2xl p-8 text-center shadow-sm border border-sand/40">
                <h3 className="text-lg font-bold text-forest mb-3" style={{ fontFamily: "var(--font-playfair)" }}>{c.label}</h3>
                <p className="text-muted text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 30% 60%, #DEC99A 0%, transparent 55%)` }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">{P.ourApproach}</p>
            <h2 className="text-4xl font-bold text-cream" style={{ fontFamily: "var(--font-playfair)" }}>
              {P.howWeWork}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {P.process.map((step) => (
              <div key={step.step} className="bg-white/10 border border-white/15 rounded-2xl p-7 hover:bg-white/15 transition-colors">
                <p className="text-amber/60 text-xs font-bold uppercase tracking-widest mb-4">{step.step}</p>
                <h3 className="text-lg font-semibold text-cream mb-3">{step.title}</h3>
                <p className="text-cream/55 text-sm leading-relaxed">{step.desc}</p>
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
            {P.startConversation}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
