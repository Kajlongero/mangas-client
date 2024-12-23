import Link from "next/link";
import Image from "next/image";

import { AccordionDetails } from "@mui/material";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";

export const ChapterItem = () => {
  return (
    <AccordionDetails
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 0,
        paddingRight: 0,
        gap: "0.5rem",
      }}
    >
      <header className="flex gap-2 items-center">
        <figure className="max-mobile:hidden w-10 h-10">
          <Image
            src={"/hoshino.png"}
            alt="Comic Cover Image"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            className="w-full h-full rounded-lg object-cover"
          />
        </figure>
        <h3 className="max-mobile:max-w-[5.5rem] max-sm:max-w-[8.5rem] max-lg:max-w-72 max-w-96 truncate">
          KajloMangas Olympusiano xdddddd Scan
        </h3>
        <div className="pl-4 md:pl-8 flex gap-2 items-center">
          <p className="text-xs bg-[#3a3a3a] px-2 py-1 rounded-md">
            22/10/2020
          </p>
          <p className="text-xs bg-[#3a3a3a] px-2 py-1 rounded-md">EN</p>
        </div>
      </header>
      <Link href="/read/121212/cascade">
        <PlayArrowIcon className="text-white w-6 h-6" />
      </Link>
    </AccordionDetails>
  );
};
