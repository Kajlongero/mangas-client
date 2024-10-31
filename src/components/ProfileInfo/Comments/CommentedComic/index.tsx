import { Comment } from "@/components/Comment";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

export const CommentedComic = () => {
  return (
    <div className="flex flex-col justify-center">
      <span className="text-[#707070] flex mb-1">
        <ChatBubbleLeftIcon className="w-5 h-5 pr-2" />
        <p className="text-sm">Comienza con una montania</p>
      </span>
      <Comment />
    </div>
  );
};
