import Link from "next/link";
import Image from "next/image";

import { Comic_Neue } from "next/font/google";

import { MobileNavbar } from "./Mobile";
import { DesktopNavbar } from "./Desktop";
import { Typography } from "@mui/material";

const comic = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const Navbar = async () => {
  return (
    <header
      className={`mx-auto max-w-7xl ${comic.className} w-full h-16 max-h-64 overflow-hidden py-4`}
    >
      <nav className="md:flex md:justify-between" role="navigation">
        <MobileNavbar />
        <DesktopNavbar>
          <Link href="/" title="Home" className="flex items-center gap-2">
            <figure className="w-9 h-9">
              <Image
                src="/logos/logo.png"
                alt="KajloManga Logo Image"
                width={36}
                height={36}
                className="object-cover object-center w-full h-full"
              />
            </figure>
            <Typography variant="body1">KajloMangas</Typography>
          </Link>
        </DesktopNavbar>
      </nav>
    </header>
  );
};
