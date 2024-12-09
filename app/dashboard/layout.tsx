//"use client";

import DashboardSidebar from "./ui/sidebar";
import DashboardHeader from "./ui/dashboard-header";
import { verifyAuth } from "../authentication/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await verifyAuth();

  if (!auth) {
    console.log("failed auth");

    redirect("/");
  }
  console.log("passed auth");

  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />

      <main className="flex-1 bg-slate-100">
        <DashboardHeader />
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
