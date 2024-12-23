import Image from "next/image";
import Link from "next/link";

import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import { PageMode } from "./PageMode";

export const ReadingHeader = () => {
  return (
    <header className="background-21-container flex flex-col py-2 px-4">
      <nav className="flex flex-col">
        <div className="flex justify-between items-center gap-x-4">
          <Link href="/">
            <figure className="w-8 h-8">
              <Image
                src="/logos/logo.png"
                alt="KajloMangas Logo"
                width={48}
                height={48}
                className="object-cover w-full h-full text-white"
              />
            </figure>
          </Link>
          <h2 className="text-[#999797] text-lg text-center">
            Comienza con una montana
          </h2>
          <PageMode />
        </div>
        <article className="w-full flex justify-between items-center mt-8">
          <Link href="/">
            <ChevronLeftIcon className="w-6 h-6 text-white" />
          </Link>
          <p className="flex-1 text-center">Capitulo 22</p>
          <Link href="/">
            <ChevronRightIcon className="w-6 h-6 text-white" />
          </Link>
        </article>
      </nav>
    </header>
  );
};
