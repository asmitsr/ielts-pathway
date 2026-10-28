"use client";
import Link from "next/link";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { dict, type Lang } from "@/lib/dict";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; theme: "dark" | "light"; setTheme: (t: "dark" | "light") => void; t: (v: { bn: string; en: string }) => string };
const LangCtx = createContext<Ctx>({ lang: "bn", setLang: () => {}, theme: "dark", setTheme: () => {}, t: (v) => v.bn });
export const useLang = () => useContext(LangCtx);

const NAV: { href: string; key: keyof typeof dict.nav }[] = [
  { href: "/", key: "home" }, { href: "/reading", key: "reading" }, { href: "/writing", key: "writing" },
  { href: "/listening", key: "listening" }, { href: "/speaking", key: "speaking" }, { href: "/spoken-english", key: "spoken" },
  { href: "/vocabulary", key: "vocabulary" }, { href: "/grammar", key: "grammar" }, { href: "/practice", key: "practice" },
  { href: "/planner", key: "planner" }, { href: "/dashboard", key: "dashboard" }, { href: "/youtube-resources", key: "youtube" },
  { href: "/about", key: "about" }, { href: "/help", key: "help" },
];

export default function Shell({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "bn";
    try { const l = localStorage.getItem("ielts-lang"); return l === "en" ? "en" : "bn"; } catch { return "bn"; }
  });
  const [theme, setThemeState] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") return "dark";
    try {
      const th = localStorage.getItem("ielts-theme");
      if (th === "light" || th === "dark") return th;
      return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
    } catch { return "dark"; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    try { localStorage.setItem("ielts-theme", theme); } catch { /* ignore */ }
  }, [theme]);
  const setLang = (l: Lang) => { setLangState(l); try { localStorage.setItem("ielts-lang", l); } catch { /* ignore */ } };
  const setTheme = (t: "dark" | "light") => setThemeState(t);
  const t = (v: { bn: string; en: string }) => (lang === "bn" ? v.bn : v.en);
  return (
    <LangCtx.Provider value={{ lang, setLang, theme, setTheme, t }}>
      <header className="sticky top-0 z-50 border-b border-forest/20 bg-leaf text-forest dark:bg-ink dark:text-leaf">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-3">
          <Link href="/" className="text-lg font-bold">IELTS Pathway</Link>
          <div className="flex items-center gap-2">
            <label className="sr-only" htmlFor="lang-select">Language / ভাষা</label>
            <select id="lang-select" value={lang} onChange={(e) => setLang(e.target.value as Lang)} className="rounded-lg border border-forest/40 bg-white px-2 py-1 text-sm text-forest dark:bg-ink dark:text-leaf">
              <option value="bn">বাংলা</option>
              <option value="en">English</option>
            </select>
            <button type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme" className="rounded-lg border border-forest/40 px-3 py-1 text-sm font-semibold">
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>
            <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} className="rounded-lg border border-forest/40 px-3 py-1 text-sm font-semibold lg:hidden">
              {menuOpen ? "✕" : "☰ Menu"}
            </button>
          </div>
        </div>
        <nav aria-label="Main navigation" className={`${menuOpen ? "block" : "hidden"} border-t border-forest/20 lg:block`}>
          <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-4 gap-y-1 px-4 py-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}><Link href={n.href} className="underline-offset-4 hover:underline" onClick={() => setMenuOpen(false)}>{t(dict.nav[n.key])}</Link></li>
            ))}
            <li><Link href="/setup" className="underline-offset-4 hover:underline" onClick={() => setMenuOpen(false)}>{t(dict.nav.setup)}</Link></li>
          </ul>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">{children}</main>
      <footer className="border-t border-forest/20 bg-leaf/60 px-4 py-6 text-sm text-forest dark:bg-ink dark:text-leaf">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-4">
          <Link href="/about">About</Link><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms</Link><Link href="/help">Contact / Help</Link><Link href="/setup">Setup (Phase 2)</Link>
        </div>
        <p className="mx-auto mt-3 max-w-6xl">{t({ bn: "IELTS Pathway একটি স্বাধীন, বিনামূল্যে প্রস্তুতি সাইট। এটি অফিসিয়াল IELTS-এর সাথে যুক্ত নয় এবং কোনো অফিসিয়াল স্কোর দেয় না।", en: "IELTS Pathway is an independent, free preparation site. It is not affiliated with official IELTS and gives no official score." })}</p>
      </footer>
    </LangCtx.Provider>
  );
}

export function Card({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <section className="rounded-2xl border border-forest/20 bg-white p-4 shadow-sm dark:border-leaf/20 dark:bg-white/5">
      {title ? <h2 className="mb-2 text-lg font-bold">{title}</h2> : null}
      {children}
    </section>
  );
}
export function Note({ children }: { children: ReactNode }) {
  return <p className="rounded-xl border border-gold/60 bg-gold/10 p-3 text-sm">{children}</p>;
}
