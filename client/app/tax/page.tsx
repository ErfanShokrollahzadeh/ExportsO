import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Services — ExportsO",
  description:
    "Navigate import duties, VAT, customs tariffs, and cross-border tax compliance with ExportsO's expert guidance for trade into Turkey.",
};

const services = [
  {
    icon: "📋",
    title: "Import Duty Classification",
    desc: "We identify the correct HS tariff codes for your goods, ensuring accurate duty calculations and avoiding costly misclassification penalties.",
  },
  {
    icon: "🧾",
    title: "VAT & Customs Compliance",
    desc: "Full guidance on Turkish VAT obligations for imported goods, deferred VAT schemes, and exemption eligibility for qualifying transactions.",
  },
  {
    icon: "📊",
    title: "Trade Tax Planning",
    desc: "Strategic structuring of import transactions to optimize your effective tax rate while remaining fully compliant with Turkish and international law.",
  },
  {
    icon: "🔄",
    title: "Duty Drawback & Refunds",
    desc: "We identify and process legitimate duty refund claims for re-exported goods, overpaid duties, and eligible relief programs.",
  },
  {
    icon: "📁",
    title: "Documentation Audit",
    desc: "Pre-shipment review of all commercial documents to ensure tax compliance before goods arrive at the border — avoiding delays and fines.",
  },
  {
    icon: "🌐",
    title: "Cross-Border Tax Advisory",
    desc: "Navigate the tax treaty landscape between trading nations to minimize double taxation and structure transactions efficiently.",
  },
];

const faqs = [
  {
    q: "What import duties apply to fresh produce entering Turkey?",
    a: "Turkey applies ad valorem customs duties that vary by HS code and country of origin. Fresh fruits typically fall between 20–45%. Free Trade Agreement benefits may reduce this significantly.",
  },
  {
    q: "Is VAT charged on imported goods into Turkey?",
    a: "Yes. Imported goods are subject to Turkish VAT (KDV) at the point of customs clearance, typically at 1%, 8%, or 20% depending on the product category.",
  },
  {
    q: "Can import duties be deferred or suspended?",
    a: "Turkey offers inward processing regimes and bonded warehouse facilities that allow deferral of duties for goods that will be re-exported or further processed.",
  },
  {
    q: "Do I need a tax representative in Turkey?",
    a: "Non-resident importers are generally required to appoint a customs broker (gümrük müşaviri) licensed in Turkey. ExportsO's network includes vetted, licensed brokers.",
  },
];

export default function TaxPage() {
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
            Tax & Duty Services
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-cream max-w-3xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Trade Smarter,<br />
            <span className="text-sand">Pay Less Tax</span>
          </h1>
          <p className="text-cream/55 mt-5 max-w-xl text-lg leading-relaxed">
            Expert guidance on import duties, VAT, customs tariffs, and cross-border tax compliance — so you pay exactly what you owe, and not a cent more.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {["Import Duties", "VAT Compliance", "HS Classification", "Duty Drawback"].map((tag) => (
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
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">What We Cover</p>
            <h2 className="text-4xl font-bold text-forest" style={{ fontFamily: "var(--font-playfair)" }}>
              Our Tax Services
            </h2>
            <p className="text-muted mt-3 max-w-lg mx-auto text-sm">
              End-to-end tax support for importers, exporters, and cross-border traders operating in and around Turkey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
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
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">Common Questions</p>
            <h2 className="text-4xl font-bold text-forest" style={{ fontFamily: "var(--font-playfair)" }}>
              Tax FAQ
            </h2>
          </div>
          <div className="space-y-5">
            {faqs.map((f) => (
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
            Need Tax Clarity?
          </h2>
          <p className="text-cream/55 text-lg mb-10 leading-relaxed">
            Our team handles the complexity so you can focus on growing your trade. Reach out for a complimentary tax assessment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-amber text-white font-semibold px-10 py-4 rounded-full hover:bg-amber/90 transition-colors shadow-lg text-base"
          >
            Book a Tax Consultation
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
