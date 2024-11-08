"use client";

import { HistoryComicsByDateComponent } from "../HistoryComics";

export const RecentComicsContainer = () => {
  return (
    <>
      <HistoryComicsByDateComponent
        comics={[]}
        date=""
      ></HistoryComicsByDateComponent>
    </>
  );
};
