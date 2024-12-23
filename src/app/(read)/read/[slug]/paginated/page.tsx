import { ComicCommentsContainer } from "@/core/comics/components/ComicInfo/ComicCommentsContainer";
import { ImageContainer } from "@/core/comics/components/ComicRead/ImageContainer";
import { PageChanger } from "@/core/comics/components/ComicRead/PageChanger";
import { ReactionsContainer } from "@/core/comics/components/ComicRead/ReactionsContainer";
import { ShareSocialMedia } from "@/core/comics/components/ComicRead/ShareMedia";
import Image from "next/image";

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
      <div className="px-4 sm:px-8">
        <PageChanger />
      </div>
      <figure className="w-full mx-auto flex items-center justify-center">
        <Image
          src="/imgtest.webp"
          alt="Image Test"
          width={1024}
          height={1572}
        ></Image>
      </figure>
      <div className="px-4 sm:px-8">
        <PageChanger />
      </div>
      <ReactionsContainer />
      <ShareSocialMedia />
      <div className="px-4 sm:px-8">
        <ComicCommentsContainer />
      </div>
    </>
  );
}
