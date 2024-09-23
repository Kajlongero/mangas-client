import Link from "next/link";
import Image from "next/image";
import s from "./styles.module.css";

export const MangaUpdateCard = () => {
  return (
    <Link href="/read/1">
      <article className={s.card}>
        <figure className={s.cardImage}>
          <Image
            fill
            src="/hoshino.png"
            alt="Imagen"
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            className={s.cardImage__image}
          />
        </figure>
        <div className={s.card__infoContainer}>
          <h4 className={s.card__infoContainer__title}>Insert title here</h4>
          <div className={s.card__infoContainer__updateInfo}>
            <p>Capitulo 3</p>
            <p>Capítulo 2</p>
            <p>Capítulo 1</p>
          </div>
        </div>
      </article>
    </Link>
  );
};
