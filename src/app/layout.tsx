import { Navbar } from "@/components/Shared/Navbar";
import "./globals.css";
import { ReactQueryProvider } from "@/context/ReactQuery";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KajloMangas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`mx-auto container px-4 sm:px-8`}>
        <ReactQueryProvider>
          <Navbar />
          {children}
        </ReactQueryProvider>
      </body>
    </html>
  );
}
