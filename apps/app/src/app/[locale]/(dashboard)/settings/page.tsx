import { UsersLoading } from "@/components/users.loading";
import { UsersServer } from "@/components/users.server";
import { db } from "@futbiz/database";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Settings",
  description: "Settings",
};

export default async function Page() {
  const companies = await db.company.findMany();
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <pre>{JSON.stringify(companies, null, 2)}</pre>
      <Suspense fallback={<UsersLoading />}>
        <UsersServer />
      </Suspense>
    </div>
  );
}
