import { Metadata } from "next";
import { Comic_Neue } from "next/font/google";

import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import { ReactQueryProvider } from "@/config/context/ReactQuery";

import "./globals.css";

export const metadata: Metadata = {
  title: "KajloMangas",
};

const comic = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <ReactQueryProvider>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <html lang={locale}>
          <body className={`${comic.className}`}>{children}</body>
        </html>
      </NextIntlClientProvider>
    </ReactQueryProvider>
  );
}
