"use client";
import LearnPage from "@/components/LearnPage";
import Quiz from "@/components/Quiz";
import { Card } from "@/components/Shell";
import { readingPassage } from "@/lib/content";
import { quizzes } from "@/lib/quiz";
export default function Page() {
  return <LearnPage moduleKey="reading" extra={<>
    <Card title={readingPassage.titleBn}><p>{readingPassage.text}</p></Card>
    <Quiz quiz={quizzes.find((q) => q.id === "reading-1")!} />
  </>} />;
}
