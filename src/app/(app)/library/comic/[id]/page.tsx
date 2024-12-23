import { ComicInfo } from "@/core/comics/components/ComicInfo";
import { ComicImage } from "@/core/comics/components/ComicImage";
import { ComicInfoContainer } from "@/core/comics/components/ComicInfoContainer";
import { ComicOptionsContainer } from "@/core/comics/components/ComicInfo/ComicOptionsContainer";

type Props = {
  searchParams: {
    [key: string]: string;
  };
  params: {
    id: string;
  };
};

export default async function ReadComicPage(props: Props) {
  const slug = await props.params;

  return (
    <main className="flex flex-col">
      <ComicInfoContainer>
        <ComicImage />
        <ComicInfo title={slug.id} />
      </ComicInfoContainer>
      <ComicOptionsContainer />
    </main>
  );
}
