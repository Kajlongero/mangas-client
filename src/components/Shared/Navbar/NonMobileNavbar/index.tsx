import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const NonMobileNavbar = () => {
  return (
    <nav
      className="hidden md:flex"
      role="navigation"
      aria-label="Mobile Navigation"
    >
      <section>
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
        <ul></ul>
      </section>
      <section></section>
    </nav>
  );
};
