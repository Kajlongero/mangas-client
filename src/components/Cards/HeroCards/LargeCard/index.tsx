import Link from "next/link";
import Image from "next/image";

import s from "./styles.module.css";

export const LargeCard = () => {
  return (
    <Link href="/" className="flex-1">
      <article className={`${s.card}`}>
        <figure className={s.cardImage}>
          <Image
            width={2048}
            height={2048}
            src="/IsekaiMaouToShoukanSFW.jpg"
            alt="Natsu Image"
            className={s.cardImage__image}
          />
        </figure>
        <header className={s.cardInfo}>
          <h4 className={s.cardInfo__title}>Insert title here</h4>
          <p className={s.cardInfo__description}>Insert description here</p>
        </header>
      </article>
    </Link>
  );
};
