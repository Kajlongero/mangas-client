"use client";

import Image from "next/image";

import { useRef, useState } from "react";

import LockIcon from "@mui/icons-material/Lock";
import { useTranslations } from "next-intl";

export const CommentInput = () => {
  const t = useTranslations("comments.input");

  const [letterLength, setLetterLength] = useState<number>(0);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <section className="w-full flex gap-2 mb-4">
      <div className="min-w-16 max-w-16 flex flex-col gap-y-4 items-center">
        <figure className="min-w-12 h-12 max-h-12">
          <Image
            src={"/hoshino.png"}
            alt="Pfp"
            width={48}
            height={48}
            className="object-cover rounded-full w-full h-full"
          ></Image>
        </figure>
        <p>{letterLength}/255</p>
      </div>
      <div className="w-full flex flex-col flex-1">
        <div className="relative">
          <textarea
            name="input-comment"
            id="input-comment"
            className="relative bg-transparent border border-[#999797] w-full h-full min-h-32 rounded-lg px-4 py-2 resize-none"
            placeholder={t("placeholder")}
            onChange={(e) => setLetterLength(() => e.target.value.length)}
            title={t("label")}
            aria-label={t("label")}
            maxLength={255}
          ></textarea>
          <div className="p-4 absolute flex items-center justify-center gap-4 bg-[#2a2a2a] w-full h-full top-0 opacity-80 rounded-lg">
            <LockIcon
              className="text-white"
              sx={{
                width: "2rem",
                height: "2rem",
              }}
            />
            <p className="text-white text-lg text-pretty">{t("lock")}</p>
          </div>
        </div>
        <button
          className="w-fit bg-[#2a2a2a] mt-3 py-2 px-4 rounded-md place-self-end disabled:cursor-not-allowed"
          disabled
        >
          {t("button")}
        </button>
      </div>
    </section>
  );
};
