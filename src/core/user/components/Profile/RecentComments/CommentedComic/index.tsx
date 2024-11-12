import ReplyIcon from "@mui/icons-material/Reply";
import { Typography } from "@mui/material";

import { Comment } from "@/core/shared/components/Comment";
import Link from "next/link";

export const CommentedComic = () => {
  return (
    <div className="flex flex-col justify-center">
      <Link
        href="/account/info"
        className="text-custom-gray flex gap-1 items-center mb-1"
      >
        <ReplyIcon className="w-4 h-4" fontSize="small" />
        <Typography variant="body2" fontSize={13}>
          Comienza con una montania
        </Typography>
      </Link>
      <Comment />
    </div>
  );
};
