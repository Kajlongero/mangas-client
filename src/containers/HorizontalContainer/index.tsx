import { Oswald } from "next/font/google";
import { MangaPreviewCard } from "@/components/Cards/MangaPreviewCard";

import s from "./styles.module.css";
import Link from "next/link";

type Props = {
  mangas: object;
  title: string;
  subtitle: string;
  showMore?: string;
};

const oswald = Oswald({
  subsets: ["latin"],
});

export const HorizontalContainer = ({ title, subtitle, showMore }: Props) => {
  return (
    <section className={s.horizontalContainer}>
      <div className={s.horizontalContainer__titleContainer}>
        <div>
          <h3 className={oswald.className}>{title}</h3>
          <p className={oswald.className}>{subtitle}</p>
        </div>
        {showMore && <Link href={showMore}>Show more</Link>}
      </div>
      <div className={s.horizontalContainer__cardsContainer}>
        {new Array(60).fill(0).map((manga, index) => (
          <MangaPreviewCard key={index} />
        ))}
      </div>
    </section>
  );
};
