"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { HomeSVG } from "@/components/SVG/HomeSVG";
import { UserSVG } from "@/components/SVG/UserSVG";
import { SearchSVG } from "@/components/SVG/SearchSVG";
import { CollectionSVG } from "@/components/SVG/CollectionSVG";
import { isOnPathname } from "@/lib/Navbar/pathname";

export const MobileNavbar = () => {
  const user: boolean = true;
  const pathname = usePathname();

  const isOn = (route: string) =>
    isOnPathname(pathname, route)
      ? `bg-[#ffff00] py-1 px-4 rounded-md transition-all flex-2`
      : `flex-1`;

  const svgColor = (route: string) =>
    isOnPathname(pathname, route) ? "#000" : "#fff";

  return (
    <ul className="flex items-center justify-between md:hidden w-full">
      <li className={isOn("/")}>
        <Link href="/" className="grid place-items-center w-full h-full">
          <figure className={`w-5 h-5`}>
            <HomeSVG color={svgColor("/")} />
          </figure>
        </Link>
      </li>
      <li className={isOn("/collections")}>
        <Link
          href="/collections"
          className="grid place-items-center w-full h-full"
        >
          <figure className={`w-5 h-5`}>
            <CollectionSVG color={svgColor("/collections")} />
          </figure>
        </Link>
      </li>
      <li className={isOn("/search")}>
        <Link href="/search" className="grid place-items-center w-full h-full">
          <figure className={`w-5 h-5`}>
            <SearchSVG color={svgColor("/search")} />
          </figure>
        </Link>
      </li>
      <li className={isOn("/account")}>
        <Link
          href={user ? "/account" : "/account/login"}
          className="grid place-items-center w-full h-full"
        >
          <figure className={`w-5 h-5`}>
            <UserSVG color={svgColor("/account")} />
          </figure>
        </Link>
      </li>
    </ul>
  );
};
