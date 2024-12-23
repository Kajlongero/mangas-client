import { useTranslations } from "next-intl";

import { Hero } from "@/core/landing/components/Hero";
import { HorizontalContainer } from "@/core/shared/containers/Horizontal";
import { ContainerComicWithFilter } from "@/core/shared/containers/ComicWithFilter";

export default function CollectionsPage() {
  const t = useTranslations("collections");

  return (
    <>
      <HorizontalContainer
        title={t("popularsToday.title")}
        subtitle={t("popularsToday.subtitle")}
        route="/popular/today"
      />
      <HorizontalContainer
        title={t("popularsToday.title")}
        subtitle={t("popularsToday.subtitle")}
        route="/popular/week"
      />
      <Hero />
      <ContainerComicWithFilter categories={["All", "Fantasy"]} />
    </>
  );
}
