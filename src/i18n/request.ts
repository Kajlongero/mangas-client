import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

export default getRequestConfig(async () => {
  const h = await headers();

  const hdrs = { "accept-language": h.get("accept-language") as string };
  const languages = new Negotiator({ headers: hdrs }).languages();

  const locales = ["en", "es"];
  const defaultLocale = "en";

  const locale = match(languages, locales, defaultLocale);

  return {
    locale,
    messages: (await import(`./dictionaries/${locale}.json`)).default,
  };
});
