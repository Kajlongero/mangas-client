import { ComicChapterItem } from "..";

export const ComicChaptersContainer = () => {
  return (
    <section className="flex flex-col gap-4 mt-6">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((elem) => (
        <ComicChapterItem key={`comic-chapter-item-${elem}`} />
      ))}
    </section>
  );
};
