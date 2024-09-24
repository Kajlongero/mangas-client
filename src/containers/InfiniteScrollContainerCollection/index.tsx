"use client";

import { MangaPreviewCard } from "@/components/Cards/MangaPreviewCard";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import s from "./styles.module.css";
import { Oswald } from "next/font/google";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

type Props = {
  title: string;
};

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const InfiniteScrollContainer = ({}: Props) => {
  const [elements, setElements] = useState<number[]>([]);
  const [endReached, setEndReached] = useState(false);
  // const [inverted, setInverted] = useState<boolean>(false);

  const fetchNumbers = async () => {
    console.log(endReached);

    if (elements.length >= 120) return setEndReached(true);

    await setTimeout(() => {
      setElements((p) => [...p, ...new Array(30).fill(0)]);
    }, 500);
  };

  useEffect(() => {
    fetchNumbers();
  }, []);

  return (
    <section className={s.infiniteScrollContainer}>
      <div className={s.infiniteScrollContainer__topContainer}>
        <div className={s.infiniteScrollContainer__titleContainer}>
          <h3 className={oswald.className}>Collections</h3>
          <p className={oswald.className}>
            Showing <strong>{elements.length}</strong> of <strong>120</strong>{" "}
            comics
          </p>
        </div>
        <button className={s.infiniteScrollContainer__filtersButton}>
          <AdjustmentsHorizontalIcon
            className={s.infiniteScrollContainer__filtersButton__icon}
          />
          Filters
        </button>
      </div>
      <InfiniteScroll
        dataLength={elements.length}
        next={fetchNumbers}
        loader={<h4>Loading...</h4>}
        hasMore={!endReached}
        className={s.infiniteScrollContainer__cardsContainer}
        endMessage={<div>No more elements</div>}
      >
        {elements.map((elem, index) => (
          <MangaPreviewCard key={index} />
        ))}
      </InfiniteScroll>
    </section>
  );
};
