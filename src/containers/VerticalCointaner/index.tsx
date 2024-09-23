import { Oswald } from "next/font/google";
import s from "./styles.module.css";
import { MangaUpdateCard } from "@/components/Cards/UpdateCard";
import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

type Props = {
  title: string;
  url: string;
};

export const VerticalContainer = ({ title, url }: Props) => {
  return (
    <section className={s.verticalContainer}>
      <div className={s.verticalContainer__titleContainer}>
        <h3 className={oswald.className}>{title}</h3>
      </div>

      <div className={s.verticalContainer__cardsContainer}>
        {new Array(12).fill(0).map((elem, index) => (
          <MangaUpdateCard key={index} />
        ))}
      </div>
      <Link href={url} className={s.verticalContainer__showMoreButton}>
        Show More
        <ArrowTopRightOnSquareIcon
          className={s.verticalContainer__showMoreButton__icon}
        />
      </Link>
    </section>
  );
};
