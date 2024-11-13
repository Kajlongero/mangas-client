import Link from "next/link";
import Image from "next/image";

export const LargeCard = () => {
  return (
    <article className="h-full relative max-md:aspect-video">
      <Link href="/read/comic/comic-comienza-con-una-montania">
        <figure className="w-full h-full min-w-full max-w-[32rem]">
          <Image
            alt="Standar Card Image"
            src="/IsekaiMaouToShoukanSFW.jpg"
            width={480}
            height={480}
            className="object-cover rounded-md w-full h-full image-linear-gradient"
          ></Image>
        </figure>
        <header className="absolute bottom-0 px-4 py-2 truncate w-full">
          <h3 className="text-white text-md truncate">
            Comienza con una montania epica
          </h3>
          <p className="text-custom-gray text-sm truncate">
            Texto de description super random para agregar y se vea poblado
          </p>
        </header>
      </Link>
    </article>
  );
};
