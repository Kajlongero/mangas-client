import { BackgroundAndPfp } from "@/components/Profile/BackgroundAndPfp";
import { ProfileMenuOptions } from "@/components/Profile/MenuOpts";
import { Suspense } from "react";

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="h-dvh w-full container mx-auto mt-2">
        <Suspense>
          <BackgroundAndPfp />
          <ProfileMenuOptions />
          {children}
        </Suspense>
      </main>
    </>
  );
}
