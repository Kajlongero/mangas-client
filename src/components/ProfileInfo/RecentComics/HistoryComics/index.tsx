import { ComicItem } from "../ComicItem";

type Props = {
  date: string;
  comics: number[];
};

export const HistoryComicsByDateComponent = (props: Props) => {
  return (
    <>
      <h3 className="text-lg text-white">{props.date}</h3>
      <section className="grid grid-cols-1 gap-2 xl:grid-cols-2 xl:gap-4">
        {props.comics.map((elem, idx) => (
          <ComicItem key={`profile-comic-history-${elem}-${idx}`} />
        ))}
      </section>
    </>
  );
};
