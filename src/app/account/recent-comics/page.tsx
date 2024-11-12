import { Typography } from "@mui/material";
import { HistoryComicsByDateComponent } from "@/core/user/components/Profile/RecentComics/HistoryComics";

export default async function RecentComicsPage() {
  return (
    <>
      <article className="background-21-container my-8">
        <Typography variant="body1" className="text-yellow-w-gray">
          Comics leidos recientemente
        </Typography>
      </article>
      <HistoryComicsByDateComponent comics={[1, 2, 3, 4]} date="27/10/2024" />
      <HistoryComicsByDateComponent comics={[1, 2, 3, 4]} date="27/10/2024" />
      <HistoryComicsByDateComponent comics={[1, 2, 3, 4]} date="27/10/2024" />
      <HistoryComicsByDateComponent comics={[1, 2, 3, 4]} date="27/10/2024" />
      <HistoryComicsByDateComponent comics={[1, 2, 3, 4]} date="27/10/2024" />
      <HistoryComicsByDateComponent comics={[1, 2, 3, 4]} date="27/10/2024" />
    </>
  );
}
