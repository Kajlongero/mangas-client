import { cookies } from "next/headers";
import { Suspense } from "react";

import { fetchData } from "@/common/lib/axios.functions";

import { ProfileMenuOptions } from "@/core/user/components/Profile";
import { BackgroundAndPfp } from "@/core/user/components/Profile";
import { RequestConfig } from "@/common/interfaces/api.model";

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = await cookies();
  const accessToken = store.get("access-token");

  // const conf: RequestConfig<null> = {
  //   body: null,
  //   config: {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   },
  //   method: "get",
  //   route: "/api/v1/user/user-info",
  // };

  // const user = await fetchData();

  return (
    <>
      <section className="h-dvh w-full container mx-auto mt-2">
        <Suspense>
          <BackgroundAndPfp />
          <ProfileMenuOptions />
          {children}
        </Suspense>
      </section>
    </>
  );
}
