import { NavLinks } from "@/core/shared/interfaces/navlinks.model";

export const navlinks: NavLinks[] = [
  {
    name: "Home",
    ariaLabel: "Go to Home",
    pathname: "/",
  },
  {
    name: "Collections",
    ariaLabel: "Comics Collections",
    pathname: "/collections",
  },
];

export const profilelinks: NavLinks[] = [
  {
    name: "Info",
    ariaLabel: "Go to your user info",
    pathname: "/account/info",
  },
  {
    name: "Recent Comics",
    ariaLabel: "Go to your recent comics readed",
    pathname: "/account/recent-comics",
  },
  {
    name: "Recent Comments",
    ariaLabel: "Go to your recent comments",
    pathname: "/account/comments",
  },
  {
    name: "Favorites Comics",
    ariaLabel: "Go to your favorite comics",
    pathname: "/account/favorites",
  },
  {
    name: "Preferences",
    ariaLabel: "Go to your preferences user settings",
    pathname: "/account/preferences",
  },
];
