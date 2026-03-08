import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export & Import Rules — ExportsO",
  description:
    "Learn about ExportsO's export and import procedures, shipping regulations, customs requirements, and delivery terms for trade between Pakistan and Turkey.",
};

const exportSteps = [
  {
    step: "01",
    title: "Order & Agreement",
    desc: "Buyer submits an inquiry with required product, quantity, and destination. ExportsO confirms availability, pricing, and a formal proforma invoice is issued.",
  },
  {
    step: "02",
    title: "Quality Inspection",
    desc: "Each consignment is inspected at the farm or packing facility. We verify produce grade, weight, packaging standards, and cold-chain readiness before dispatch.",
  },
  {
    step: "03",
    title: "Export Documentation",
    desc: "We handle all Pakistani export paperwork: Phytosanitary Certificate, Certificate of Origin, Packing List, and Commercial Invoice in compliance with Turkish import requirements.",
  },
  {
    step: "04",
    title: "Shipment & Logistics",
    desc: "Goods are dispatched via sea freight (Karachi → Istanbul/Mersin) or air freight for time-sensitive orders. Cold-chain containers are used for fresh produce.",
  },
  {
    step: "05",
    title: "Customs Clearance (Turkey)",
    desc: "Our local logistics partners in Turkey manage Turkish customs procedures, import duties, and VAT declarations on behalf of the buyer or as agreed.",
  },
  {
    step: "06",
    title: "Last-Mile Delivery",
    desc: "Once cleared, goods are delivered to the buyer's warehouse or distribution center within Turkey. Delivery confirmation and final invoice are issued.",
  },
];

const documents = [
  {
    icon: "📄",
    title: "Commercial Invoice",
    desc: "Issued by ExportsO detailing product, quantity, unit price, total value, and Incoterm.",
  },
  {
    icon: "📦",
    title: "Packing List",
    desc: "Item-by-item breakdown of packaging — box count, weights (gross/net), and dimensions.",
  },
  {
    icon: "🌿",
    title: "Phytosanitary Certificate",
    desc: "Mandatory for all fresh produce. Issued by Pakistan's Department of Plant Protection (DPP), confirming the shipment is pest and disease free.",
  },
  {
    icon: "🏛️",
    title: "Certificate of Origin",
    desc: "Issued by the Pakistan Chamber of Commerce. Required by Turkish customs to determine applicable import duty rates.",
  },
  {
    icon: "🚢",
    title: "Bill of Lading / AWB",
    desc: "Transport document issued by the carrier confirming receipt of goods and terms of delivery.",
  },
  {
    icon: "✅",
    title: "Halal Certificate (if required)",
    desc: "Available on request for food products where Turkish buyers or end-markets require Halal certification.",
  },
];

const incoterms = [
  {
    term: "FOB",
    full: "Free On Board",
    desc: "ExportsO delivers goods onto the vessel at Karachi Port. The buyer bears all costs and risks from that point.",
    recommended: false,
  },
  {
    term: "CIF",
    full: "Cost, Insurance & Freight",
    desc: "ExportsO covers cost, insurance, and freight to the destination port (Istanbul / Mersin). Buyer handles Turkish customs and onwards.",
    recommended: true,
  },
  {
    term: "CFR",
    full: "Cost and Freight",
    desc: "ExportsO covers freight to destination port. Buyer arranges cargo insurance independently.",
    recommended: false,
  },
  {
    term: "DDP",
    full: "Delivered Duty Paid",
    desc: "ExportsO handles everything including Turkish customs duties and delivery to buyer's premises. Available for established clients.",
    recommended: false,
  },
];

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "MOQ varies by product. For fresh fruits, the standard minimum is one full pallet (typically 500–1,000 kg). Container-load orders receive preferential pricing. Contact us for specifics.",
  },
  {
    q: "How long does shipping take from Pakistan to Turkey?",
    a: "Sea freight from Karachi to Istanbul/Mersin takes approximately 18–25 days. Air freight is 3–5 days and is available for urgent or premium shipments at higher cost.",
  },
  {
    q: "Are Turkish import duties included in your pricing?",
    a: "By default, prices are quoted CIF destination port. Turkish customs duties, VAT, and port handling are the buyer's responsibility unless DDP terms are agreed.",
  },
  {
    q: "How is freshness maintained during transit?",
    a: "All fresh produce is transported in refrigerated (reefer) containers maintaining 2–8°C throughout the shipment. Cold-chain integrity is monitored end-to-end.",
  },
  {
    q: "Do you handle the Certificate of Origin?",
    a: "Yes. ExportsO obtains the Certificate of Origin from the relevant Pakistani Chamber of Commerce as part of standard export documentation.",
  },
  {
    q: "What payment terms do you accept?",
    a: "We accept T/T (bank transfer), Letter of Credit (L/C) at sight, and for established clients, deferred payment terms can be arranged. 30–50% advance is standard for new buyers.",
  },
];

export default function ShippingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 60% 40%, #DEC99A 0%, transparent 55%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-4">
            Trade Information
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-cream max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Export & Import Rules
          </h1>
          <p className="text-cream/55 mt-5 max-w-xl text-lg leading-relaxed">
            Everything you need to know about our shipping procedures, required documentation,
            customs compliance, and delivery terms for trade between Pakistan and Turkey.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {["Pakistan → Turkey", "Sea & Air Freight", "Full Documentation Support", "Cold-Chain Logistics"].map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-cream/70 text-xs font-medium px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="w-full h-12 fill-cream"
          >
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* Export Process */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">
              Step by Step
            </p>
            <h2
              className="text-4xl font-bold text-forest"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              How an Order Works
            </h2>
            <p className="text-muted mt-3 max-w-xl mx-auto text-sm">
              From inquiry to delivery — a clear overview of our end-to-end export process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exportSteps.map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-2xl p-7 border border-sand/40 shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="text-4xl font-bold text-forest/15 mb-4 leading-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {s.step}
                </div>
                <h3 className="text-lg font-semibold text-bark mb-2">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">
              Compliance
            </p>
            <h2
              className="text-4xl font-bold text-forest"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Required Documentation
            </h2>
            <p className="text-muted mt-3 max-w-xl mx-auto text-sm">
              All shipments are accompanied by a full set of legally required export and import
              documents. ExportsO prepares and manages these on behalf of the buyer.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {documents.map((doc) => (
              <div
                key={doc.title}
                className="bg-white rounded-2xl p-6 border border-sand/40 shadow-sm flex gap-4"
              >
                <div className="text-3xl shrink-0 mt-0.5">{doc.icon}</div>
                <div>
                  <h3 className="text-base font-semibold text-bark mb-1.5">{doc.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{doc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incoterms */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">
              Delivery Terms
            </p>
            <h2
              className="text-4xl font-bold text-forest"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Incoterms We Offer
            </h2>
            <p className="text-muted mt-3 max-w-xl mx-auto text-sm">
              We are flexible on delivery terms. Our default and recommended Incoterm is{" "}
              <span className="font-semibold text-bark">CIF</span> — we handle freight and
              insurance to the Turkish port.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {incoterms.map((inc) => (
              <div
                key={inc.term}
                className={`rounded-2xl p-7 border transition-shadow hover:shadow-md ${
                  inc.recommended
                    ? "bg-forest text-cream border-forest"
                    : "bg-white text-bark border-sand/40 shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span
                      className={`text-2xl font-bold ${inc.recommended ? "text-sand" : "text-forest"}`}
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {inc.term}
                    </span>
                    <p className={`text-xs mt-0.5 ${inc.recommended ? "text-cream/55" : "text-muted"}`}>
                      {inc.full}
                    </p>
                  </div>
                  {inc.recommended && (
                    <span className="bg-amber text-white text-xs font-semibold px-2.5 py-1 rounded-full shrink-0">
                      Recommended
                    </span>
                  )}
                </div>
                <p className={`text-sm leading-relaxed ${inc.recommended ? "text-cream/70" : "text-muted"}`}>
                  {inc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">
              Common Questions
            </p>
            <h2
              className="text-4xl font-bold text-forest"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-sand/40 shadow-sm">
                <h3 className="text-base font-semibold text-bark mb-2">{faq.q}</h3>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, #B87333 0%, transparent 60%)`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2
            className="text-4xl font-bold text-cream mb-5"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Have a Specific Requirement?
          </h2>
          <p className="text-cream/60 text-base mb-9 max-w-xl mx-auto leading-relaxed">
            Every trade relationship is different. Get in touch and we&apos;ll walk you through the
            process, paperwork, and terms tailored to your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber text-white font-semibold px-8 py-4 rounded-full hover:bg-amber-light transition-colors shadow-lg"
          >
            Talk to Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
