import { Hero } from "@/core/landing/components/Hero";
import { DoubleContainer } from "@/core/shared/containers/Double";
import { HorizontalContainer } from "@/core/shared/containers/Horizontal";

export default function Home() {
  return (
    <>
      <Hero />
      <HorizontalContainer
        title="Favoritos"
        subtitle="Favoritos añadidos recientemente"
        route="/account/favorites"
      />
      <HorizontalContainer
        title="Populares"
        subtitle="Comics populares entre los lectores"
        route="/popular"
      />
      <DoubleContainer
        title="Actualizados recientemente"
        subtitle="Comics que hemos actualizado recientemente"
        route="/recent"
      />
    </>
  );
}
