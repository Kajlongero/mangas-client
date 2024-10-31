import { CommentedComic } from "./CommentedComic";

export const RecentComments = () => {
  return (
    <div className="flex flex-col gap-4">
      <CommentedComic />
      <CommentedComic />
      <CommentedComic />
      <CommentedComic />
      <CommentedComic />
    </div>
  );
};
