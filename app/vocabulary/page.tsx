"use client";
import { useState } from "react";
import { Card, Note, useLang } from "@/components/Shell";
import { vocabList, type VocabItem } from "@/lib/content";
import Quiz from "@/components/Quiz";
import { quizzes } from "@/lib/quiz";
type Status = "new" | "learning" | "review" | "known";
export default function Page() {
  const { t } = useLang();
  const [status, setStatus] = useState<Record<string, Status>>(() => {
    if (typeof window === "undefined") return {};
    try { return JSON.parse(localStorage.getItem("ielts-vocab") || "{}"); } catch { return {}; }
  });
  const [topic, setTopic] = useState("all");
  const [show, setShow] = useState<string | null>(null);
  const set = (word: string, s: Status) => { const n = { ...status, [word]: s }; setStatus(n); try { localStorage.setItem("ielts-vocab", JSON.stringify(n)); } catch {} };
  const topics = ["all", ...Array.from(new Set(vocabList.map((v) => v.topic)))];
  const list = vocabList.filter((v) => topic === "all" || v.topic === topic);
  const reviewQueue = vocabList.filter((v) => status[v.word] === "review" || status[v.word] === "learning");
  const known = vocabList.filter((v) => status[v.word] === "known").length;
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t({ bn: "ভোকাবুলারি ফ্ল্যাশকার্ড", en: "Vocabulary flashcards" })}</h1>
      <Note>{t({ bn: "দৈনিক লক্ষ্য: ২৫–৩০টি নতুন শব্দ। রিভিউ চক্র: ১, ৩, ৭, ১৪ দিন পর। Known মানে আপনি শব্দটি বাক্যে ব্যবহার করতে পারেন।", en: "Daily goal: 25–30 new words. Review cycle: after 1, 3, 7, 14 days. Known means you can use the word in a sentence." })}</Note>
      <p>{t({ bn: `Known: ${known} / ${vocabList.length} | রিভিউ সারি: ${reviewQueue.length}টি`, en: `Known: ${known} / ${vocabList.length} | Review queue: ${reviewQueue.length}` })}</p>
      <label>{t({ bn: "টপিক: ", en: "Topic: " })}<select value={topic} onChange={(e) => setTopic(e.target.value)} className="rounded-lg border px-2 py-1 text-ink">{topics.map((x) => <option key={x} value={x}>{x}</option>)}</select></label>
      <div className="grid gap-3 sm:grid-cols-2">
        {list.map((v: VocabItem) => (
          <Card key={v.word} title={v.word}>
            <p>{t({ bn: `অর্থ: ${v.bn}`, en: `Meaning (BN): ${v.bn}` })} | {v.topic}</p>
            {show === v.word && <p className="mt-1 italic">{v.example}</p>}
            <button type="button" onClick={() => setShow(show === v.word ? null : v.word)} className="mt-2 rounded-lg border px-2 py-1 text-sm">{show === v.word ? t({ bn: "উদাহরণ লুকান", en: "Hide example" }) : t({ bn: "উদাহরণ দেখুন", en: "Show example" })}</button>
            <div className="mt-2 flex flex-wrap gap-2">
              {(["learning", "review", "known"] as Status[]).map((s) => (
                <button key={s} type="button" onClick={() => set(v.word, s)} className={`rounded-lg border px-2 py-1 text-sm ${status[v.word] === s ? "bg-gold font-bold text-ink" : ""}`}>{s}</button>
              ))}
            </div>
          </Card>
        ))}
      </div>
      <Quiz quiz={quizzes.find((q) => q.id === "vocab-1")!} />
    </div>
  );
}
