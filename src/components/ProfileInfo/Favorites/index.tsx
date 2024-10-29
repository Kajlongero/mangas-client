import { ComicItem } from "../RecentComics/ComicItem";

type Props = {
  comics: number[];
};

export const FavoritesComponent = (props: Props) => {
  return (
    <section className="grid grid-cols-1 gap-2 xl:grid-cols-2 xl:gap-4">
      {props.comics.map((elem, idx) => (
        <ComicItem key={`profile-comic-favorites-${elem}-${idx}`} />
      ))}
    </section>
  );
};
