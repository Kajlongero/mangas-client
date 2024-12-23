"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";

import SearchIcon from "@mui/icons-material/Search";

type Props = {
  extraParams?: Record<string, unknown>;
  defaultValue?: string;
};

export const SearchBar = ({ extraParams, defaultValue }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = (extraParams?: Record<string, unknown>) => {
    if (!ref.current?.value || ref.current?.value === defaultValue) return;

    const origin = location.origin;
    const uri = new URL(origin);

    uri.searchParams.set("q", ref.current?.value as string);

    for (const [key, val] of Object.entries(extraParams || {})) {
      if (val) uri.searchParams.append(key, `${val}`);
    }

    router.push(`/search${uri.search}`);
  };

  return (
    <div
      role="searchbox"
      className="relative w-full rounded-lg border border-[#373737] hover:border focus:border focus-within:border-yellow-w-gray hover:border-yellow-w-gray transition-colors"
    >
      <SearchIcon
        className="text-white w-6 h-6 absolute right-4 top-2 bottom-2 cursor-pointer"
        onClick={() => handleSearch(extraParams)}
      />
      <input
        type="text"
        placeholder="Search comics"
        className="w-full h-full rounded-lg pl-4 pr-12 py-2 bg-transparent min-h-10 focus:outline-none"
        ref={ref}
        defaultValue={defaultValue ?? ""}
        title="Search Comics"
        aria-placeholder="Search Comics"
        onKeyUp={(e) => {
          const arr = ["Enter", "Intro"];

          if (e.key === arr[0] || e.key === arr[1]) {
            handleSearch(extraParams ?? {});
          }
        }}
      />
    </div>
  );
};
