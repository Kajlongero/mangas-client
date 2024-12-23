import Link from "next/link";

import { useTranslations } from "next-intl";

import LaunchIcon from "@mui/icons-material/Launch";
import RecommendIcon from "@mui/icons-material/Recommend";

import { LargeCard } from "@/core/shared/components/ComicCard/Large";

export const Hero = () => {
  const t = useTranslations("landing.hero");

  return (
    <section className="w-full mt-8">
      <div className="background-21-container">
        <div className="flex gap-2 items-center">
          <RecommendIcon />
          <h2 className="text-right">{t("title")}</h2>
        </div>
      </div>
      <div className="custom-horizontal-scrollbar pb-4 grid md:grid-cols-2 md:overflow-x-auto gap-4 w-full mt-6 max-md:flex max-md:overflow-x-scroll max-md:aspect-video max-md:object-cover">
        <LargeCard />
        <LargeCard />
      </div>
      <div className="flex w-full max-w-[32rem] mx-auto mt-6 items-center">
        <Link
          className="w-full flex-1 text-center background-21-container"
          href="/recommended"
        >
          {t("seeMoreButton")}
          <LaunchIcon fontSize="small" className="ml-2" />
        </Link>
      </div>
    </section>
  );
};
