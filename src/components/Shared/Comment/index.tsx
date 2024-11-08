import Image from "next/image";
import { Button, Typography } from "@mui/material";

import ReplyIcon from "@mui/icons-material/Reply";
import DeleteIcon from "@mui/icons-material/Delete";

import ThumbUpAlt from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAlt from "@mui/icons-material/ThumbDownAlt";

export const Comment = () => {
  return (
    <article
      className="background-21-container flex flex-col gap-4"
      role="contentinfo"
    >
      <header className="flex gap-2 items-center">
        <figure className="w-12 h-12">
          <Image
            src={"/hoshino.png"}
            alt="Pfp"
            width={64}
            height={64}
            className="object-cover rounded-full w-full h-full"
          ></Image>
        </figure>
        <div className="h-full flex flex-col justify-center">
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
              className="flex items-center"
            >
              23
            </Button>
          </div>
          <div className="flex items-center">
            <Button
              sx={{
                color: "#999797",
                ":hover": {
                  backgroundColor: "#2a2a2a",
                },
                fontSize: "14px",
                textTransform: "capitalize",
              }}
            >
              Reply
            </Button>
            <Button
              sx={{
                color: "#999797",
                ":hover": {
                  backgroundColor: "#2a2a2a",
                },
                fontSize: "14px",
                textTransform: "capitalize",
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};
