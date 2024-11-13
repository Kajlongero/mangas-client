"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { isOnPathname } from "@/core/shared/lib/pathname";

import { UserSVG } from "@/core/shared/components/SVG/UserSVG";
import { HomeSVG } from "@/core/shared/components/SVG/HomeSVG";
import { SearchSVG } from "@/core/shared/components/SVG/SearchSVG";
import { CollectionSVG } from "@/core/shared/components/SVG/CollectionSVG";

export const MobileNavbar = () => {
  const pathname = usePathname();
  const user: boolean = false;

  const isOn = (route: string) =>
    isOnPathname(pathname, route)
      ? `bg-[#ffff00] m-auto h-8 rounded-md transition-all flex-2`
      : `flex-1`;

  const svgColor = (route: string, color: string = "#000") =>
    isOnPathname(pathname, route) ? color : "#fff";
  return (
    <ul className="flex items-center justify-between md:hidden w-full">
      <li className={isOn("/")}>
        <Link href="/" className="flex items-center w-full h-full">
          <figure className={`mx-auto w-5 h-5`}>
            <HomeSVG color={svgColor("/")} />
          </figure>
        </Link>
      </li>
      <li className={isOn("/collections")}>
        <Link href="/collections" className="flex items-center w-full h-full">
          <figure className={`mx-auto w-5 h-5`}>
            <CollectionSVG color={svgColor("/collections")} />
          </figure>
        </Link>
      </li>
      <li className={isOn("/search")}>
        <Link href="/search" className="flex items-center w-full h-full">
          <figure className={`mx-auto w-5 h-5`}>
            <SearchSVG color={svgColor("/search")} />
          </figure>
        </Link>
      </li>
      <li
        className={isOn(pathname.startsWith("/account") ? "/account" : "/auth")}
      >
        <Link
          href={user ? "/account/info" : "/auth/login"}
          className="flex items-center w-full h-full"
        >
          <figure className={`mx-auto w-5 h-5`}>
            <UserSVG
              color={svgColor(
                pathname.startsWith("/account") ? "/account" : "/auth"
              )}
            />
          </figure>
        </Link>
      </li>
    </ul>
  );
};
