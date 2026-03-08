const contactCards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Email",
    value: "info@exportso.com",
    href: "mailto:info@exportso.com",
    note: "We reply within 24 hours",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: "Instagram",
    value: "@exportso",
    href: "https://instagram.com/exportso",
    note: "Follow us for updates",
    },
    {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "Message us directly",
    href: "https://wa.me/900000000000",
    note: "All days, 24/7",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    label: "Location",
    value: "Istanbul, Turkey",
    href: null,
    note: "Sourcing from Pakistan & Iran",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-24 bg-forest relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, #DEC99A 0%, transparent 50%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <p className="text-amber text-sm font-semibold uppercase tracking-widest mb-4">
            Reach Out
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-cream max-w-2xl leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Let&apos;s Talk Business
          </h1>
          <p className="text-cream/55 mt-5 max-w-xl text-lg leading-relaxed">
            Whether you&apos;re a retailer, distributor, or wholesaler in Turkey — we&apos;re
            here to discuss how we can work together.
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

      {/* Contact Cards */}
      <section className="py-24 bg-cream">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <h2
              className="text-3xl font-bold text-forest"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ways to Reach Us
            </h2>
            <p className="text-muted mt-3 text-sm">Choose whichever works best for you.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactCards.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl p-7 shadow-sm border border-sand/40 flex items-start gap-5 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-forest/10 text-forest flex items-center justify-center shrink-0 group-hover:bg-forest group-hover:text-cream transition-colors">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-bark font-semibold hover:text-forest transition-colors block mb-1"
                      {...(item.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-bark font-semibold mb-1">{item.value}</p>
                  )}
                  <p className="text-muted/60 text-xs">{item.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Regions block */}
          <div className="mt-12 bg-forest rounded-2xl p-10 text-center">
            <p className="text-amber text-xs font-semibold uppercase tracking-widest mb-5">
              Operational Regions
            </p>
            <div
              className="flex flex-wrap justify-center gap-8 text-cream text-xl font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >

              <span className="text-cream/25 font-light">·</span>
              <span>🇹🇷 Turkey</span>
              <span className="text-cream/25 font-light">·</span>

            </div>
            <p className="text-cream/45 text-sm mt-5 max-w-md mx-auto">
              We operate sourcing networks across Pakistan and Iran, with primary import and
              distribution into the Turkish market.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
