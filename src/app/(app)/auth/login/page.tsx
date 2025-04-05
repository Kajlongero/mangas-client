import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { LoginForm } from "@/security/components/Forms/Login";

import { authLinks } from "@/common/utils/authLinks";

export default function LoginPage() {
  const t = useTranslations();

  return (
    <section className="relative w-full flex items-center justify-center z-10 max-sm:px-4 pb-12">
      <div className="w-full max-w-sm mx-auto mt-20 py-4 px-6 backdrop-blur-2xl rounded-md bg-[#1a1a1a]/75">
        <header className="flex flex-col gap-4 items-center">
          <figure className="relative w-20 h-20 object-cover">
            <Image
              src="/logos/logo.png"
              width={48}
              height={48}
              title="Kajlomangas logo"
              alt="Kajlomangas logo"
              className="object-contain w-full h-full bg-transparent rounded-lg"
            ></Image>
          </figure>
          <h3 className="text-white text-2xl text-center text-pretty">
            {t("auth.login.formTitle")}
          </h3>
        </header>
        <LoginForm />
        <div className="h-px w-full bg-[#fff]/40 mt-8"></div>
        <article className="mt-4">
          <ul className="flex flex-wrap gap-x-4 justify-center mt-4">
            {authLinks.map((elem) => (
              <li
                className="w-fit hover:text-[#999797]"
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
