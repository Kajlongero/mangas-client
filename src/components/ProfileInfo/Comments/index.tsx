import { CommentComponent } from "@/components/Comment";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

export const RecentComments = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <span className="text-[#a0a0a0] flex mb-1">
          <ChatBubbleLeftIcon className="w-6 h-6 pr-2" />
          <p>Comienza con una montania</p>
        </span>
        <CommentComponent />
      </div>
      <div>
        <span className="text-[#a0a0a0] flex mb-1">
          <ChatBubbleLeftIcon className="w-6 h-6 pr-2" />
          <p>Comienza con una montania</p>
        </span>
        <CommentComponent />
      </div>
      <div>
        <span className="text-[#a0a0a0] flex mb-1">
          <ChatBubbleLeftIcon className="w-6 h-6 pr-2" />
          <p>Comienza con una montania</p>
        </span>
        <CommentComponent />
      </div>
      <div>
        <span className="text-[#a0a0a0] flex mb-1">
          <ChatBubbleLeftIcon className="w-6 h-6 pr-2" />
          <p>Comienza con una montania</p>
        </span>
        <CommentComponent />
      </div>
    </div>
  );
};
