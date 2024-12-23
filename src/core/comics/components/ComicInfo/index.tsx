import { useTranslations } from "next-intl";
import Link from "next/link";

type Props = {
  title: string;
};

export const ComicInfo = (props: Props) => {
  const t = useTranslations("comic");

  return (
    <>
      <section className="background-21-container relative flex-1">
        <div className="flex gap-2">
          <h1 className="text-3xl flex-1">
            {props.title
              .replace("comic-", "")
              .replaceAll("-", " ")
              .split(" ")
              .map(
                (elem) =>
                  `${elem.substring(0, 1).toUpperCase()}${elem.substring(1)}`
              )
              .join(" ")}
          </h1>
          <span className="bg-red-600 rounded-md px-3 text-md h-fit mt-[6px]">
            R-18
          </span>
        </div>
        <div className="flex flex-col gap-1 mt-4">
          <p className="text-lg">{t("type")}: MANGA</p>
          <p className="text-lg">{t("status")}: Active</p>
          <p className="text-lg">{t("release")}: 22/04/2020</p>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <p className="text-md">{t("genres")}</p>
          <ul className="flex flex-wrap gap-x-3 gap-y-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((elem, idx) => (
              <li
                key={`${elem}-${idx}`}
                className="max-mobile:max-w-28 max-md:max-w-32 max-md:truncate border border-yellow-w-gray hover:border-yellow-w-gray/75 transition-colors rounded-md"
              >
                <Link
                  href={`/search?c=${idx}`}
                  className="max-mobile:max-w-28 max-md:max-w-32 max-md:truncate px-2 py-1 text-md hover:text-[#999797]"
                >
                  Adventure
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <p className="text-md">{t("translators")}</p>
          <ul className="flex flex-wrap gap-x-3 gap-y-6">
            {[1, 2, 3].map((elem, idx) => (
              <li
                key={`${elem}-${idx}`}
                className="max-mobile:max-w-28 max-md:max-w-32 max-md:truncate border border-yellow-w-gray hover:border-yellow-w-gray/75 transition-colors rounded-md"
              >
                <Link
                  href={`/search?c=${idx}`}
                  className="max-mobile:max-w-28 max-md:w-32 max-md:truncate px-2 py-1 text-md hover:text-[#999797]"
                >
                  Olympus Scanlation
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 mt-4 h-fit">
          <p>{t("titles")}</p>
          <ul className="flex flex-wrap gap-x-3 gap-y-6">
            {[1, 2, 3].map((elem, idx) => (
              <li
                key={`${elem}-${idx}`}
                className="max-mobile:max-w-28 max-md:max-w-32 max-md:truncate border border-yellow-w-gray hover:border-yellow-w-gray/75 transition-colors rounded-md"
              >
                <Link
                  href={`/search?c=${idx}`}
                  className="max-mobile:max-w-28 max-md:max-w-32 max-md:truncate px-2 py-1 text-md hover:text-[#999797]"
                >
                  Olympus Scanlation
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
