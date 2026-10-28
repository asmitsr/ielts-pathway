"use client";
import { useState } from "react";
import { useLang } from "@/components/Shell";
import { saveAttempt, type QuizSet } from "@/lib/quiz";

export default function Quiz({ quiz }: { quiz: QuizSet }) {
  const { t } = useLang();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [wrongOnly, setWrongOnly] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const shown = wrongOnly && submitted ? quiz.questions.filter((q) => answers[q.id] !== q.answer) : quiz.questions;
  const correct = quiz.questions.filter((q) => answers[q.id] === q.answer).length;

  const startTimer = () => {
    if (timerOn) return;
    setTimerOn(true);
    const id = window.setInterval(() => setSeconds((s) => s + 1), 1000);
    (window as unknown as { __quizTimer?: number }).__quizTimer = id;
  };
  const submit = () => {
    setSubmitted(true);
    setTimerOn(false);
    const id = (window as unknown as { __quizTimer?: number }).__quizTimer;
    if (id) window.clearInterval(id);
    saveAttempt({ quizId: quiz.id, correct, total: quiz.questions.length, date: new Date().toISOString().slice(0, 10) });
  };
  return (
    <section aria-label={t({bn: quiz.titleBn, en: quiz.titleEn})} className="rounded-2xl border border-forest/20 bg-white p-4 dark:border-leaf/20 dark:bg-white/5">
      <h2 className="text-lg font-bold">{t({bn: quiz.titleBn, en: quiz.titleEn})}</h2>
      <p className="text-sm">⏱ {Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, "0")} — {t({ bn: "টাইমার ঐচ্ছিক। জমা দিলে স্কোর ও ব্যাখ্যা দেখাবে।", en: "Timer is optional. Submitting shows your score and explanations." })}</p>
      <button type="button" onClick={startTimer} className="mt-2 rounded-lg bg-forest px-3 py-2 text-sm font-semibold text-white">{t({ bn: "টাইমার শুরু", en: "Start timer" })}</button>
      <ol className="mt-4 space-y-4">
        {shown.map((q, i) => (
          <li key={q.id} className="rounded-xl border border-forest/10 p-3">
            <p className="font-semibold">{i + 1}. {t({bn: q.qBn, en: q.qEn})}</p>
            <fieldset className="mt-2 space-y-1">
              <legend className="sr-only">{t({bn: q.qBn, en: q.qEn})}</legend>
              {q.options.map((opt, oi) => (
                <label key={oi} className="flex cursor-pointer gap-2 text-sm">
                  <input type="radio" name={q.id} checked={answers[q.id] === oi} onChange={() => setAnswers({ ...answers, [q.id]: oi })} />
                  {opt}
                </label>
              ))}
            </fieldset>
            {submitted && (
              <p className="mt-2 text-sm">
                {answers[q.id] === q.answer ? "✅ " : "❌ "}{t({ bn: "ব্যাখ্যা: ", en: "Explanation: " })}{t({ bn: q.explainBn, en: q.explainEn })}
              </p>
            )}
          </li>
        ))}
      </ol>
      {shown.length === 0 && submitted && <p>{t({ bn: "সব উত্তর সঠিক! 🎉", en: "All answers correct! 🎉" })}</p>}
      {!submitted ? (
        <button type="button" onClick={submit} className="mt-4 rounded-lg bg-gold px-4 py-2 font-bold text-ink">{t({ bn: "জমা দিন ও স্কোর দেখুন", en: "Submit and see score" })}</button>
      ) : (
        <div className="mt-4 space-y-2">
          <p className="font-bold">{t({ bn: `স্কোর: ${correct} / ${quiz.questions.length}`, en: `Score: ${correct} / ${quiz.questions.length}` })}</p>
          <p className="text-sm">{t({ bn: "এটি অনুশীলন স্কোর, অফিসিয়াল IELTS ব্যান্ড নয়।", en: "This is a practice score, not an official IELTS band." })}</p>
          <button type="button" onClick={() => setWrongOnly(!wrongOnly)} className="rounded-lg border px-3 py-2 text-sm">{t({ bn: wrongOnly ? "সব প্রশ্ন দেখান" : "শুধু ভুলগুলো আবার করুন", en: wrongOnly ? "Show all questions" : "Retry wrong answers only" })}</button>
          <button type="button" onClick={() => { setAnswers({}); setSubmitted(false); setWrongOnly(false); setSeconds(0); }} className="rounded-lg border px-3 py-2 text-sm">{t({ bn: "আবার চেষ্টা", en: "Try again" })}</button>
        </div>
      )}
    </section>
  );
}
