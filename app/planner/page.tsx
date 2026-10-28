"use client";
import { useMemo, useState } from "react";
import { Card, Note, useLang } from "@/components/Shell";
import { generatePlan, DEFAULT_START, DEFAULT_DAYS, type PlanDay } from "@/lib/plan";
import { dict } from "@/lib/dict";
type CustomTask = { id: string; date: string; title: string; minutes: number };
export default function Page() {
  const { t, lang } = useLang();
  const [months, setMonths] = useState(2);
  const [start, setStart] = useState(DEFAULT_START);
  const [done, setDone] = useState<Record<string, string>>(() => {
    if (typeof window === "undefined") return {};
    try { return JSON.parse(localStorage.getItem("ielts-tasks-done") || "{}"); } catch { return {}; }
  });
  const [custom, setCustom] = useState<CustomTask[]>(() => {
    if (typeof window === "undefined") return [];
    try { return JSON.parse(localStorage.getItem("ielts-custom-tasks") || "[]"); } catch { return []; }
  });
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState(DEFAULT_START);
  const [newMin, setNewMin] = useState(30);
  const [filter, setFilter] = useState("");
  const totalDays = months === 2 && start === DEFAULT_START ? DEFAULT_DAYS : months * 30;
  const plan: PlanDay[] = useMemo(() => generatePlan(start, totalDays), [start, totalDays]);
  const toggle = (id: string) => {
    const next = { ...done };
    if (next[id]) delete next[id]; else { const n = new Date(); next[id] = `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, "0")}-${String(n.getDate()).padStart(2, "0")}`; }
    setDone(next); try { localStorage.setItem("ielts-tasks-done", JSON.stringify(next)); } catch {}
  };
  const addCustom = () => {
    if (!newTitle.trim()) return;
    const task: CustomTask = { id: `custom-${Date.now()}`, date: newDate, title: newTitle.trim(), minutes: newMin };
    const next = [...custom, task]; setCustom(next); try { localStorage.setItem("ielts-custom-tasks", JSON.stringify(next)); } catch {}
    setNewTitle("");
  };
  const delCustom = (id: string) => { const next = custom.filter((c) => c.id !== id); setCustom(next); try { localStorage.setItem("ielts-custom-tasks", JSON.stringify(next)); } catch {} };
  const shown = plan.filter((d) => !filter || d.date === filter);
  const doneCount = plan.flatMap((d) => d.tasks).filter((x) => done[x.id]).length;
  const totalCount = plan.flatMap((d) => d.tasks).length;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t(dict.planner.title)}</h1>
      <p>{t(dict.planner.subtitle)}</p>
      <Note>{t(dict.planner.revisionNote)}</Note>
      <div className="flex flex-wrap gap-3">
        <label>{t({ bn: "সময়কাল (মাস): ", en: "Duration (months): " })}<select value={months} onChange={(e) => setMonths(Number(e.target.value))} className="rounded-lg border px-2 py-1 text-ink">{[2,3,4,5,6,7,8,9,10,11,12].map((m) => <option key={m} value={m}>{m}</option>)}</select></label>
        <label>{t({ bn: "শুরুর তারিখ: ", en: "Start date: " })}<input type="date" value={start} onChange={(e) => setStart(e.target.value)} className="rounded-lg border px-2 py-1 text-ink" /></label>
        <label>{t({ bn: "তারিখ দিয়ে খুঁজুন: ", en: "Filter by date: " })}<input type="date" value={filter} onChange={(e) => setFilter(e.target.value)} className="rounded-lg border px-2 py-1 text-ink" /></label>
      </div>
      <p className="font-bold">{t({ bn: `সম্পন্ন টাস্ক: ${doneCount} / ${totalCount} | মোট দিন: ${plan.length}`, en: `Tasks completed: ${doneCount} / ${totalCount} | Total days: ${plan.length}` })}</p>
      <Card title={t({ bn: "নিজের টাস্ক যোগ করুন", en: "Add a custom task" })}>
        <div className="flex flex-wrap gap-2">
          <label className="sr-only" htmlFor="ct-title">Task title</label>
          <input id="ct-title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} placeholder="Task title" className="rounded-lg border px-2 py-1 text-ink" />
          <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} className="rounded-lg border px-2 py-1 text-ink" aria-label="Custom task date" />
          <input type="number" value={newMin} onChange={(e) => setNewMin(Number(e.target.value))} className="w-20 rounded-lg border px-2 py-1 text-ink" aria-label="Minutes" />
          <button type="button" onClick={addCustom} className="rounded-lg bg-forest px-3 py-1 font-bold text-white">{t({ bn: "যোগ করুন", en: "Add" })}</button>
        </div>
      </Card>
      <div className="space-y-3">
        {shown.map((d) => {
          const customs = custom.filter((c) => c.date === d.date);
          return (
            <Card key={d.date} title={lang === "bn" ? d.labelBn : d.labelEn}>
              <p className="text-sm">{t({ bn: `মোট: ${d.totalMinutes} মিনিট | ${d.isSunday ? "রবিবার: ফুল মক + রিভিশন" : "সাধারণ দিন"}`, en: `Total: ${d.totalMinutes} minutes | ${d.isSunday ? "Sunday: full mock + revision" : "Regular day"}` })}</p>
              <ul className="mt-2 space-y-1">
                {d.tasks.map((task) => (
                  <li key={task.id}><label className="flex cursor-pointer gap-2 text-sm"><input type="checkbox" checked={!!done[task.id]} onChange={() => toggle(task.id)} />{lang === "bn" ? task.titleBn : task.titleEn} — {task.minutes} {t(dict.common.minutes)}</label></li>
                ))}
                {customs.map((c) => (
                  <li key={c.id} className="flex gap-2 text-sm"><span>⭐ {c.title} — {c.minutes} {t(dict.common.minutes)}</span><button type="button" onClick={() => delCustom(c.id)} className="underline">{t({ bn: "মুছুন", en: "Delete" })}</button></li>
                ))}
              </ul>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
