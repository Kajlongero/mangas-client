import { Metadata } from "next";

import { Navbar } from "@/core/shared/components/Navbar";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: "KajloMangas",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="max-w-7xl mx-auto container px-4 sm:px-8">
      <Navbar />
      {children}
    </main>
  );
}
