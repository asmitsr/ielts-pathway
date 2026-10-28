"use client";
import { Card } from "@/components/Shell";
export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Help / FAQ</h1>
      <Card title="How do I start?">
        <p>Go to Planner, follow Day 1 from 1 November 2026, and tick tasks as you finish them.</p>
      </Card>
      <Card title="Where is my data?">
        <p>In your browser localStorage only. If you clear browser data or change devices, v1 progress will not follow you. That is a stated v1 limitation.</p>
      </Card>
      <Card title="How do I report a broken link?">
        <p>Note the resource name and date, and check the YouTube Resources page status field. Unverified resources have no link on purpose.</p>
      </Card>
    </div>
  );
}
