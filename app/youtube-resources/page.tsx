"use client";
import { useMemo, useState } from "react";
import { Card, Note, useLang } from "@/components/Shell";
import { ytResources, SCORING } from "@/lib/youtube";
export default function Page() {
  const { t, lang } = useLang();
  const [langF, setLangF] = useState("all");
  const [skillF, setSkillF] = useState("all");
  const [levelF, setLevelF] = useState("all");
  const [typeF, setTypeF] = useState("all");
  const [q, setQ] = useState("");
  const [saved, setSaved] = useState<string[]>([]);
  const [watched, setWatched] = useState<string[]>([]);
  const toggle = (key: string, id: string, setter: (v: string[]) => void, cur: string[]) => {
    const n = cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id];
    setter(n); try { localStorage.setItem(key, JSON.stringify(n)); } catch {}
  };
  const list = useMemo(() => ytResources.filter((r) =>
    (langF === "all" || r.language === langF) && (skillF === "all" || r.skill === skillF) &&
    (levelF === "all" || r.level === levelF) && (typeF === "all" || r.type === typeF) &&
    (q === "" || (r.channel + r.titleBn + r.titleEn).toLowerCase().includes(q.toLowerCase()))
  ), [langF, skillF, levelF, typeF, q]);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{t({ bn: "ইউটিউব রিসোর্স", en: "YouTube resources" })}</h1>
      <Note>{t({ bn: "সতর্কতা: এখানে কোনো 'Best' স্কোর দেওয়া হয়নি। লিংক যাচাই মানে শুধু লিংকটি সার্চে পাওয়া গেছে, শিক্ষার মানের পূর্ণ যাচাই নয়। যাচাই হয়নি এমন কিছুতে লিংক দেওয়া হয়নি।", en: "Warning: no 'Best' score is given here. A verified link means only that the link was found in search; it is not a full teaching-quality verification. Unverified items have no link." })}</Note>
      <Card title={t({ bn: "১০০ পয়েন্ট মূল্যায়ন মডেল (ভবিষ্যৎ যাচাইয়ের জন্য)", en: "100-point evaluation model (for future verification)" })}>
        <ul>{SCORING.map((s) => <li key={s.en}>{lang === "bn" ? s.bn : s.en}: {s.points}</li>)}</ul>
        <p className="mt-2 text-sm">{t({ bn: "পর্যাপ্ত প্রমাণ ছাড়া কোনো রিসোর্সকে এই স্কোরে নম্বর দেওয়া হবে না।", en: "No resource is scored on this model without sufficient evidence." })}</p>
      </Card>
      <div className="flex flex-wrap gap-2">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search / খুঁজুন" className="rounded-lg border px-2 py-1 text-ink" aria-label="Search resources" />
        <select value={langF} onChange={(e) => setLangF(e.target.value)} className="rounded-lg border px-2 py-1 text-ink" aria-label="Language filter"><option value="all">All languages</option><option value="bn">বাংলা</option><option value="en">English</option></select>
        <select value={skillF} onChange={(e) => setSkillF(e.target.value)} className="rounded-lg border px-2 py-1 text-ink" aria-label="Skill filter"><option value="all">All skills</option><option value="reading">Reading</option><option value="writing">Writing</option><option value="listening">Listening</option><option value="speaking">Speaking</option><option value="spoken">Spoken</option></select>
        <select value={levelF} onChange={(e) => setLevelF(e.target.value)} className="rounded-lg border px-2 py-1 text-ink" aria-label="Level filter"><option value="all">All levels</option><option value="beginner">Beginner</option><option value="intermediate">Intermediate</option></select>
        <select value={typeF} onChange={(e) => setTypeF(e.target.value)} className="rounded-lg border px-2 py-1 text-ink" aria-label="Type filter"><option value="all">All types</option><option value="channel">Channel</option><option value="video">Video</option></select>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {list.map((r) => (
          <Card key={r.id} title={lang === "bn" ? r.titleBn : r.titleEn}>
            <p className="text-sm">{r.channel} | {r.language === "bn" ? "বাংলা" : "English"} | {r.skill} | {r.level} | {r.type}</p>
            <p className="mt-1 text-sm">{lang === "bn" ? r.whyBn : r.whyEn}</p>
            <p className="text-sm">{t({ bn: `অবস্থা: ${r.status === "url-verified" ? "লিংক যাচাই করা হয়েছে" : "Research pending - not yet verified"} | শেষ যাচাই: ${r.lastChecked}`, en: `Status: ${r.status === "url-verified" ? "URL verified" : "Research pending - not yet verified"} | Last checked: ${r.lastChecked}` })}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {r.url ? <a href={r.url} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-forest px-3 py-1 text-sm font-bold text-white">{t({ bn: "ইউটিউবে খুলুন", en: "Open on YouTube" })}</a> : <span className="text-sm font-bold">{t({ bn: "লিংক নেই — যাচাই বাকি", en: "No link — verification pending" })}</span>}
              <button type="button" onClick={() => toggle("ielts-yt-saved", r.id, setSaved, saved)} className="rounded-lg border px-2 py-1 text-sm">{saved.includes(r.id) ? "★ Saved" : "☆ Save to my plan"}</button>
              <button type="button" onClick={() => toggle("ielts-yt-watched", r.id, setWatched, watched)} className="rounded-lg border px-2 py-1 text-sm">{watched.includes(r.id) ? "✓ Watched" : "Mark as watched"}</button>
            </div>
          </Card>
        ))}
      </div>
      {list.length === 0 && <p>{t({ bn: "কোনো রিসোর্স মেলেনি।", en: "No resources matched." })}</p>}
    </div>
  );
}
