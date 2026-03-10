import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invest — ExportsO",
  description:
    "Explore investment opportunities with ExportsO. Partner with us to tap into high-growth global trade corridors and premium commodity markets.",
};

const opportunities = [
  {
    icon: "🌿",
    title: "Agricultural Commodities",
    desc: "Invest in the sourcing and distribution of premium fresh produce — a resilient, high-demand sector with year-round cycles and growing export volumes.",
    return: "12–18% projected",
  },
  {
    icon: "🏺",
    title: "Artisan & Handicraft Trade",
    desc: "Back the import of exclusive handcrafted goods into European and Turkish markets. Low competition, high margin, culturally differentiated products.",
    return: "15–22% projected",
  },
  {
    icon: "🚢",
    title: "Logistics Infrastructure",
    desc: "Co-invest in cold-chain logistics capabilities and warehousing that underpin every shipment — essential infrastructure with stable, long-term returns.",
    return: "8–14% projected",
  },
  {
    icon: "🌍",
    title: "Market Expansion",
    desc: "Fund our geographic expansion into new destination markets across Europe and the Middle East, amplifying existing supply chain strength.",
    return: "20–30% projected",
  },
];

const stats = [
  { value: "4+", label: "Active Trade Routes" },
  { value: "100%", label: "On-time Delivery Rate" },
  { value: "₺0", label: "Outstanding Defaults" },
  { value: "2x", label: "Target Volume Growth" },
];

const steps = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "Schedule a call with our investment team. We walk you through our operations, financials, and current opportunities in detail.",
  },
  {
    step: "02",
    title: "Due Diligence Package",
    desc: "Receive a comprehensive investment deck including supply chain data, projected returns, risk analysis, and legal structure.",
  },
  {
    step: "03",
    title: "Term Agreement",
    desc: "We agree on investment size, duration, and return structure. All agreements are governed by Turkish commercial law.",
  },
  {
    step: "04",
    title: "Active Partnership",
    desc: "Your capital goes to work. You receive regular reporting, shipment updates, and quarterly financial statements.",
  },
];

export default function InvestPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #4F7A35 0%, transparent 55%), radial-gradient(circle at 85% 20%, #B87333 0%, transparent 45%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-4">
            Investment Opportunities
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-cream max-w-3xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Grow With Global Trade
          </h1>
          <p className="text-cream/55 mt-5 max-w-xl text-lg leading-relaxed">
            ExportsO offers structured investment partnerships in high-growth international trade — backed by real assets, real shipments, and transparent reporting.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber text-white font-semibold px-8 py-4 rounded-full hover:bg-amber/90 transition-colors shadow-lg text-base"
            >
              Request Investment Pack
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

      {/* Stats */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
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

      {/* Opportunities */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">Where Your Capital Works</p>
            <h2 className="text-4xl font-bold text-forest" style={{ fontFamily: "var(--font-playfair)" }}>
              Investment Sectors
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {opportunities.map((o) => (
              <div key={o.title} className="bg-white rounded-2xl p-8 shadow-sm border border-sand/40 hover:shadow-md hover:-translate-y-0.5 transition-all group">
                <div className="text-4xl mb-5">{o.icon}</div>
                <h3 className="text-xl font-bold text-forest mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                  {o.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">{o.desc}</p>
                <div className="inline-flex items-center gap-2 bg-amber/10 border border-amber/25 rounded-full px-4 py-1.5">
                  <span className="w-1.5 h-1.5 bg-amber rounded-full" />
                  <span className="text-amber text-xs font-semibold">{o.return}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 80% 50%, #DEC99A 0%, transparent 55%)` }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-4xl font-bold text-cream" style={{ fontFamily: "var(--font-playfair)" }}>
              The Investment Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.step} className="bg-white/10 border border-white/15 rounded-2xl p-7 hover:bg-white/15 transition-colors">
                <p className="text-amber/60 text-xs font-bold uppercase tracking-widest mb-4">{s.step}</p>
                <h3 className="text-lg font-semibold text-cream mb-3">{s.title}</h3>
                <p className="text-cream/55 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl font-bold text-forest mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
            Ready to Invest?
          </h2>
          <p className="text-muted text-lg mb-10 leading-relaxed">
            Join a growing network of investors backing real trade, real products, and real returns. We&apos;re selective about our partners — reach out to start the conversation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-forest text-cream font-semibold px-10 py-4 rounded-full hover:bg-forest/85 transition-colors shadow-lg text-base"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
