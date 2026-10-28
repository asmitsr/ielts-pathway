"use client";
import { Card } from "@/components/Shell";
export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Privacy Policy (draft)</h1>
      <Card>
        <p>V1 collects no account, no password and no server data. Learning progress, planner ticks, vocabulary status, quiz attempts and writing drafts are stored in your own browser (localStorage). Speaking recordings are created in your browser and are never uploaded by this site. If you open an external YouTube link, that site&apos;s own privacy policy applies. Phase 2 will require a separate, updated policy before any Firebase account data is collected.</p>
      </Card>
    </div>
  );
}
