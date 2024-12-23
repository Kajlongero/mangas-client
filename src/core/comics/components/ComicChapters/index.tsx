"use client";

import { Accordion, AccordionSummary } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { ChapterItem } from "./ChapterItem";

export const ComicChapterItem = () => {
  return (
    <article className="background-21-container px-2">
      <Accordion
        sx={{
          backgroundColor: "transparent",
          color: "white",
          boxShadow: "none",
          padding: "0",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-white" />}
          aria-controls="chapter-200-panel-content"
          id="chapter-200-panel"
          sx={{
            padding: 0,
          }}
        >
          <p className="text-md">Capitulo 200 - Nombre capitulo</p>
        </AccordionSummary>
        <ChapterItem />
        <ChapterItem />
        <ChapterItem />
      </Accordion>
    </article>
  );
};
