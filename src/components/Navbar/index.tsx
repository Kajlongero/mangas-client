import { Comic_Neue } from "next/font/google";

import { MobileNavbar } from "./MobileNavbar";

const comic = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const Navbar = () => {
  return (
    <header
      className={`mx-auto max-w-7xl ${comic.className} w-full h-16 max-h-64 overflow-hidden py-4`}
    >
      <MobileNavbar />
      <nav className="max-md:hidden"></nav>
    </header>
  );
};
