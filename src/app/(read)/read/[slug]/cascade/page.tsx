import { ComicCommentsContainer } from "@/core/comics/components/ComicInfo/ComicCommentsContainer";
import { ImageContainer } from "@/core/comics/components/ComicRead/ImageContainer";
import { ReactionsContainer } from "@/core/comics/components/ComicRead/ReactionsContainer";
import { ShareSocialMedia } from "@/core/comics/components/ComicRead/ShareMedia";

type Props = {
  searchParams: {
    [key: string]: string;
  };
  params: {
    slug: string;
  };
};

export default async function CascadePage(props: Props) {
  const { slug } = await props.params;

  return (
    <>
      <ImageContainer />
      <ReactionsContainer />
      <ShareSocialMedia />
      <div className="w-full max-w-5xl mx-auto max-xl:px-4">
        <ComicCommentsContainer />
      </div>
    </>
  );
}
