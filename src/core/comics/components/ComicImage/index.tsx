import Image from "next/image";
import { ComicAddFavorite } from "./ComicAddFavorite";

export const ComicImage = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <figure className="`max-sm:max-w-48 max-lg:max-w-56 lg:max-w-64 z-10">
        <Image
          src={"/hoshino.png"}
          alt="Comic Cover Image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          className="w-full h-full rounded-lg"
        />
      </figure>
      <ComicAddFavorite />
    </div>
  );
};
