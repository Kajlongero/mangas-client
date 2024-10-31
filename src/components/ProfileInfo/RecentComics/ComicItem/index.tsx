"use client";

import Image from "next/image";

import { TrashIcon } from "@heroicons/react/24/outline";

export const ComicItem = () => {
  return (
    <article className="flex gap-4 items-center relative background-21-container">
      <figure className="min-w-[75px] min-h-[125px] w-[100px] h-[150px] max-mobile:w-[75px] max-mobile:h-[125px]">
        <Image
          src={`/IsekaiMaouToShoukanSFW.jpg`}
          alt="Recent Comic"
          width={225}
          height={375}
          className="w-full h-full object-cover rounded-md"
        />
      </figure>
      <div className="flex flex-col gap-4 overflow-x-hidden">
        <h3 className="text-lg text-white truncate">
          Comienza con una montania epica
        </h3>
        <p className="text-md text-white">Capitulo: 323</p>
        <TrashIcon className="w-6 h-6 absolute top-0 right-0 z-10 cursor-pointer" />
      </div>
    </article>
  );
};
