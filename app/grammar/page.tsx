"use client";
import LearnPage from "@/components/LearnPage";
import Quiz from "@/components/Quiz";
import { quizzes } from "@/lib/quiz";
export default function Page() { return <LearnPage moduleKey="grammar" extra={<Quiz quiz={quizzes.find((q) => q.id === "grammar-1")!} />} />; }
