"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../lib/translations";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000";

type SignupForm = {
  username: string;
  email: string;
  password: string;
  confirm: string;
};

export default function SignupPage() {
  const [form, setForm] = useState<SignupForm>({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const { lang } = useLanguage();
  const T = translations[lang].signupPage;

  const features = [
    { icon: "💎", title: T.features[0] },
    { icon: "🔐", title: T.features[1] },
    { icon: "⚡", title: T.features[2] },
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      setSuccess(null);
      return;
    }
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch(`${API_BASE}/api/auth/signup/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: form.username.trim(),
          email: form.email.trim(),
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
        throw new Error(pickError(data) || "Unable to sign up");
      }

      const token = typeof (data as { token?: string }).token === "string" ? (data as { token?: string }).token : undefined;
      const username = (data as { user?: { username?: string } })?.user?.username;
      if (token) localStorage.setItem("authToken", token);
      setSuccess(`Welcome aboard, ${username || form.username}!`);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-bark via-[#6f3336] to-forest text-cream">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/10 text-wh
             text-sm font-semibold border border-cream/90">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              {T.chip}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              {T.title}
            </h1>
            <p className="text-lg text-bark/70 max-w-xl">
              {T.subtitle}
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {features.map((item) => (
                <div key={item.title} className="flex items-center gap-2 px-3 py-3 rounded-xl bg-white/80 border border-sand/60 shadow-sm backdrop-blur">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-semibold text-cre">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/80 rounded-2xl shadow-xl border border-sand/60 backdrop-blur p-8 lg:p-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-bark/60 font-semibold">{T.formHeading}</p>
                <h2 className="text-2xl font-bold mt-1">{T.formTitle}</h2>
              </div>
              <span className="px-3 py-1 rounded-full bg-forest text-cream text-xs font-semibold shadow-md">New</span>
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
                <label className="text-sm font-semibold text-bark/80" htmlFor="email">
                  {T.email}
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-sand/70 bg-white/90 px-4 py-3 text-bark placeholder:text-bark/60 focus:outline-none focus:ring-2 focus:ring-forest/40"
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
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
                    autoComplete="new-password"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-bark/80" htmlFor="confirm">
                    {T.confirm}
                  </label>
                  <input
                    id="confirm"
                    type="password"
                    name="confirm"
                    value={form.confirm}
                    onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                    className="w-full rounded-lg border border-sand/70 bg-white/90 px-4 py-3 text-bark placeholder:text-bark/60 focus:outline-none focus:ring-2 focus:ring-forest/40"
                    placeholder="••••••••"
                    required
                    autoComplete="new-password"
                  />
                </div>
              </div>

              {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{error}</p>}
              {success && <p className="text-sm text-forest bg-forest/10 border border-forest/30 rounded-lg px-3 py-2">{success}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-forest to-forest-mid text-cream font-semibold px-4 py-3 shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
              >
                {loading ? "Creating account..." : T.cta}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 5 5L20 7" />
                </svg>
              </button>
            </form>

            <p className="text-sm text-bark/70 mt-4">
              {T.haveAccount}{" "}
              <Link href="/login" className="font-semibold text-forest hover:text-forest-mid">
                {T.loginInstead}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
