"use client";

export const dynamic = "force-dynamic";
import Link from "next/link";
import { useLang, Card, Note } from "@/components/Shell";
import { dict } from "@/lib/dict";
import { vocabList } from "@/lib/content";
import { generatePlan, DEFAULT_START, DEFAULT_DAYS } from "@/lib/plan";
export default function HomeClient() {
  const { t, lang } = useLang();
  const today = new Date();
  const word = vocabList[today.getDate() % vocabList.length];
  const plan = generatePlan(DEFAULT_START, DEFAULT_DAYS);
  const modules = [
    { href: "/reading", bn: "রিডিং", en: "Reading" }, { href: "/writing", bn: "রাইটিং", en: "Writing" },
    { href: "/listening", bn: "লিসেনিং", en: "Listening" }, { href: "/speaking", bn: "স্পিকিং", en: "Speaking" },
    { href: "/spoken-english", bn: "স্পোকেন ইংলিশ", en: "Spoken English" },
  ];
  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-forest p-6 text-leaf">
        <h1 className="text-3xl font-bold">{t(dict.home.heroTitle)}</h1>
        <p className="mt-3 max-w-2xl">{t(dict.home.heroText)}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/planner" className="rounded-xl bg-gold px-4 py-2 font-bold text-ink">{t(dict.home.createPlan)}</Link>
          <Link href="/reading" className="rounded-xl border border-leaf px-4 py-2 font-bold">{t(dict.home.startFree)}</Link>
        </div>
        <p className="mt-3 text-sm">{t({ bn: `৬০ দিনের প্ল্যানে মোট ${plan.length} দিন, প্রতিদিন সর্বোচ্চ ৬০০ মিনিট।`, en: `The 60-day plan has ${plan.length} days, at most 600 minutes per day.` })}</p>
      </section>
      <Note>{t(dict.home.localNote)}</Note>
      <h2 className="text-xl font-bold">{t(dict.home.modulesTitle)}</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {modules.map((m) => (
          <Card key={m.href} title={lang === "bn" ? m.bn : m.en}>
            <Link href={m.href} className="font-semibold underline">{t({ bn: "শেখা শুরু করুন →", en: "Start learning →" })}</Link>
          </Card>
        ))}
        <Card title={t(dict.home.vocabTitle)}>
          <p className="text-xl font-bold">{word.word} — {word.bn}</p>
          <p className="text-sm italic">{word.example}</p>
          <Link href="/vocabulary" className="font-semibold underline">{t({ bn: "সব শব্দ দেখুন →", en: "See all words →" })}</Link>
        </Card>
        <Card title={t(dict.home.challengeTitle)}><p>{t(dict.home.challengeText)}</p></Card>
      </div>
      <h2 className="text-xl font-bold">{t(dict.home.faqTitle)}</h2>
      <Card title={t({ bn: "এই সাইট কি অফিসিয়াল IELTS?", en: "Is this site official IELTS?" })}>
        <p>{t({ bn: "না। এটি একটি স্বাধীন বিনামূল্যে প্রস্তুতি সাইট। এখানে কোনো অফিসিয়াল প্রশ্ন, স্কোর বা সার্টিফিকেট দেওয়া হয় না।", en: "No. It is an independent free preparation site. It gives no official questions, scores or certificates." })}</p>
      </Card>
      <Card title={t({ bn: "লগইন ছাড়া কি ব্যবহার করা যাবে?", en: "Can I use it without login?" })}>
        <p>{t({ bn: "হ্যাঁ। ভি১-এ সব শেখার উপাদান লগইন ছাড়াই খোলা যায়, আর অগ্রগতি আপনার ব্রাউজারে থাকে।", en: "Yes. In v1 all learning material is open without login, and progress stays in your browser." })}</p>
      </Card>
    </div>
  );
}
