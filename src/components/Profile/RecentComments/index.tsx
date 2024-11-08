import { CommentedComic } from "./CommentedComic";

export const RecentComments = () => {
  return (
    <section className="grid grid-cols-1 gap-2 xl:grid-cols-2 xl:gap-4 pb-8">
      <CommentedComic />
      <CommentedComic />
      <CommentedComic />
      <CommentedComic />
      <CommentedComic />
    </section>
  );
};
