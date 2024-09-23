"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import s from "./styles.module.css";

const ALLOWED_KEYS = new Set(["NumpadEnter", "Enter"]);

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [blur, setBlur] = useState(false);

  const router = useRouter();

  const searchTo = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (!blur && ALLOWED_KEYS.has(ev.code)) return;

    if (blur && ALLOWED_KEYS.has(ev.code))
      return router.push("/search?q=" + searchValue.replaceAll(" ", "+"));
  };

  return (
    <div role="search" className={s.search}>
      <input
        type="text"
        className={`${
          blur ? `${s.searchInput} ${s.searchInputBlur}` : `${s.searchInput}`
        }`}
        title="Manga standard search"
        accept="text"
        value={searchValue}
        placeholder="Search Mangas"
        onFocus={() => setBlur(true)}
        onBlur={() => setBlur(false)}
        onKeyDown={(ev) => searchTo(ev)}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <MagnifyingGlassIcon
        className={s.searchIcon}
        onClick={() => {
          if (!searchValue) return;
          router.push("/search?q=" + searchValue.replaceAll(" ", "+"));
        }}
      />
    </div>
  );
};
