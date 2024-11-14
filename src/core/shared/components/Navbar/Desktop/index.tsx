"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { HomeSVG } from "@/core/shared/components/SVG/HomeSVG";
import { CollectionSVG } from "@/core/shared/components/SVG/CollectionSVG";

import { isOnPathname } from "@/core/shared/lib/pathname";

export const DesktopNavbar = ({ children }: { children: React.ReactNode }) => {
  const user: boolean = false;
  const pathname = usePathname();

  const isOnDesktop = (route: string) =>
    isOnPathname(pathname, route)
      ? "text-yellow-w-gray bg-[#fcd34d40] "
      : "hover:bg-[#2a2a2a]";

  const svgColor = (route: string, color: string = "#000") =>
    isOnPathname(pathname, route) ? color : "#fff";

  return (
    <>
      <section className="max-md:hidden flex gap-4 items-center">
        {children}
        <ul className="flex gap-4">
          <li className={`px-4 py-1 rounded-lg transition ${isOnDesktop("/")}`}>
            <Link href="/" className="flex gap-2 items-center w-full h-full">
              <figure className={`mx-auto w-4 h-4`}>
                <HomeSVG color={svgColor("/", "#fcd34d")} />
              </figure>
              <p>Home</p>
            </Link>
          </li>
          <li
            className={`px-4 py-1 rounded-lg transition ${isOnDesktop(
              "/collections"
            )}`}
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
    </>
  );
};
