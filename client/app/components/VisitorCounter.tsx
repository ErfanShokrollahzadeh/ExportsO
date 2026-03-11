"use client";

import { useEffect, useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

function AnimatedCount({ target }: { target: number }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const duration = 1200;
    const start = performance.now();
    const from = 0;

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(from + (target - from) * eased));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target]);

  return <>{display.toLocaleString()}</>;
}

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const { lang } = useLanguage();
  const T = translations[lang].visitor;

  useEffect(() => {
    async function trackVisit() {
      const alreadyCounted = sessionStorage.getItem("visit_counted");
      if (!alreadyCounted) {
        const res = await fetch("/api/visitors", { method: "POST" });
        const data = await res.json();
        sessionStorage.setItem("visit_counted", "1");
        setCount(data.count);
      } else {
        const res = await fetch("/api/visitors");
        const data = await res.json();
        setCount(data.count);
      }
    }
    trackVisit();
    // Slight delay so the fade-in is noticeable
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="py-14 bg-linear-to-br from-forest-mid via-forest to-[#3a6027] relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(184,115,51,0.18) 0%, transparent 70%)`,
        }}
      />

      <div
        className={`relative max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Card */}
        <div className="flex items-center gap-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-5 shadow-xl">
          {/* Emoji with pulse ring */}
          <div className="relative shrink-0">
            <span className="text-4xl select-none leading-none">👀</span>
            <span className="absolute -inset-1 rounded-full border border-amber/40 animate-ping opacity-60" />
          </div>

          <div className="flex flex-col">
            <span className="text-cream/60 text-xs uppercase tracking-widest font-medium mb-0.5">
              {T.totalVisitors}
            </span>
            <span
              className="text-4xl font-bold text-sand leading-none tabular-nums"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {count === null ? (
                <span className="inline-block w-20 h-9 bg-white/10 rounded-lg animate-pulse" />
              ) : (
                <AnimatedCount target={count} />
              )}
            </span>
            <span className="text-cream/50 text-xs mt-1">
              {count === null
                ? T.loading
                : `${count === 1 ? T.visitedSingular : T.visitedPlural}`}
            </span>
          </div>
        </div>

        {/* Live badge */}
        <div className="flex items-center gap-2 bg-amber/20 border border-amber/40 rounded-full px-4 py-2 text-amber text-xs font-semibold uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
          {T.liveCounter}
        </div>
      </div>
    </section>
  );
}
