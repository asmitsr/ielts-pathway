"use client";

export const dynamic = "force-dynamic";
import { useMemo, useState } from "react";
import { Card, Note, useLang } from "@/components/Shell";
import { generatePlan, DEFAULT_START, DEFAULT_DAYS } from "@/lib/plan";
import { loadAttempts } from "@/lib/quiz";
import { dict } from "@/lib/dict";
export default function DashboardClient() {
  const { t } = useLang();
  const [done] = useState<Record<string, string>>(() => {
    if (typeof window === "undefined") return {};
    try { return JSON.parse(localStorage.getItem("ielts-tasks-done") || "{}"); } catch { return {}; }
  });
  const [attempts] = useState(() => loadAttempts());
  const [vocab] = useState<Record<string, string>>(() => {
    if (typeof window === "undefined") return {};
    try { return JSON.parse(localStorage.getItem("ielts-vocab") || "{}"); } catch { return {}; }
  });
  const [lessons] = useState<Record<string, string[]>>(() => {
    if (typeof window === "undefined") return {};
    const l: Record<string, string[]> = {};
    ["reading","writing","listening","speaking","spoken","grammar"].forEach((k) => { try { l[k] = JSON.parse(localStorage.getItem(`ielts-lessons-${k}`) || "[]"); } catch { l[k] = []; } });
    return l;
  });
  const [minutes, setMinutes] = useState(() => {
    if (typeof window === "undefined") return 0;
    try { return Number(localStorage.getItem("ielts-study-minutes") || 0); } catch { return 0; }
  });
  const [inputMin, setInputMin] = useState(60);
  const plan = useMemo(() => generatePlan(DEFAULT_START, DEFAULT_DAYS), []);
  const allTasks = plan.flatMap((d) => d.tasks);
  const doneTasks = allTasks.filter((x) => done[x.id]);
  const skillProgress = ["listening","reading","writing","speaking","vocabulary","revision","mock","typing"].map((s) => {
    const total = allTasks.filter((x) => x.skill === s).length;
    const d = allTasks.filter((x) => x.skill === s && done[x.id]).length;
    return { skill: s, total, done: d };
  });
  const correct = attempts.reduce((s, a) => s + a.correct, 0);
  const totalQ = attempts.reduce((s, a) => s + a.total, 0);
  const daysWithDone = new Set(Object.values(done));
  const localIso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  let streak = 0;
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const d = new Date(today.getFullYear(), today.getMonth(), today.getDate()); d.setDate(d.getDate() - i);
    if (daysWithDone.has(localIso(d))) streak++; else break;
  }
  const logMinutes = () => { const n = minutes + inputMin; setMinutes(n); try { localStorage.setItem("ielts-study-minutes", String(n)); } catch {} };
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t(dict.dashboard.title)}</h1>
      <Note>{t(dict.dashboard.streakDef)} {t(dict.dashboard.accuracyDef)}</Note>
      {allTasks.length === 0 ? <p>{t(dict.common.noData)}</p> : (
        <>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <Card title={t({ bn: "প্ল্যানার অগ্রগতি", en: "Planner progress" })}><p className="text-2xl font-bold">{doneTasks.length} / {allTasks.length}</p><p className="text-sm">{allTasks.length ? `${Math.round((doneTasks.length / allTasks.length) * 100)}%` : "—"}</p></Card>
            <Card title={t({ bn: "স্ট্রিক (দিন)", en: "Streak (days)" })}><p className="text-2xl font-bold">{streak}</p></Card>
            <Card title={t({ bn: "অনুশীলন Accuracy", en: "Practice accuracy" })}><p className="text-2xl font-bold">{totalQ === 0 ? t(dict.common.noAttempts) : `${Math.round((correct / totalQ) * 100)}% (${correct}/${totalQ})`}</p></Card>
            <Card title={t({ bn: "লগ করা পড়ার সময়", en: "Logged study time" })}><p className="text-2xl font-bold">{minutes} {t(dict.common.minutes)}</p></Card>
          </div>
          <Card title={t({ bn: "স্কিলভিত্তিক অগ্রগতি (সঠিক ভাগফল)", en: "Skill-wise progress (correct denominators)" })}>
            <ul className="space-y-1">{skillProgress.map((s) => <li key={s.skill}>{s.skill}: {s.done} / {s.total} {s.total ? `(${Math.round((s.done / s.total) * 100)}%)` : "(—)"}</li>)}</ul>
          </Card>
          <Card title={t({ bn: "ভোকাবুলারি ও লেসন", en: "Vocabulary and lessons" })}>
            <p>{t({ bn: `Known শব্দ: ${Object.values(vocab).filter((v) => v === "known").length}`, en: `Known words: ${Object.values(vocab).filter((v) => v === "known").length}` })}</p>
            <ul>{Object.entries(lessons).map(([k, v]) => <li key={k}>{k}: {v.length} lessons done</li>)}</ul>
          </Card>
          <Card title={t({ bn: "পড়ার সময় লগ করুন", en: "Log study time" })}>
            <div className="flex gap-2"><input type="number" value={inputMin} onChange={(e) => setInputMin(Number(e.target.value))} className="w-24 rounded-lg border px-2 py-1 text-ink" aria-label="Minutes to log" /><button type="button" onClick={logMinutes} className="rounded-lg bg-forest px-3 py-1 font-bold text-white">{t({ bn: "যোগ করুন", en: "Add" })}</button></div>
            <p className="mt-2 text-sm">{t({ bn: "সতর্কতা: এই সময় আপনি নিজে লিখছেন। টাইমার দিয়ে স্বয়ংক্রিয়ভাবে মাপা হয় না, তাই ডাবল লগ করবেন না।", en: "Note: you enter this time yourself. It is not measured by a timer, so do not log the same session twice." })}</p>
          </Card>
        </>
      )}
    </div>
  );
}
