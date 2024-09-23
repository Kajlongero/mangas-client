import { CardContainer } from "@/containers/CardContainer";
import { HorizontalContainer } from "@/containers/HorizontalContainer";

export default async function CollectionsPage() {
  return (
    <>
      <CardContainer />
      <HorizontalContainer
        mangas={[] as Mangas[]}
        title="Comics más leídos en su género"
        subtitle="Una selección de aquellos que más se leen"
      />
    </>
  );
}
