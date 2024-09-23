import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { FlexWrapContainer } from "@/containers/FlexWrapContainer";
import { HorizontalContainer } from "@/containers/HorizontalContainer";
import { VerticalContainer } from "@/containers/VerticalCointaner";

export default function Home() {
  return (
    <>
      <Hero />
      <HorizontalContainer title="Favoritos" mangas={{}} />
      <FlexWrapContainer title="Populares" url="/collections/popular" />
      <VerticalContainer
        title="Actualizados recientemente"
        url="/collections/recent"
      />
      <Footer />
    </>
  );
}
