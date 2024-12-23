import Link from "next/link";
import Image from "next/image";

import { useTranslations } from "next-intl";

import { authLinks } from "@/common/utils/auth.links";

export default function AuthPage() {
  const t = useTranslations();

  return (
    <section className="w-full flex items-center justify-center z-10 max-sm:px-4 pb-12">
      <div className="w-full max-w-sm mx-auto mt-20 py-4 px-6 backdrop-blur-2xl rounded-md bg-[#1a1a1a]/75">
        <header className="flex flex-col gap-4 items-center">
          <figure className="relative w-16 h-16 object-cover">
            <Image
              src="/logos/logo-removebg-preview.png"
              width={48}
              height={48}
              title="Kajlomangas logo"
              alt="Kajlomangas logo"
              className="object-contain w-full h-full bg-transparent rounded-lg"
            ></Image>
          </figure>
          <h3 className="text-white text-2xl text-center text-pretty">
            {t("auth.index.formTitle")}
          </h3>
        </header>
        <article className="w-full flex flex-col gap-4 mt-12">
          <Link
            href={`/auth/signup`}
            className="w-full px-4 py-3 bg-[#1a1a1a]/60 text-center text-white uppercase hover:bg-[#1a1a1a]/25 rounded-full font-bold transition-colors"
          >
            {t("auth.index.signupButton")}
          </Link>
          <Link
            href={`/auth/login`}
            className="w-full px-4 py-3 bg-[#1a1a1a]/60 text-center text-white uppercase rounded-full hover:bg-[#1a1a1a]/25 font-bold transition-colors"
          >
            {t("auth.index.loginButton")}
          </Link>
        </article>
        <div className="h-px w-full bg-[#fff]/40 mt-8"></div>
        <article className="mt-4">
          <ul className="flex flex-wrap gap-x-4 justify-center mt-4">
            {authLinks.map((elem) => (
              <li
                className="w-fit"
                key={`auth-links-${elem.id}-${
                  elem.name[t("officialLanguage") as "en" | "es"]
                }`}
              >
                <Link href={elem.path}>
                  {elem.name[t("officialLanguage") as "en" | "es"]}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-center text-pretty mt-4">
            {t("auth.index.bottomMessage")}
          </p>
        </article>
      </div>
    </section>
  );
}
