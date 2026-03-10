import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve — ExportsO",
  description:
    "ExportsO serves a wide range of industries — from retail and hospitality to food manufacturing and e-commerce. Discover how we support your sector.",
};

const industries = [
  {
    icon: "🛒",
    title: "Retail & Supermarkets",
    desc: "Premium fresh produce and artisan goods for supermarket chains, specialty grocery stores, and independent retailers seeking differentiated, quality stock.",
    highlights: ["Pre-packed & bulk formats", "Custom labelling available", "Consistent grading"],
  },
  {
    icon: "🏨",
    title: "Hospitality & Catering",
    desc: "Hotels, restaurants, and catering companies demanding the highest quality seasonal fruits for menus, buffets, and gift hampers.",
    highlights: ["Premium-grade selection", "Flexible order sizes", "Seasonal menus supported"],
  },
  {
    icon: "🏭",
    title: "Food Manufacturing",
    desc: "Juice producers, confectionery manufacturers, and food processors sourcing high-Brix fruits and raw ingredients at scale with consistent quality specs.",
    highlights: ["Industrial-grade volumes", "Custom specs & grades", "Lab reports available"],
  },
  {
    icon: "📦",
    title: "Wholesale & Distribution",
    desc: "Importers and distributors building out their product range with premium, traceable goods from established trade corridors.",
    highlights: ["Container-load pricing", "Flexible Incoterms", "Full documentation"],
  },
  {
    icon: "🛍️",
    title: "E-Commerce & Gift",
    desc: "Online retailers and gift box curators sourcing premium dates, artisan crafts, and specialty fruits for high-value gifting and DTC channels.",
    highlights: ["Premium packaging", "Small batch possible", "Unique product stories"],
  },
  {
    icon: "🏗️",
    title: "Corporate & Institutional",
    desc: "Corporate gift programs, government procurement, and institutional buyers requiring certified, traceable goods with robust documentation.",
    highlights: ["Bulk corporate orders", "Halal certified", "Full audit trail"],
  },
];

const stats = [
  { value: "6+", label: "Industries Served" },
  { value: "100%", label: "Certified Supply Chain" },
  { value: "B2B", label: "Focused Approach" },
  { value: "Custom", label: "Solutions Available" },
];

const differentiators = [
  {
    title: "Direct Farm Relationships",
    desc: "We source from farms we know personally — giving you traceability, quality consistency, and supply security that intermediaries can't offer.",
  },
  {
    title: "Full Documentation",
    desc: "Every shipment comes with a complete documentation package: Certificate of Origin, Phytosanitary, Commercial Invoice, and Packing List.",
  },
  {
    title: "Flexible Commercial Terms",
    desc: "From FOB to DDP, we adapt to your business model. We work within your procurement processes, not against them.",
  },
  {
    title: "Dedicated Account Management",
    desc: "Every client gets a dedicated contact who understands your sector and requirements — proactive communication, not reactive support.",
  },
];

export default function IndustryPage() {
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
            Sectors We Serve
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-cream max-w-3xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Built for Every<br />
            <span className="text-sand">Industry</span>
          </h1>
          <p className="text-cream/55 mt-5 max-w-xl text-lg leading-relaxed">
            Whether you&apos;re a supermarket buyer, a food manufacturer, or a premium gift retailer — ExportsO has the product, documentation, and logistics to serve your sector.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-amber text-white font-semibold px-8 py-4 rounded-full hover:bg-amber/90 transition-colors shadow-lg text-base"
            >
              Discuss Your Requirements
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/25 text-cream font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-colors text-base"
            >
              View Products
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

      {/* Industries */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">Who We Work With</p>
            <h2 className="text-4xl font-bold text-forest" style={{ fontFamily: "var(--font-playfair)" }}>
              Industries We Serve
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind) => (
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
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-4xl font-bold text-cream" style={{ fontFamily: "var(--font-playfair)" }}>
              The ExportsO Difference
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((d) => (
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
            Let&apos;s Work Together
          </h2>
          <p className="text-muted text-lg mb-10 leading-relaxed">
            Tell us about your business and what you&apos;re looking for. We&apos;ll match you with the right products, terms, and logistics to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-forest text-cream font-semibold px-10 py-4 rounded-full hover:bg-forest/85 transition-colors shadow-lg text-base"
            >
              Get in Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-forest text-forest font-semibold px-10 py-4 rounded-full hover:bg-forest/5 transition-colors text-base"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
