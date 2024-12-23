"use client";

import { useTranslations } from "next-intl";

export const ComicAddFavorite = () => {
  const t = useTranslations("comic");

  return (
    <button className="flex items-center gap-4 justify-center w-full border border-yellow-w-gray py-3 rounded-md hover:text-[#999797] hover:border-yellow-w-gray/50 transition-colors">
      {/* <FavoriteBorderIcon className="w-6 h-6 text-yellow-w-gray" /> */}
      {t("favorite")}
    </button>
  );
};
