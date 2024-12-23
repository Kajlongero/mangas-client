import { RecentComments } from "@/core/user/components/Profile/RecentComments";
import { Typography } from "@mui/material";

export default function CommentsPage() {
  return (
    <>
      <article className="background-21-container my-8">
        <Typography variant="body1" className="text-yellow-w-gray">
          Recent Comments
        </Typography>
      </article>
      <RecentComments />
    </>
  );
}
