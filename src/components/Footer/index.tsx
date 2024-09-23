import Image from "next/image";
import s from "./styles.module.css";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <section className={s.footerLeft}>
        <h2>KajloMangas</h2>
        <p>Lee tus mangas, manwhas y manhuas preferidos aquí!</p>
        <p>
          Special thanks to svgrepo for providing the icons and HeroIcons as
          well!
        </p>
      </section>
      <section className={s.footerRight}>
        <Image
          src="/logos/logo.png"
          alt="KajloMangas Logo"
          width={80}
          height={80}
        />

        <p>Síguenos en:</p>
        <ul className={s.footerRight__socialMedia}>
          <li className="footerRight__socialMedia__icon">
            <a
              href="https://facebook.com"
              rel="noreferrer nooperner"
              title="Scan Facebook"
              about="socialmedia__facebook"
            >
              <Image
                src="/icons/facebook.svg"
                alt="Facebook Icon"
                width={36}
                height={36}
                className="footerRight__socialMedia__iconImage"
              />
            </a>
          </li>
          <li className="footerRight__socialMedia__icon">
            <a
              href="https://facebook.com"
              rel="noreferrer nooperner"
              title="Scan X - Twitter"
              about="socialmedia__x"
            >
              <Image
                src="/icons/x.svg"
                alt="X Icon"
                width={36}
                height={36}
                className="footerRight__socialMedia__iconImage"
              />
            </a>
          </li>
          <li className="footerRight__socialMedia__icon">
            <a
              href="https://linkedin.com"
              rel="noreferrer nooperner"
              title="Developer Linkedin"
              about="socialmedia__Linkedin"
            >
              <Image
                src="/icons/linkedin.svg"
                alt="Linkedin Icon"
                width={36}
                height={36}
                className="footerRight__socialMedia__iconImage"
              />
            </a>
          </li>
          <li className="footerRight__socialMedia__icon">
            <a
              href="https://github.com/Kajlongero"
              rel="noreferrer nooperner"
              title="Developer Github"
              about="socialmedia__github"
            >
              <Image
                src="/icons/github.svg"
                alt="Github Icon"
                width={36}
                height={36}
                className="footerRight__socialMedia__iconImage"
              />
            </a>
          </li>
        </ul>
      </section>
    </footer>
  );
};
