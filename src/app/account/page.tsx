import { BackgroundAndPfp } from "@/components/ProfileInfo/BackgroundAndPfp";
import { ProfileInfo } from "@/components/ProfileInfo";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="h-dvh w-full container mx-auto sm:px-8">
      <Suspense>
        <BackgroundAndPfp />
        <ProfileInfo />
      </Suspense>
    </main>
  );
}
