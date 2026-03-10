import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ask Questions — ExportsO",
  description:
    "Have questions about importing, products, pricing, or trade with ExportsO? Find answers to the most common questions or get in touch directly.",
};

const categories = [
  {
    label: "Products & Sourcing",
    icon: "🍊",
    faqs: [
      {
        q: "What products does ExportsO currently offer?",
        a: "We currently specialize in premium fresh fruits including Kinnow mandarins, Chaunsa mangoes, Sindhri mangoes, Aseel dates, guava, and pomegranate. We are expanding into handicrafts, home accessories, and decor.",
      },
      {
        q: "Where are your products sourced from?",
        a: "Our fresh produce is sourced from certified farms and orchards across agriculturally rich regions. All suppliers are vetted for quality, food safety compliance, and ethical practices.",
      },
      {
        q: "Are your products certified for export?",
        a: "Yes. All fresh produce is accompanied by Phytosanitary Certificates, Certificates of Origin, and other documents required by Turkish import authorities. Halal certification is available on request.",
      },
      {
        q: "Can I request a custom product or variety?",
        a: "We welcome special requests. If you are looking for a specific product, variety, grade, or packaging configuration, contact our sourcing team and we will assess feasibility.",
      },
    ],
  },
  {
    label: "Orders & Pricing",
    icon: "💼",
    faqs: [
      {
        q: "What is the minimum order quantity (MOQ)?",
        a: "For fresh fruits, the standard minimum is one full pallet (approximately 500–1,000 kg depending on product). Container-load orders receive preferential pricing. Contact us for product-specific MOQs.",
      },
      {
        q: "How do I get a price quote?",
        a: "Submit an inquiry via our Contact page with the product, grade, quantity, and your location. We will respond with a proforma invoice within 24–48 hours.",
      },
      {
        q: "What payment terms do you accept?",
        a: "We accept T/T (bank transfer), Letter of Credit (L/C) at sight, and for established clients, deferred payment terms can be arranged. A 30–50% advance deposit is standard for new buyers.",
      },
      {
        q: "Do prices include shipping and duties?",
        a: "Prices are quoted CIF (Cost, Insurance, Freight) to the destination port by default. Turkish customs duties, VAT, and port handling are the buyer's responsibility unless DDP terms are agreed.",
      },
    ],
  },
  {
    label: "Shipping & Logistics",
    icon: "🚢",
    faqs: [
      {
        q: "How long does shipping take?",
        a: "Sea freight takes approximately 18–25 days to Istanbul/Mersin. Air freight is 3–5 days and is available for urgent or premium shipments at higher cost.",
      },
      {
        q: "How is freshness maintained during transit?",
        a: "All fresh produce is shipped in refrigerated (reefer) containers maintaining 2–8°C. Cold-chain integrity is monitored end-to-end from packing to port arrival.",
      },
      {
        q: "Do you handle customs clearance in Turkey?",
        a: "Our network of licensed customs brokers in Turkey can manage clearance on your behalf. This service is available under DDP (Delivered Duty Paid) terms for established clients.",
      },
      {
        q: "Can you deliver directly to our warehouse?",
        a: "Yes. We offer door-to-door delivery into Turkey under DDP terms. This covers all transport, customs clearance, duties, and final-mile delivery to your specified address.",
      },
    ],
  },
  {
    label: "Working With Us",
    icon: "🤝",
    faqs: [
      {
        q: "How do I become a buyer?",
        a: "Simply reach out via our Contact page. We will arrange an introductory call, discuss your requirements, and issue a proforma invoice for your first order. No long-term commitment required.",
      },
      {
        q: "Do you work with small retailers?",
        a: "Yes, provided minimum order quantities are met. We work with retailers, wholesalers, distributors, importers, and end-buyers of all sizes.",
      },
      {
        q: "Do you offer exclusivity agreements?",
        a: "Regional exclusivity can be negotiated for high-volume, long-term buyers. Contact us to discuss terms and criteria.",
      },
      {
        q: "How do I track my shipment?",
        a: "Once a shipment is dispatched, you receive a Bill of Lading or Air Waybill with a tracking reference. Our team provides proactive updates at key milestones.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 40%, #B87333 0%, transparent 55%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-4">
            Help Center
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-cream max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ask Us Anything
          </h1>
          <p className="text-cream/55 mt-5 max-w-xl text-lg leading-relaxed">
            Browse answers to the most common questions about our products, pricing, shipping, and how to get started working with ExportsO.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((c) => (
              <span key={c.label} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-cream/70 text-xs font-medium px-3 py-1.5 rounded-full">
                {c.icon} {c.label}
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

      {/* FAQ Categories */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-16">
          {categories.map((cat) => (
            <div key={cat.label}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-3xl">{cat.icon}</span>
                <h2 className="text-2xl font-bold text-forest" style={{ fontFamily: "var(--font-playfair)" }}>
                  {cat.label}
                </h2>
              </div>
              <div className="space-y-4">
                {cat.faqs.map((f) => (
                  <div key={f.q} className="bg-white rounded-2xl p-7 shadow-sm border border-sand/40 hover:shadow-md transition-shadow">
                    <h3 className="text-base font-semibold text-forest mb-3 flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-amber/15 text-amber text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">?</span>
                      {f.q}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed pl-8">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 bg-forest relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 60% 50%, #DEC99A 0%, transparent 55%)` }} />
        <div className="relative max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl font-bold text-cream mb-5" style={{ fontFamily: "var(--font-playfair)" }}>
            Still Have Questions?
          </h2>
          <p className="text-cream/55 text-lg mb-10 leading-relaxed">
            Can&apos;t find the answer you&apos;re looking for? Our team responds to all inquiries within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-amber text-white font-semibold px-10 py-4 rounded-full hover:bg-amber/90 transition-colors shadow-lg text-base"
          >
            Contact Our Team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
