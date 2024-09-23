"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isOnPathname } from "@/utils/pathname";
import s from "./styles.module.css";

export const AuthButtons = () => {
  const pathname = usePathname();

  const isOn = (route: string) =>
    isOnPathname(pathname, route)
      ? `${s.navbarRoute} ${s.actualPath} ${s.fixedWidth}`
      : `${s.navbarRoute} ${s.standardPath} ${s.fixedWidth}`;

  return (
    <div className="flex gap-4 items-center max-w-52">
      <Link href="/account/login" className={isOn("/account/login")}>
        Log in
      </Link>
      {/* <Link href="/account/signup" className={isOn("/account/signup")}>
        Sign up
      </Link> */}
    </div>
  );
};
