import { Metadata } from "next";
import { Comic_Neue } from "next/font/google";

import { Navbar } from "@/core/shared/components/Navbar";
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
  return (
    <html lang="en">
      <body className={`${comic.className} mx-auto container px-4 sm:px-8`}>
        <ReactQueryProvider>
          <Navbar />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
