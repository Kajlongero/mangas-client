import { Comment } from "@/core/shared/components/Comment";
import { CommentInput } from "@/core/shared/components/Comment/CommentInput";

export const ComicCommentsContainer = () => {
  return (
    <section className="mt-6">
      <CommentInput />
      <div className="flex flex-col gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((elem) => (
          <Comment key={`comic-chapter-item-${elem}`} />
        ))}
      </div>
    </section>
  );
};
