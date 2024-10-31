import { HistoryComicsByDateComponent } from "./HistoryComics";

export const RecentComicsComponent = () => {
  return (
    <>
      <div className="background-21-container">
        <h3 className="text-[#ffffff] text-lg">Comics leidos recientemente</h3>
      </div>
      <HistoryComicsByDateComponent comics={[1, 2, 3, 4]} date="27/10/2024" />
      <HistoryComicsByDateComponent comics={[1, 2, 3, 4]} date="27/10/2024" />
      <HistoryComicsByDateComponent comics={[1, 2, 3, 4]} date="27/10/2024" />
      <HistoryComicsByDateComponent comics={[1, 2, 3, 4]} date="27/10/2024" />
      <HistoryComicsByDateComponent comics={[1, 2, 3, 4]} date="27/10/2024" />
    </>
  );
};
