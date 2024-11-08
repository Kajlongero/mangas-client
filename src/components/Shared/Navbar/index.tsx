"use client";

import Link from "next/link";
import Image from "next/image";
import { Comic_Neue } from "next/font/google";
import { usePathname } from "next/navigation";

import { useId } from "react";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { HomeSVG } from "@/components/SVG/HomeSVG";
import { CollectionSVG } from "@/components/SVG/CollectionSVG";
import { SearchSVG } from "@/components/SVG/SearchSVG";
import { UserSVG } from "@/components/SVG/UserSVG";
import { isOnPathname } from "@/lib/Navbar/pathname";

const comic = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const Navbar = () => {
  const id = useId();

  const user: boolean = false;
  const pathname = usePathname();

  const isOn = (route: string) =>
    isOnPathname(pathname, route)
      ? `bg-[#ffff00] m-auto h-8 rounded-md transition-all flex-2`
      : `flex-1`;

  const isOnDesktop = (route: string) =>
    isOnPathname(pathname, route) ? "text-yellow-w-gray bg-[#fcd34d40] " : "";

  const svgColor = (route: string, color: string = "#000") =>
    isOnPathname(pathname, route) ? color : "#fff";

  return (
    <header
      className={`mx-auto max-w-7xl ${comic.className} w-full h-16 max-h-64 overflow-hidden py-4`}
    >
      <nav className="md:flex md:justify-between" role="navigation">
        <ul className="flex items-center justify-between md:hidden w-full">
          <li className={isOn("/")}>
            <Link href="/" className="flex items-center w-full h-full">
              <figure className={`mx-auto w-5 h-5`}>
                <HomeSVG color={svgColor("/")} />
              </figure>
            </Link>
          </li>
          <li className={isOn("/collections")}>
            <Link
              href="/collections"
              className="flex items-center w-full h-full"
            >
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
          <li className={isOn("/account")}>
            <Link
              href={user ? "/account/info" : "/auth/login"}
              className="flex items-center w-full h-full"
            >
              <figure className={`mx-auto w-5 h-5`}>
                <UserSVG color={svgColor("/account")} />
              </figure>
            </Link>
          </li>
        </ul>
        <section className="max-md:hidden flex gap-4 items-center">
          <Link href="/" title="Home" className="flex items-center gap-2">
            <figure className="w-9 h-9">
              <Image
                src="/logos/logo.png"
                alt="KajloManga Logo Image"
                width={36}
                height={36}
                className="object-cover object-center w-full h-full"
              />
            </figure>
            <Typography variant="body1">KajloMangas</Typography>
          </Link>
          <ul className="flex gap-4">
            <li className={`px-4 py-1 rounded-lg ${isOnDesktop("/")}`}>
              <Link href="/" className="flex gap-2 items-center w-full h-full">
                <figure className={`mx-auto w-4 h-4`}>
                  <HomeSVG color={svgColor("/", "#fcd34d")} />
                </figure>
                <p>Home</p>
              </Link>
            </li>
            <li
              className={`px-4 py-1 rounded-lg ${isOnDesktop("/collections")}`}
            >
              <Link
                href="/collections"
                className="flex gap-2 items-center w-full h-full"
              >
                <figure className={`mx-auto w-4 h-4`}>
                  <CollectionSVG color={svgColor("/collections", "#fcd34d")} />
                </figure>
                <p>Collections</p>
              </Link>
            </li>
          </ul>
        </section>
        <section className="max-md:hidden">
          <ul className="flex items-center gap-1">
            <li className="py-2 px-2 transition-colors hover:bg-[#3a3a3a] rounded-full">
              <Link
                href="/search"
                title="Search comics"
                className="w-full h-full flex items-center justify-center"
              >
                <SearchIcon className="text-white w-6 h-6" />
              </Link>
            </li>
            <li>
              {user ? (
                <Link
                  href="/account/info"
                  title="Account info"
                  className="w-full h-full flex items-center justify-center"
                >
                  <AccountCircleIcon className="text-white " />
                </Link>
              ) : (
                <Link href="/auth/login">
                  <p className="px-4 py-1 transition-colors hover:bg-[#3a3a3a] rounded-md">
                    Iniciar sesion
                  </p>
                </Link>
              )}
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
};
