"use client";

import Link from "next/link";
import { NavLinks } from "@/types/NavLinks";
import { usePathname } from "next/navigation";

import s from "./styles.module.css";
import { isOnPathname } from "@/utils/pathname";

type Props = {
  navlink: NavLinks;
};

export const NavbarItem = ({ navlink }: Props) => {
  const pathname = usePathname();

  const hasPathname = isOnPathname(pathname, navlink.url)
    ? `${s.navbarRoute} ${s.actualPath}`
    : `${s.navbarRoute} ${s.standardPath}`;

  return (
    <Link href={navlink.url} className={hasPathname}>
      {navlink.pathname}
    </Link>
  );
};
