import { Preferences } from "@/components/Profile/Preferences";
import { Typography } from "@mui/material";

export default function PreferencesPage() {
  return (
    <section className="py-8">
      <article className=" background-21-container mb-4">
        <Typography variant="body1" className="text-yellow-w-gray">
          User preferences
        </Typography>
      </article>
      <Preferences />
    </section>
  );
}
