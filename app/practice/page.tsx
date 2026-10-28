"use client";
import { useState } from "react";
import { Card, useLang } from "@/components/Shell";
import Quiz from "@/components/Quiz";
import { quizzes, loadAttempts, type Attempt } from "@/lib/quiz";
export default function Page() {
  const { t } = useLang();
  const [active, setActive] = useState(quizzes[0].id);
  const [attempts] = useState<Attempt[]>(() => loadAttempts());
  const quiz = quizzes.find((q) => q.id === active)!;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t({ bn: "প্র্যাকটিস টেস্ট", en: "Practice tests" })}</h1>
      <p className="text-sm">{t({ bn: "সব প্রশ্ন এই সাইটের অরিজিনাল উপাদান। স্কোরটি অনুশীলন স্কোর, অফিসিয়াল ব্যান্ড নয়।", en: "All questions are original to this site. Scores are practice scores, not official bands." })}</p>
      <div className="flex flex-wrap gap-2">
        {quizzes.map((q) => <button key={q.id} type="button" onClick={() => setActive(q.id)} className={`rounded-lg border px-3 py-2 text-sm ${active === q.id ? "bg-forest font-bold text-white" : ""}`}>{t({ bn: q.titleBn, en: q.titleEn })}</button>)}
      </div>
      <Quiz key={active} quiz={quiz} />
      <Card title={t({ bn: "আমার চেষ্টার ইতিহাস (এই ব্রাউজার)", en: "My attempt history (this browser)" })}>
        {attempts.length === 0 ? <p>{t({ bn: "এখনো কোনো চেষ্টা নেই।", en: "No attempts yet." })}</p> : (
          <ul>{attempts.map((a, i) => <li key={i}>{a.date} — {a.quizId}: {a.correct}/{a.total}</li>)}</ul>
        )}
      </Card>
    </div>
  );
}
