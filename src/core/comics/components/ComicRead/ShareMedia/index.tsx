"use client";

import { IconButton } from "@mui/material";

import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

export const ShareSocialMedia = () => {
  return (
    <section className="my-8 px-4 sm:px-8">
      <div className="background-21-container flex flex-col gap-4 max-w-3xl mx-auto">
        <h3 className="text-lg font-bold text-center">
          Share in your social media!
        </h3>

        <div className="flex flex-wrap gap-x-4 text-white justify-center">
          <IconButton color="inherit" size="medium">
            <XIcon fontSize="medium" />
          </IconButton>
          <IconButton
            size="medium"
            sx={{
              color: "#0866ff",
            }}
          >
            <FacebookIcon fontSize="medium" />
          </IconButton>
          <IconButton
            size="medium"
            sx={{
              color: "#01bc39",
            }}
          >
            <WhatsAppIcon fontSize="medium" />
          </IconButton>
          <IconButton
            size="medium"
            sx={{
              color: "#27a5e5",
            }}
          >
            <TelegramIcon fontSize="medium" />
          </IconButton>
        </div>
      </div>
    </section>
  );
};
