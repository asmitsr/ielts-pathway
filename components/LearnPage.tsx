"use client";
import { useState, type ReactNode } from "react";
import { useLang, Card, Note } from "@/components/Shell";
import { modules, type Lesson } from "@/lib/content";
import { dict } from "@/lib/dict";

function useDone(key: string) {
  const [done, setDone] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch { return []; }
  });
  const toggle = (id: string) => {
    const next = done.includes(id) ? done.filter((x) => x !== id) : [...done, id];
    setDone(next);
    try { localStorage.setItem(key, JSON.stringify(next)); } catch { /* ignore */ }
  };
  return { done, toggle };
}

export default function LearnPage({ moduleKey, extra }: { moduleKey: keyof typeof modules; extra?: ReactNode }) {
  const { t } = useLang();
  const mod = modules[moduleKey];
  const { done, toggle } = useDone(`ielts-lessons-${moduleKey}`);
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t({ bn: mod.titleBn, en: mod.titleEn })}</h1>
      <p>{t({ bn: mod.introBn, en: mod.introEn })}</p>
      <Note>{t(dict.common.originalNote)}</Note>
      <p className="text-sm">{t({ bn: `সম্পন্ন লেসন: ${done.length} / ${mod.lessons.length}`, en: `Lessons completed: ${done.length} / ${mod.lessons.length}` })}</p>
      <div className="space-y-3">
        {mod.lessons.map((l: Lesson) => (
          <Card key={l.id} title={t({ bn: l.titleBn, en: l.titleEn })}>
            <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold">
              <input type="checkbox" checked={done.includes(l.id)} onChange={() => toggle(l.id)} />
              {done.includes(l.id) ? t(dict.common.complete) : t(dict.common.pending)}
            </label>
            <button type="button" onClick={() => setOpen(open === l.id ? null : l.id)} className="mt-2 rounded-lg border px-3 py-1 text-sm" aria-expanded={open === l.id}>
              {open === l.id ? t({ bn: "লুকান", en: "Hide" }) : t({ bn: "লেসন পড়ুন", en: "Read lesson" })}
            </button>
            {open === l.id && <p className="mt-2">{t({ bn: l.bodyBn, en: l.bodyEn })}</p>}
          </Card>
        ))}
      </div>
      {extra}
    </div>
  );
}
