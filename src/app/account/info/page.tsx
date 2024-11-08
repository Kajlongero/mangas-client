"use client";

import Link from "next/link";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import { Typography } from "@mui/material";

export default function InfoPage() {
  return (
    <>
      <section className="flex flex-col gap-4 mt-8 pb-8">
        <article className="background-21-container mb-4">
          <Typography variant="body1" className="text-yellow-w-gray ">
            User information
          </Typography>
        </article>

        <article className="background-21-container">
          <Typography variant="body1" className="pb-2 text-white">
            Email
          </Typography>
          <div className="text-[#aaa] flex gap-2 items-center">
            <EmailIcon className="w-8 h-8" />
            <p>kajlo@gmail.com</p>
          </div>
        </article>
        <article className="background-21-container">
          <Typography variant="body1" className="pb-2 text-white">
            Username
          </Typography>
          <div className="text-[#aaa] flex gap-2 items-center">
            <PersonIcon className="w-8 h-8" />
            <p>Kajlongero Takanashi Developer</p>
          </div>
        </article>
        <article className="background-21-container">
          <Typography variant="body1" className="pb-2 text-white">
            Password
          </Typography>
          <div className="flex gap-2 items-center">
            <Link
              href="/account/change-password"
              className="py-2 px-4 bg-[#09f] mt-2 rounded-md text-white"
            >
              Change password
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
