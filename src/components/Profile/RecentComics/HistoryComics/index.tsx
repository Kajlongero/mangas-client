import { Typography } from "@mui/material";
import { ComicItem } from "../ComicItem";

type Props = {
  date: string;
  comics: number[];
};

export const HistoryComicsByDateComponent = (props: Props) => {
  return (
    <section className="py-4">
      <Typography variant="body1" className="text-lg text-custom-gray pb-2">
        {props.date}
      </Typography>
      <section className="grid grid-cols-1 gap-2 xl:grid-cols-2 xl:gap-4">
        {props.comics.map((elem, idx) => (
          <ComicItem
            key={`profile-comic-history-${elem}-${idx}`}
            description={`${idx} delete comic from recents`}
            title="Delete from recent read comics"
            subtitle="Are you sure you want to delete this from recent read comics?"
          />
        ))}
      </section>
    </section>
  );
};
