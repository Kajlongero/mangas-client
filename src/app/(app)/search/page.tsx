import { SearchContainer } from "@/core/search/components/SearchContainer";
import { VerticalContainer } from "@/core/shared/containers/Vertical";

type Props = {
  searchParams: {
    [key: string]: string;
  };
};

export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <>
      <SearchContainer searchVal={params.q} />
      <VerticalContainer />
    </>
  );
}
