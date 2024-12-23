"use client";

import { ComicItem } from "@/core/user/components/Profile/RecentComics/ComicItem";
import { Typography } from "@mui/material";

export default function FavoritesPage() {
  return (
    <section className="py-8">
      <article className="background-21-container mb-8">
        <Typography variant="body1" className="text-yellow-w-gray">
          Favorites Comics
        </Typography>
      </article>
      <div className="grid grid-cols-1 gap-2 xl:grid-cols-2 xl:gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem, idx) => (
          <ComicItem
            key={`profile-comic-favorites-${elem}-${idx}`}
            title="Delete comic from favorites"
            subtitle="Are you sure that you want to remove this comic from favorites?"
            description={`${idx}-delete-comic-from-favorites`}
          />
        ))}
      </div>
    </section>
  );
}
