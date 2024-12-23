import Image from "next/image";
import Link from "next/link";

export const GrowCard = () => {
  return (
    <article className="relative min-w-32 min-h-40 w-full h-full">
      <Link href="/library/comic/comic-comienza-con-una-montania">
        <figure className="w-full h-full">
          <Image
            src="/hoshino.png"
            alt="Card Image"
            width={640}
            height={480}
            className="object-cover w-full h-full image-linear-gradient rounded-md"
          />
        </figure>
        <header className="w-full absolute bottom-0 px-4 pb-2 truncate">
          <h3 className="truncate">Texto para poblarlo de cualquier cosa xd</h3>
          <p className="truncate text-custom-gray text-xs">
            Descripcion pitera para hacer espacio igualmente
          </p>
        </header>
      </Link>
    </article>
  );
};
