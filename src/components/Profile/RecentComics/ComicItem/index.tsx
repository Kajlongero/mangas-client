"use client";

import Image from "next/image";

import { useState } from "react";
import { IconButton, Tooltip, Typography } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { DialogComponent } from "@/components/Dialog";

type Props = {
  title: string;
  subtitle: string;
  description: string;
};

export const ComicItem = ({ description, subtitle, title }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <article className="flex gap-4 items-center relative background-21-container">
      {openModal && (
        <DialogComponent
          open={() => setOpenModal(!openModal)}
          isOpen={openModal}
          title={title}
          subtitle={subtitle}
          description={description}
        />
      )}
      <figure className="min-w-[75px] min-h-[125px] w-[100px] h-[150px] max-mobile:w-[75px] max-mobile:h-[125px]">
        <Image
          src={`/IsekaiMaouToShoukanSFW.jpg`}
          alt="Recent Comic"
          width={225}
          height={375}
          className="w-full h-full object-cover rounded-md"
        />
      </figure>
      <div className="flex flex-col gap-4 overflow-x-hidden flex-1 h-full justify-center">
        <Typography variant="h6" className="text-lg text-white truncate">
          Comienza con una montania epica
        </Typography>
        <Typography variant="body1" className="text-md text-custom-gray">
          Capitulo: 323
        </Typography>
        <Tooltip title="Borrar Comic" className="self-end">
          <IconButton
            className="w-10 h-10"
            aria-label="Delete Comic"
            onClick={() => setOpenModal(!openModal)}
          >
            <DeleteIcon className="text-white" />
          </IconButton>
        </Tooltip>
      </div>
    </article>
  );
};
