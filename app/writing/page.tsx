"use client";
import { useState } from "react";
import LearnPage from "@/components/LearnPage";
import { Card, useLang } from "@/components/Shell";
export default function Page() {
  const { t } = useLang();
  const [text, setText] = useState(() => {
    if (typeof window === "undefined") return "";
    try { return localStorage.getItem("ielts-writing-draft") || ""; } catch { return ""; }
  });
  const [saved, setSaved] = useState(false);
  const [checked, setChecked] = useState<string[]>([]);
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const checks = ["task", "structure", "linking", "grammar", "proofread"];
  return <LearnPage moduleKey="writing" extra={<>
    <Card title={t({ bn: "Writing অনুশীলন: টাইপ করে লিখুন", en: "Writing practice: type your answer" })}>
      <p className="text-sm">{t({ bn: "প্রম্পট: Some people think online learning is better than classroom learning. Discuss both views and give your opinion. (Task 2, অন্তত ২৫০ শব্দ)", en: "Prompt: Some people think online learning is better than classroom learning. Discuss both views and give your opinion. (Task 2, at least 250 words)" })}</p>
      <label className="sr-only" htmlFor="essay">Your essay</label>
      <textarea id="essay" value={text} onChange={(e) => setText(e.target.value)} rows={10} className="mt-3 w-full rounded-xl border p-3 text-ink" placeholder="Write your essay here..." />
      <p>{t({ bn: `শব্দ সংখ্যা: ${words}`, en: `Word count: ${words}` })} — {t({ bn: "এটি অফিসিয়াল স্কোর নয়, শুধু শব্দ গণনা।", en: "This is only a word count, not an official score." })}</p>
      <button type="button" onClick={() => { try { localStorage.setItem("ielts-writing-draft", text); setSaved(true); } catch {} }} className="mt-2 rounded-lg bg-forest px-4 py-2 font-bold text-white">{t({ bn: "ড্রাফট সংরক্ষণ", en: "Save draft" })}</button>
      {saved && <p>{t({ bn: "সংরক্ষিত হয়েছে (শুধু এই ব্রাউজারে)।", en: "Saved (in this browser only)." })}</p>}
      <fieldset className="mt-4"><legend className="font-bold">{t({ bn: "নিজে যাচাই করুন", en: "Self-assessment checklist" })}</legend>
        {checks.map((c) => (
          <label key={c} className="flex gap-2 text-sm"><input type="checkbox" checked={checked.includes(c)} onChange={() => setChecked(checked.includes(c) ? checked.filter((x) => x !== c) : [...checked, c])} />{c}</label>
        ))}
      </fieldset>
    </Card>
  </>} />;
}
