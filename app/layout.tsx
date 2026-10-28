import type { Metadata } from "next";
import Shell from "@/components/Shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "IELTS Pathway — Free IELTS Learning Platform",
  description: "Free, original IELTS practice, a 60-day study planner from 1 November 2026, vocabulary flashcards and real local progress tracking. Not affiliated with official IELTS.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body className="min-h-screen bg-leaf text-forest dark:bg-ink dark:text-leaf">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
