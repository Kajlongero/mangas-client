import Link from "next/link";
import RecommendIcon from "@mui/icons-material/Recommend";
import LaunchIcon from "@mui/icons-material/Launch";
import { LargeCard } from "@/core/shared/components/Card/Large";

export const Hero = () => {
  return (
    <section className="w-full mt-8">
      <div className="background-21-container">
        <div className="flex gap-2 items-center">
          <RecommendIcon />
          <h2 className="text-right">Recomendado por el staff</h2>
        </div>
      </div>
      <div className="flex gap-4 w-full mt-6 max-md:overflow-x-scroll max-md:aspect-video max-md:object-cover">
        <LargeCard />
        <LargeCard />
      </div>
      <div className="flex w-full max-w-[32rem] mx-auto mt-6 items-center">
        <Link
          className="w-full flex-1 text-center background-21-container"
          href="/recommended"
        >
          Ver mas
          <LaunchIcon fontSize="small" className="ml-2" />
        </Link>
      </div>
    </section>
  );
};
