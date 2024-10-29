"use client";

import Image from "next/image";

import { StandardContainer } from "@/containers/StandardContainer";
import { TrashIcon } from "@heroicons/react/24/outline";

export const ComicItem = () => {
  return (
    <StandardContainer>
      <article className="flex gap-4 items-center relative">
        <figure className="w-[100] h-[150px]">
          <Image
            src={`/IsekaiMaouToShoukanSFW.jpg`}
            alt="Recent Comic"
            width={225}
            height={375}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="flex flex-col gap-4 flex-1">
          <h3 className="text-lg text-white">Comienza con una montania</h3>
          <p className="text-md text-white">Capitulo: 323</p>
          <TrashIcon className="w-6 h-6 absolute top-0 right-0 z-10 cursor-pointer" />
        </div>
      </article>
    </StandardContainer>
  );
};
