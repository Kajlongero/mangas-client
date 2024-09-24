import { CardContainer } from "@/containers/CardContainer";
import { HorizontalContainer } from "@/containers/HorizontalContainer";
import { InfiniteScrollContainer } from "@/containers/InfiniteScrollContainerCollection";

export default async function CollectionsPage() {
  return (
    <>
      <CardContainer />
      <HorizontalContainer
        mangas={[] as Mangas[]}
        title="Comics más leídos en su género"
        subtitle="Una selección de aquellos que más se leen"
      />
      <InfiniteScrollContainer title="Collections" />
    </>
  );
}
