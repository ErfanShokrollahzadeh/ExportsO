import Link from "next/link";

const values = [
  {
    icon: "🌱",
    title: "Authenticity",
    desc: "We source directly from growers who have practiced their craft for generations, preserving the quality that makes our produce world-renowned.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    desc: "Long-term relationships with farmers, logistics partners, and clients are at our core. We grow when our partners grow.",
  },
  {
    icon: "🔍",
    title: "Transparency",
    desc: "From farm gate to buyer, we provide full visibility into our supply chain — honest pricing, honest sourcing.",
  },
  {
    icon: "🌍",
    title: "Sustainability",
    desc: "We choose suppliers who care for their land and communities, building an import chain that lasts.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 30%, #B87333 0%, transparent 50%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-4">
            Our Story
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-cream max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            From Premium Orchards to Turkey&apos;s Tables
          </h1>
          <p className="text-cream/55 mt-5 max-w-xl text-lg leading-relaxed">
            A family-built bridge between two great cultures — united by quality, trust, and a love for exceptional produce.
          </p>
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

      {/* Our Story */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-4">
              Who We Are
            </p>
            <h2
              className="text-4xl font-bold text-forest mb-7"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              A Bridge Between Two Rich Cultures
            </h2>
            <div className="space-y-5 text-muted text-base leading-relaxed">
              <p>
                ExportsO was founded with a clear mission: to connect the extraordinary
                agricultural wealth with the vibrant, demand-driven markets of Turkey.
                We saw a gap — premium produce was underrepresented in Turkey, and Turkish
                buyers were missing out on some of the world&apos;s most celebrated fruits.
              </p>
              <p>
                Starting with world-renowned Kinnow mandarins, Chaunsa mangoes, and
                premium Aseel dates, we established direct sourcing partnerships with certified farms
                across Punjab, Sindh, and Balochistan. Every consignment that travels under the
                ExportsO name has been personally vetted for quality.
              </p>
              <p>
                As we grow, we&apos;re expanding into handicrafts, artisan goods, and home decor —
                bringing the rich artistic traditions to Turkish homes and
                businesses.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-forest rounded-2xl p-8 text-center text-cream">
              <div
                className="text-5xl font-bold mb-2 text-sand"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                3+
              </div>
              <div className="text-cream/60 text-sm">Source Regions</div>
            </div>
            <div className="bg-amber rounded-2xl p-8 text-center text-white">
              <div
                className="text-5xl font-bold mb-2"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                100%
              </div>
              <div className="text-white/70 text-sm">Direct Sourcing</div>
            </div>
            <div className="bg-sand rounded-2xl p-8 text-center text-bark col-span-2">
              <div
                className="text-5xl font-bold mb-2 text-forest"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                3+
              </div>
              <div className="text-muted text-sm">Product Categories — and growing</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-3">
              What Drives Us
            </p>
            <h2
              className="text-4xl font-bold text-forest"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Our Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-sand/40 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-semibold text-bark mb-2">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Journey Ahead */}
      <section className="py-24 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 50%, #DEC99A 0%, transparent 60%)`,
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <h2
            className="text-4xl font-bold text-cream mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            The Journey Ahead
          </h2>
          <p className="text-cream/60 text-lg mb-10 leading-relaxed">
            We are at the beginning of an exciting chapter. As our fruit imports take root
            in Turkey, we&apos;re already laying the groundwork for handicrafts, home accessories,
            and cultural goods — creating a truly unique import house from the heart of the East.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber text-white font-semibold px-8 py-4 rounded-full hover:bg-amber-light transition-colors shadow-lg"
          >
            Work With Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
