"use client";

import { Button, IconButton } from "@mui/material";

import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

export const ReactionsContainer = () => {
  return (
    <section className="w-full mt-8 px-4">
      <div className="background-21-container flex flex-col gap-y-2 max-w-3xl mx-auto">
        <h3 className="text-center text-lg font-bold">Te gusto el capitulo?</h3>

        <div className="flex gap-x-4 w-full justify-center">
          <Button
            className="flex flex-col flex-1"
            sx={{
              color: "#fff",
              backgroundColor: "#3a3a3a",
              maxWidth: "10rem",
            }}
          >
            <ThumbUpIcon />
            Si, me gusto!
          </Button>
          <Button
            className="flex flex-col flex-1"
            sx={{
              color: "#999797",
              maxWidth: "10rem",
            }}
          >
            <ThumbDownIcon />
            No, no me gusto.
          </Button>
        </div>
      </div>
    </section>
  );
};
