import { Metadata } from "next";

import { ReactQueryProvider } from "@/config/context/ReactQuery";
import { Navbar } from "@/core/shared/components/Navbar";

import "./globals.css";
import { cookies, headers } from "next/headers";
import {
  validateAccessToken,
  validateRefreshToken,
} from "@/security/lib/validate.tokens";
import { User } from "@/core/user/interfaces/user.model";

export const metadata: Metadata = {
  title: "KajloMangas",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const store = await cookies();

  // let user: User | null;

  // const access = await validateAccessToken(store);
  // if (!access.valid) {
  //   const res = await validateRefreshToken();

  //   user = res.valid ? res.data : null;
  // }

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
