import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultancy — ExportsO",
  description:
    "Strategic trade consultancy services from ExportsO — market entry, supply chain design, regulatory compliance, and export readiness for global commerce.",
};

const offerings = [
  {
    icon: "🗺️",
    title: "Market Entry Strategy",
    desc: "Data-driven analysis of target markets, competition landscape, regulatory requirements, and optimal entry routes — before you commit capital.",
  },
  {
    icon: "⛓️",
    title: "Supply Chain Design",
    desc: "End-to-end supply chain mapping, supplier vetting, logistics network design, and cost optimization for cross-border trade operations.",
  },
  {
    icon: "📜",
    title: "Regulatory Compliance",
    desc: "Navigate import/export regulations, labelling requirements, certification standards, and customs protocols for markets across Europe and the Middle East.",
  },
  {
    icon: "🤝",
    title: "Supplier Sourcing",
    desc: "Leverage our established networks to identify, audit, and onboard vetted suppliers — reducing lead time and quality risk from day one.",
  },
  {
    icon: "📈",
    title: "Trade Finance Advisory",
    desc: "Guidance on letters of credit, trade finance instruments, currency hedging, and payment term structuring to protect your cash flow.",
  },
  {
    icon: "🎓",
    title: "Export Readiness Training",
    desc: "Workshops and one-on-one coaching for businesses preparing to enter international markets for the first time — practical, not theoretical.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "A focused 60-minute session to understand your business, goals, and the specific trade challenge you want to solve.",
  },
  {
    step: "02",
    title: "Analysis & Research",
    desc: "Our team researches your sector, target markets, and competitive landscape, producing a tailored opportunity brief.",
  },
  {
    step: "03",
    title: "Strategy Presentation",
    desc: "We present a clear, actionable strategy with prioritized recommendations, timelines, and resource requirements.",
  },
  {
    step: "04",
    title: "Implementation Support",
    desc: "Optional hands-on support as you execute — connecting you with our network of logistics, legal, and regulatory partners.",
  },
];

const clients = [
  { label: "SME Exporters", desc: "Businesses making their first foray into international trade." },
  { label: "Established Importers", desc: "Companies looking to optimize existing cross-border operations." },
  { label: "Investors", desc: "Capital allocators evaluating trade-related investment opportunities." },
  { label: "Government Bodies", desc: "Trade promotion organizations seeking market intelligence." },
];

export default function ConsultancyPage() {
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
            Trade Consultancy
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-cream max-w-3xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Expert Guidance for<br />
            <span className="text-sand">Global Trade</span>
          </h1>
          <p className="text-cream/55 mt-5 max-w-xl text-lg leading-relaxed">
            From market entry to supply chain optimization — our consultancy turns complex trade challenges into clear, executable strategies.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber text-white font-semibold px-8 py-4 rounded-full hover:bg-amber/90 transition-colors shadow-lg text-base"
            >
              Book a Consultation
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
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">What We Offer</p>
            <h2 className="text-4xl font-bold text-forest" style={{ fontFamily: "var(--font-playfair)" }}>
              Consultancy Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o) => (
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
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">Who We Work With</p>
            <h2 className="text-4xl font-bold text-forest" style={{ fontFamily: "var(--font-playfair)" }}>
              Our Clients
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clients.map((c) => (
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
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">Our Approach</p>
            <h2 className="text-4xl font-bold text-cream" style={{ fontFamily: "var(--font-playfair)" }}>
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-white/10 border border-white/15 rounded-2xl p-7 hover:bg-white/15 transition-colors">
                <p className="text-amber/60 text-xs font-bold uppercase tracking-widest mb-4">{p.step}</p>
                <h3 className="text-lg font-semibold text-cream mb-3">{p.title}</h3>
                <p className="text-cream/55 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl font-bold text-forest mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
            Let&apos;s Solve Your Trade Challenge
          </h2>
          <p className="text-muted text-lg mb-10 leading-relaxed">
            Every global trade problem has a solution. Our consultants bring the experience and network to find yours — quickly and practically.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-forest text-cream font-semibold px-10 py-4 rounded-full hover:bg-forest/85 transition-colors shadow-lg text-base"
          >
            Start the Conversation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
