import Link from "next/link";
import { Oswald } from "next/font/google";
import { MangaPreviewCard } from "@/components/Cards/MangaPreviewCard";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import s from "./styles.module.css";

const oswald = Oswald({
  subsets: ["latin"],
});

type Props = {
  title: string;
  url: string;
};

export const FlexWrapContainer = ({ url, title }: Props) => {
  return (
    <section className={s.flexWrapContainer}>
      <div className={s.flexWrapContainer__titleContainer}>
        <h3 className={oswald.className}>{title}</h3>
        <p className={oswald.className}>
          Tus mangas favoritos actualizados recientemente
        </p>
      </div>
      <div className={s.flexWrapContainer__cardsContainer}>
        {new Array(30).fill(0).map((e, index) => (
          <MangaPreviewCard manga={e as Mangas} key={index} />
        ))}
      </div>
      <Link href={url} className={s.flexWrapContainer__showMoreButton}>
        Show More
        <ArrowTopRightOnSquareIcon
          className={s.flexWrapContainer__showMoreButton__icon}
        />
      </Link>
    </section>
  );
};
