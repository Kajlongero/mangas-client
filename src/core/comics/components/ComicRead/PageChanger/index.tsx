"use client";

import { IconButton, Tooltip } from "@mui/material";

import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SettingsIcon from "@mui/icons-material/Settings";
import ReplyIcon from "@mui/icons-material/Reply";

export const PageChanger = () => {
  return (
    <section className="max-w-lg my-4 mx-auto background-21-container mt-4 w-full flex justify-between items-center gap-4">
      <Tooltip title="Go Back">
        <IconButton
          sx={{
            color: "#fff",
            p: 0.5,
          }}
        >
          <ReplyIcon fontSize="medium" color="inherit" />
        </IconButton>
      </Tooltip>
      <div className="flex justify-center items-center gap-2">
        <IconButton
          sx={{
            color: "#fff",
            p: 0.5,
          }}
        >
          <ArrowLeftIcon fontSize="large" />
        </IconButton>
        <span className="text-xl text-center">200 of 200</span>
        <IconButton
          sx={{
            color: "#fff",
            p: 0.5,
          }}
        >
          <ArrowRightIcon fontSize="large" color="inherit" />
        </IconButton>
      </div>
      <Tooltip title="Settings">
        <IconButton
          sx={{
            color: "#fff",
            p: 0.5,
          }}
        >
          <SettingsIcon fontSize="medium" color="inherit" />
        </IconButton>
      </Tooltip>
    </section>
  );
};
