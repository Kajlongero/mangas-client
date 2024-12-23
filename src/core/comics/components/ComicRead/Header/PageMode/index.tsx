"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArticleIcon from "@mui/icons-material/Article";
import { IconButton, Tooltip } from "@mui/material";

export const PageMode = () => {
  const pathname = usePathname();
  const split = pathname.split("/");

  const mode = split.at(-1);

  const titleStr =
    mode?.toLowerCase() === "paginated"
      ? "Read as a cascade mode"
      : "Read as a paginated mode";

  const str = split.splice(0, split.length - 1).join("/");
  const href = `${str}${
    mode?.toLowerCase() === "paginated" ? "/cascade" : "/paginated"
  }`;

  return (
    <Link
      href={href}
      aria-label={
        mode?.toLowerCase() === "paginated" ? "Cascade mode" : "Paginated mode"
      }
    >
      <Tooltip title={titleStr}>
        {mode?.toLowerCase() === "paginated" ? (
          <ArticleIcon />
        ) : (
          <MenuBookIcon />
        )}
      </Tooltip>
    </Link>
  );
};
