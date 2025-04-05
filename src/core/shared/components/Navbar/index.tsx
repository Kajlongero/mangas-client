import Link from "next/link";
import Image from "next/image";

import { MobileNavbar } from "./Mobile";
import { DesktopNavbar } from "./Desktop";
import { Typography } from "@mui/material";
import { User } from "@/core/user/interfaces/userModel";

type Props = {
  user: User | null;
};

export const Navbar = async (props: Props) => {
  return (
    <header
      className={`relative z-10 mx-auto max-w-7xl w-full h-16 max-h-64 overflow-hidden py-4`}
    >
      <nav className="md:flex md:justify-between" role="navigation">
        <MobileNavbar />
        <DesktopNavbar user={props.user}>
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
