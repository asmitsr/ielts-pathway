"use client";
import { Card, Note } from "@/components/Shell";
export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Setup — Phase 2 (not live yet)</h1>
      <Note>IMPORTANT: There is no working login in v1, on purpose. No fake Google button and no fake OTP is shown anywhere.</Note>
      <Card title="Real Firebase steps for Phase 2">
        <ol className="list-decimal space-y-1 pl-5">
          <li>Create a Firebase project.</li>
          <li>Enable Google sign-in and add your Vercel domain to Authorized domains.</li>
          <li>Create a Cloud Firestore database.</li>
          <li>Deploy the firestore.rules file in this repo (rules deny all access except a signed-in user&apos;s own documents).</li>
          <li>Copy Firebase web config values into Vercel environment variables using the names in .env.example — never commit real values.</li>
          <li>Only then build the login UI with Firebase Auth.</li>
        </ol>
        <p className="mt-3">Until those steps are done, progress stays local. See README.md for the full checklist.</p>
      </Card>
    </div>
  );
}
