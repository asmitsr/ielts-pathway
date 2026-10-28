"use client";
import LearnPage from "@/components/LearnPage";
import Quiz from "@/components/Quiz";
import { Card } from "@/components/Shell";
import { listeningTranscript } from "@/lib/content";
import { quizzes } from "@/lib/quiz";
import { useLang } from "@/components/Shell";
export default function Page() {
  const { t } = useLang();
  return <LearnPage moduleKey="listening" extra={<>
    <Card title={t({ bn: "অরিজিনাল ট্রান্সক্রিপ্ট অনুশীলন", en: "Original transcript practice" })}><p>{listeningTranscript}</p><p className="mt-2 text-sm">{t({ bn: "ভি১-এ অডিও নেই। আসল অডিওর জন্য ইউটিউব রিসোর্স পেজ দেখুন।", en: "V1 has no audio. See the YouTube resources page for real audio." })}</p></Card>
    <Quiz quiz={quizzes.find((q) => q.id === "listening-1")!} />
  </>} />;
}
