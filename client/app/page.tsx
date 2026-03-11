"use client";

import Link from "next/link";
import VisitorCounter from "./components/VisitorCounter";
import { useLanguage } from "./context/LanguageContext";
import { translations } from "./lib/translations";

export default function HomePage() {
  const { lang } = useLanguage();
  const T = translations[lang];
  const H = T.home;

  const stats = [
    { value: "100%", label: H.stats.freshProduce },
    { value: "Direct", label: H.stats.farmToDestination },
    { value: "Premium", label: H.stats.qualityGuaranteed },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-forest overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 60%, #4F7A35 0%, transparent 50%), radial-gradient(circle at 80% 20%, #B87333 0%, transparent 45%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center pt-24 pb-32">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-amber rounded-full animate-pulse" />
            <span className="text-cream/80 text-xs tracking-widest uppercase font-medium">
              {H.badge}
            </span>
          </div>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6 max-w-4xl mx-auto"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {H.heroTitle1}
            <br />
            <span className="text-sand">{H.heroTitle2}</span>
          </h1>
          <p className="text-lg sm:text-xl text-cream/65 max-w-2xl mx-auto mb-12 leading-relaxed">
            {H.heroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-amber text-white font-semibold px-8 py-4 rounded-full hover:bg-amber-light transition-colors shadow-lg text-base"
            >
              {H.exploreProducts}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-cream font-medium px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-base"
            >
              {H.ourStory}
            </Link>
          </div>
          <div className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-white/15 pt-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-3xl font-bold text-sand mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.value}
                </div>
                <div className="text-xs text-cream/50 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-16 fill-cream"
          >
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">
              {H.whyUs}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-forest"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {H.builtOnTrust}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {H.features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-sand/40 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-5">{f.icon}</div>
                <h3 className="text-xl font-semibold text-bark mb-3">{f.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">
              {H.whatWeOffer}
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-forest"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {H.ourCategories}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {H.categories.map((cat) => (
              <div
                key={cat.title}
                className={`relative bg-white rounded-2xl overflow-hidden shadow-sm border transition-all ${
                  cat.available
                    ? "border-sand/40 hover:shadow-lg hover:-translate-y-1"
                    : "border-sand/20 opacity-75"
                }`}
              >
                {!cat.available && (
                  <div className="absolute top-4 right-4 bg-amber/15 border border-amber/30 text-amber text-xs font-semibold px-3 py-1 rounded-full z-10">
                    {H.comingSoon}
                  </div>
                )}
                <div className="h-40 bg-linear-to-br from-forest/10 to-sand/30 flex items-center justify-center text-7xl">
                  {cat.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-bark mb-2">{cat.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-5">{cat.description}</p>
                  {cat.available ? (
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 text-forest font-medium text-sm hover:text-forest-mid transition-colors"
                    >
                      {H.viewProducts}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  ) : (
                    <span className="text-muted/60 text-sm">{H.availableSoon}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Number of views the site */}
      <VisitorCounter />

      {/* CTA Banner */}
      <section className="py-24 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #B87333 0%, transparent 60%)`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2
            className="text-4xl lg:text-5xl font-bold text-cream mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {H.ctaTitle}
          </h2>
          <p className="text-cream/65 text-lg mb-10 leading-relaxed">
            {H.ctaSubtitle}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber text-white font-semibold px-8 py-4 rounded-full hover:bg-amber-light transition-colors shadow-lg text-base"
          >
            {H.contactUsToday}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
