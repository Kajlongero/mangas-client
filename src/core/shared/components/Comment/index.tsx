"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { Button, IconButton, Typography } from "@mui/material";

import MoreVertIcon from "@mui/icons-material/MoreVert";

import ThumbUpAlt from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAlt from "@mui/icons-material/ThumbDownAlt";

export const Comment = () => {
  const t = useTranslations("comments.card");

  return (
    <article
      className="background-21-container flex flex-col gap-4"
      role="contentinfo"
    >
      <header className="flex gap-2 items-center">
        <figure className="min-w-12 h-12">
          <Image
            src={"/hoshino.png"}
            alt="Pfp"
            width={48}
            height={48}
            className="object-cover rounded-full w-full h-full"
          ></Image>
        </figure>
        <div className="h-full flex flex-col justify-center flex-1">
          <Typography variant="body1">
            Kajlongero Takanashi Developer
          </Typography>
          <Typography
            variant="body2"
            className="text-custom-gray text-xs"
            sx={{
              fontSize: "0.75rem",
            }}
          >
            {new Date().toDateString()}
          </Typography>
        </div>
        <IconButton
          sx={{
            color: "#fff",
          }}
        >
          <MoreVertIcon />
        </IconButton>
      </header>
      <div>
        <Typography variant="body2">
          Contenido del comentario super epico para poner cosas aqui xd
        </Typography>
        <div className="flex justify-between mt-2">
          <div className="flex items-center">
            <Button
              startIcon={<ThumbUpAlt />}
              sx={{
                color: "#999797",
                ":hover": {
                  backgroundColor: "#2a2a2a",
                },
              }}
              title={t("likeLabel")}
              aria-label={t("likeLabel")}
            >
              23
            </Button>
            <Button
              startIcon={<ThumbDownAlt />}
              sx={{
                color: "#999797",
                ":hover": {
                  backgroundColor: "#2a2a2a",
                },
              }}
              aria-label={t("dislikeLabel")}
              title={t("dislikeLabel")}
              className="flex items-center"
            >
              23
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};
