import { StandardContainer } from "@/containers/StandardContainer";
import { HistoryComicsByDateComponent } from "./HistoryComics";

export const RecentComicsComponent = () => {
  return (
    <>
      <StandardContainer>
        <h3 className="text-[#ffffff] text-lg">Comics leidos recientemente</h3>
      </StandardContainer>
      <HistoryComicsByDateComponent comics={[1, 2, 3, 4]} date="27/10/2024" />
      <HistoryComicsByDateComponent comics={[1, 2, 3, 4]} date="27/10/2024" />
      <HistoryComicsByDateComponent comics={[1, 2, 3, 4]} date="27/10/2024" />
      <HistoryComicsByDateComponent comics={[1, 2, 3, 4]} date="27/10/2024" />
      <HistoryComicsByDateComponent comics={[1, 2, 3, 4]} date="27/10/2024" />
    </>
  );
};
