import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";

export const Comment = () => {
  return (
    <article
      className="background-21-container flex flex-col gap-4"
      role="contentinfo"
    >
      <header className="flex gap-2 items-center">
        <figure className="w-12 h-12">
          <Image
            src={"/hoshino.png"}
            alt="Pfp"
            width={64}
            height={64}
            className="object-cover rounded-full w-full h-full"
          ></Image>
        </figure>
        <div className="h-full flex flex-col justify-center">
          <p>Kajlongero Takanashi Developer</p>
          <span className="text-[#909090] text-xs">
            {new Date().toDateString()}
          </span>
        </div>
      </header>
      <div className="">
        <p>Contenido del comentario super epico para poner cosas aqui xd</p>
        <div className="flex justify-between mt-2">
          <div className="flex items-center gap-4">
            <div className="flex gap-1 items-center cursor-pointer">
              <HandThumbUpIcon className="w-4 h-4 text-[#bbb]" />
              <p className="text-[#bbb] text-sm">23</p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer">
              <HandThumbDownIcon className="w-4 h-4 text-[#bbb]" />
              <p className="text-[#bbb] text-sm">4</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
