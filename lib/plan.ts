export type PlanTask = {
  id: string;
  skill: string;
  titleBn: string;
  titleEn: string;
  minutes: number;
  kind: "study" | "revision" | "mock" | "rest";
};

export type PlanDay = {
  day: number;
  date: string; // YYYY-MM-DD, computed in code
  labelBn: string;
  labelEn: string;
  tasks: PlanTask[];
  totalMinutes: number;
  isSunday: boolean;
};

export function addDays(base: Date, n: number): Date {
  const d = new Date(base.getFullYear(), base.getMonth(), base.getDate());
  d.setDate(d.getDate() + n);
  return d;
}

export function isoDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function displayDate(d: Date, lang: "bn" | "en"): string {
  // Deterministic, locale-based display only; the stored date is isoDate above.
  return d.toLocaleDateString(lang === "bn" ? "bn-BD" : "en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function phase(day: number, total: number): "skill" | "timed" | "mock" {
  if (day <= Math.ceil(total * 0.35)) return "skill";
  if (day <= Math.ceil(total * 0.7)) return "timed";
  return "mock";
}

function revisionDays(day: number): number[] {
  return [1, 3, 7, 14].map((o) => day - o).filter((d) => d >= 1);
}

export function generatePlan(startIso: string, totalDays: number): PlanDay[] {
  const [y, m, d] = startIso.split("-").map(Number);
  const start = new Date(y, m - 1, d);
  const days: PlanDay[] = [];
  for (let i = 0; i < totalDays; i++) {
    const dayNo = i + 1;
    const date = addDays(start, i);
    const isSunday = date.getDay() === 0;
    const ph = phase(dayNo, totalDays);
    const phBn = ph === "skill" ? "স্কিল শেখা" : ph === "timed" ? "টাইমড প্র্যাকটিস" : "মক + রিভিশন";
    const phEn = ph === "skill" ? "Skill building" : ph === "timed" ? "Timed practice" : "Mock + revision";
    const tasks: PlanTask[] = [];
    const push = (skill: string, bn: string, en: string, minutes: number, kind: PlanTask["kind"] = "study") =>
      tasks.push({ id: `d${dayNo}-${tasks.length + 1}`, skill, titleBn: bn, titleEn: en, minutes, kind });

    if (isSunday) {
      push("mock", "ফুল মক: Listening + Reading + Writing", "Full mock: Listening + Reading + Writing", 190, "mock");
      push("speaking", "স্পিকিং মক: Part 1, 2, 3", "Speaking mock: Parts 1, 2, 3", 60, "mock");
      push("revision", "সাপ্তাহিক রিভিশন: ভুলের খাতা + শব্দ", "Weekly revision: error notebook + vocabulary", 120, "revision");
      push("vocabulary", "ভোকাবুলারি রিভিউ (নতুন শব্দ নয়)", "Vocabulary review (no new words)", 60, "revision");
      push("typing", "কম্পিউটার পরিচিতি: টাইপিং + হাইলাইট", "Computer familiarisation: typing + highlighting", 30, "study");
    } else {
      push("listening", `Listening (${phBn}): টাইমড/সেকশন প্র্যাকটিস`, `Listening (${phEn}): timed/section practice`, 120);
      push("reading", `Reading (${phBn}): প্যাসেজ প্র্যাকটিস`, `Reading (${phEn}): passage practice`, 120);
      push("writing", `Writing (${phBn}): কম্পিউটারে টাইপ করে লেখা`, `Writing (${phEn}): typed writing practice`, 120);
      push("speaking", `Speaking (${phBn}): Cue Card + আলোচনা`, `Speaking (${phEn}): cue card + discussion`, 90);
      push("vocabulary", "Vocabulary + Grammar: ২৫–৩০টি নতুন শব্দ", "Vocabulary + Grammar: 25–30 new words", 90);
      const rev = revisionDays(dayNo);
      push(
        "revision",
        rev.length
          ? `রিভিশন: গতকাল + ${rev.filter((x) => x !== dayNo - 1).map((x) => `Day ${x}`).join(", ")} দিনের শব্দ ও ভুল`
          : "রিভিশন: গতকালের শব্দ ও ভুল",
        rev.length
          ? `Revision: yesterday + Day ${rev.filter((x) => x !== dayNo - 1).join(", ")} words and mistakes`
          : "Revision: yesterday's words and mistakes",
        60,
        "revision",
      );
    }
    days.push({
      day: dayNo,
      date: isoDate(date),
      labelBn: `${displayDate(date, "bn")} — Day ${dayNo} (${phBn})`,
      labelEn: `${displayDate(date, "en")} — Day ${dayNo} (${phEn})`,
      tasks,
      totalMinutes: tasks.reduce((s, t) => s + t.minutes, 0),
      isSunday,
    });
  }
  return days;
}

export const DEFAULT_START = "2026-11-01";
export const DEFAULT_DAYS = 60;
