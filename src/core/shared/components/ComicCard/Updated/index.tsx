import Image from "next/image";
import Link from "next/link";

export const UpdatedCard = () => {
  return (
    <Link href="/library/comic/comic-comienza-con-una-montania">
      <article className="w-full flex max-sm:flex-col gap-4 background-21-container">
        <figure className="relative min-w-48 min-h-48 aspect-square">
          <Image
            fill
            src="/hoshino.png"
            alt="Imagen"
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            className="w-full h-full object-cover bg-center rounded-lg"
          />
        </figure>
        <div className="flex flex-col w-full truncate flex-1">
          <h4 className="max-sm:mb-4 truncate">
            Titulo de mock super epico para corroborar que todo funciona bien
            correctamente y el truncate realmente esta haciendo el truncate
          </h4>
          <div className="flex flex-col flex-1 justify-end gap-2">
            <p className="bg-[#2a2a2a] rounded-[3rem] px-4 py-2">
              {"11/09/2024"} - Capitulo 3
            </p>
            <p className="bg-[#2a2a2a] rounded-[3rem] px-4 py-2">
              {"11/09/2024"} - Capítulo 2
            </p>
            <p className="bg-[#2a2a2a] rounded-[3rem] px-4 py-2">
              {"11/09/2024"} - Capítulo 1
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};
