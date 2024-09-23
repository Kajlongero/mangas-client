import Link from "next/link";
import Image from "next/image";

import s from "./styles.module.css";

type Props = {
  manga?: Mangas;
  url?: string;
};

export const MangaPreviewCard = ({ manga }: Props) => {
  return (
    <article className={s.card}>
      <Link href="/" className="">
        <figure className={s.cardImage}>
          <Image
            src="/hoshino.png"
            alt="Image Mock"
            width={525}
            height={750}
            className={s.cardImage__image}
          />
        </figure>
        <header className={s.cardInfo}>
          <h4 className={s.cardInfo__title}>Insert title here</h4>
          <ul className={s.cardInfo__categoriesContainer}>
            <li className={s.cardInfo__categoriesContainer__category}>
              Action
            </li>
            <li className={s.cardInfo__categoriesContainer__category}>Cute</li>
          </ul>
        </header>
      </Link>
    </article>
  );
};
