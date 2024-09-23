import { type NavLinks } from "@/types/NavLinks";

export const navlinks: NavLinks[] = [
  {
    pathname: "Home",
    url: "/",
    isPublic: true,
    needAccount: false,
    isForAdminOnly: false,
  },
  {
    pathname: "Colletions",
    url: "/collections",
    isPublic: true,
    needAccount: false,
    isForAdminOnly: false,
  },
];
