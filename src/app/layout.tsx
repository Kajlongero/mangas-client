import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Shared/Navbar";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const comic = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`mx-auto bg-common text-white ${comic.className} custom-scroll`}
      >
        <Navbar />
        <main className="container max-w-7xl max-xl:px-8 mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
