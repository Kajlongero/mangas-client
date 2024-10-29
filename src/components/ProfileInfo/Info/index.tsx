"use client";

import { StandardContainer } from "@/containers/StandardContainer";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const ProfileInfoComponent = () => {
  return (
    <>
      <StandardContainer>
        <p className="pb-2 text-[#ffffff]">Email</p>
        <div className="text-[#aaa] flex gap-2 items-center">
          <UserCircleIcon className="w-8 h-8" />
          <p>kajlo@gmail.com</p>
        </div>
      </StandardContainer>
      <StandardContainer>
        <p className="pb-2 text-[#ffffff]">Username</p>
        <div className="text-[#aaa] flex gap-2 items-center">
          <UserCircleIcon className="w-8 h-8" />
          <p>Kajlongero Takanashi Developer</p>
        </div>
      </StandardContainer>
      <StandardContainer>
        <p className="pb-2 text-[#ffffff]">Password</p>
        <div className="flex gap-2 items-center">
          <Link
            href="/account/change-password"
            className="py-2 px-4 bg-[#09f] mt-2 rounded-md text-[#ffffff]"
          >
            Change password
          </Link>
        </div>
      </StandardContainer>
    </>
  );
};
