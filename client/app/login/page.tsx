"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

type LoginForm = {
  username: string;
  password: string;
};

export default function LoginPage() {
  const [form, setForm] = useState<LoginForm>({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { lang } = useLanguage();
  const T = translations[lang].loginPage;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch(`${API_BASE}/api/auth/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username.trim(),
          password: form.password,
        }),
      });
      const data = (await res.json()) as unknown;

      const pickError = (payload: unknown): string | undefined => {
        if (!payload || typeof payload !== "object") return undefined;
        const record = payload as Record<string, unknown>;
        if (typeof record.detail === "string") return record.detail;
        if (Array.isArray(record.non_field_errors) && typeof record.non_field_errors[0] === "string") {
          return record.non_field_errors[0];
        }
        const firstValue = Object.values(record)[0];
        if (Array.isArray(firstValue) && typeof firstValue[0] === "string") return firstValue[0];
        if (typeof firstValue === "string") return firstValue;
        return undefined;
      };

      if (!res.ok) {
        throw new Error(pickError(data) || "Unable to log in");
      }

      const token = typeof (data as { token?: string }).token === "string" ? (data as { token?: string }).token : undefined;
      const username = (data as { user?: { username?: string } })?.user?.username;
      if (token) localStorage.setItem("authToken", token);
      setSuccess(`Welcome back, ${username || form.username}!`);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-bark via-[#713939] to-forest text-cream">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-18 lg:py-24">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          <div className="bg-white/60 border border-sand/60 rounded-2xl shadow-xl backdrop-blur p-8 lg:p-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-bark/60 font-semibold">{T.heading}</p>
                <h1 className="text-3xl lg:text-4xl font-bold mt-1" style={{ fontFamily: "var(--font-playfair)" }}>
                  {T.title}
                </h1>
              </div>
              <span className="px-3 py-1 rounded-full bg-forest/10 text-forest text-xs font-semibold border border-forest/20">
                {T.secure}
              </span>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-bark/80" htmlFor="username">
                  {T.username}
                </label>
                <input
                  id="username"
                  name="username"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  className="w-full rounded-lg border border-sand/70 bg-white/90 px-4 py-3 text-bark placeholder:text-bark/60 focus:outline-none focus:ring-2 focus:ring-forest/40"
                  placeholder="acme_trader"
                  required
                  autoComplete="username"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-bark/80" htmlFor="password">
                  {T.password}
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full rounded-lg border border-sand/70 bg-white/90 px-4 py-3 text-bark placeholder:text-bark/60 focus:outline-none focus:ring-2 focus:ring-forest/40"
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                />
              </div>

              {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
              {success && <p className="text-sm text-forest bg-forest/10 border border-forest/30 rounded-lg px-3 py-2">{success}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-forest to-forest-mid text-cream font-semibold px-4 py-3 shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
              >
                {loading ? "Authenticating..." : T.cta}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </form>

            <p className="text-sm text-bark/70 mt-4">
              {T.needAccount}{" "}
              <Link href="/signup" className="font-semibold text-forest hover:text-forest-mid">
                {T.createOne}
              </Link>
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-forest text-cream shadow-xl border border-forest/50">
              <p className="text-sm uppercase tracking-[0.2em] text-cream/80 font-semibold">{T.whyLabel}</p>
              <h2 className="text-2xl font-bold mt-2" style={{ fontFamily: "var(--font-playfair)" }}>
                {T.whyTitle}
              </h2>
              <p className="text-cream/80 mt-3">{T.whyBody}</p>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {T.features.map((item) => (
                  <div key={item} className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2 text-sm">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white/80 border border-sand/60 shadow-lg backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center text-forest font-semibold">GT</div>
                <div>
                  <p className="text-sm font-semibold text-bark">{T.supportTitle}</p>
                  <p className="text-sm text-bark/70">{T.supportNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
