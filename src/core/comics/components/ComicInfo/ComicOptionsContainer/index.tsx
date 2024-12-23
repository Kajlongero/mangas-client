"use client";

import { comicShownOptions } from "@/core/comics/utils/comicShownOptions";
import { useState } from "react";
import { ComicDescription } from "../ComicDescription";
import { ComicChaptersContainer } from "../../ComicChapters/Container";
import { ComicCommentsContainer } from "../ComicCommentsContainer";
import { useTranslations } from "next-intl";

export const ComicOptionsContainer = () => {
  const t = useTranslations();

  const [opt, setOpt] = useState<number>(1);

  return (
    <section className="mt-4">
      <div className="flex gap-4 flex-wrap">
        {comicShownOptions.map((elem, idx) => (
          <button
            key={`comic-${elem.id}-${
              elem.name[t("officialLanguage") as "en" | "es"]
            }-${idx}`}
            onClick={() => setOpt(elem.id as number)}
            className={`px-3 py-1 transition-colors rounded-md ${
              elem.id === opt
                ? "text-yellow-w-gray bg-[#fcd34d40]"
                : "border border-yellow-w-gray hover:border-yellow-w-gray/75"
            }`}
          >
            {elem.name[t("officialLanguage") as "en" | "es"]}
          </button>
        ))}
      </div>
      {opt === 1 && <ComicDescription />}
      {opt === 2 && <ComicChaptersContainer />}
      {opt === 3 && <ComicCommentsContainer />}
    </section>
  );
};
