import { StandardContainer } from "@/containers/StandardContainer";
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
} from "@heroicons/react/24/outline";

import Image from "next/image";

export const CommentComponent = () => {
  return (
    <StandardContainer>
      <article className="flex flex-col gap-4" role="contentinfo">
        <div className="flex gap-2 items-center">
          <figure className="w-12 h-12">
            <Image
              src={"/hoshino.png"}
              alt="Pfp"
              width={64}
              height={64}
              className="object-cover rounded-full w-full h-full"
            ></Image>
          </figure>
          <p>Kajlongero Takanashi Developer</p>
        </div>
        <div className="">
          <p>Contenido del comentario super epico para poner cosas aqui xd</p>
          <div className="flex justify-between mt-2">
            <div className="flex items-center gap-4">
              <div className="flex gap-1 items-center">
                <HandThumbUpIcon className="w-6 h-6 text-white" />
                <p className="text-white text-lg">0</p>
              </div>
              <div className="flex gap-1 items-center">
                <HandThumbDownIcon className="w-6 h-6 text-white" />
                <p className="text-white text-lg">0</p>
              </div>
            </div>
            <span className="text-[#aaa]">{new Date().toDateString()}</span>
          </div>
        </div>
      </article>
    </StandardContainer>
  );
};
