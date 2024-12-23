import { GrowCard } from "../../components/ComicCard/GrowCard";

export const VerticalContainer = () => {
  return (
    <section className="w-full grid max-mobile:grid-cols-1 max-sm:grid-cols-2 max-md:place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-sm:justify-center gap-8 max-md:justify-center">
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ].map((elem, idx) => (
        <GrowCard key={`collections-comic-${idx}`} />
      ))}
    </section>
  );
};
