import { Hero } from "@/core/landing/components/Hero";
import { DoubleContainer } from "@/core/shared/containers/Double";
import { HorizontalContainer } from "@/core/shared/containers/Horizontal";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("landing");

  return (
    <>
      <Hero />
      <HorizontalContainer
        title={t("favorites.title")}
        subtitle={t("favorites.subtitle")}
        route="/account/favorites"
      />
      <HorizontalContainer
        title={t("populars.title")}
        subtitle={t("populars.subtitle")}
        route="/popular"
      />
      <DoubleContainer
        title={t("recentlyUpdated.title")}
        subtitle={t("recentlyUpdated.subtitle")}
        route="/recent"
      />
    </>
  );
}
