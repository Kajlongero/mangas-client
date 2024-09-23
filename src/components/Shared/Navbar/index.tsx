import Image from "next/image";
import { Comic_Neue } from "next/font/google";
import { navlinks } from "@/utils/navlinks";
import { NavbarItem } from "./NavbarItem";
import { MobileNavbar } from "./MobileNavbar";
import { AuthButtons } from "./AuthButtons";
import { SearchInput } from "@/components/Search";

const comic = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const Navbar = () => {
  return (
    <header
      className={`container mx-auto max-w-7xl ${comic.className} w-full h-16 max-h-64 overflow-hidden max-xl:px-8 py-4`}
    >
      <nav className="max-md:block md:flex">
        <MobileNavbar />
        <div className="max-md:hidden flex items-center gap-4 md:flex-1">
          <figure className="flex items-center gap-1">
            <Image
              src="/logos/logo.png"
              alt="KajloManga Logo Image"
              width={36}
              height={36}
              className="object-cover object-center w-9 h-9"
            />
            <p>KajloMangas</p>
          </figure>
          <ul className="pl-4 flex gap-4">
            {navlinks.map((navlink, index) => (
              <li
                key={`navlink-pathname-${navlink.pathname}-url-${navlink.url}-${index}`}
              >
                <NavbarItem navlink={navlink} />
              </li>
            ))}
          </ul>
        </div>
        <div className="max-md:hidden flex items-center">
          <SearchInput />
          <AuthButtons />
        </div>
      </nav>
    </header>
  );
};
