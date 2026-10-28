import { Suspense } from "react";
import DashboardClient from "@/components/DashboardClient";
export default function Page() {
  return (
    <Suspense fallback={<p>Loading dashboard…</p>}>
      <DashboardClient />
    </Suspense>
  );
}
