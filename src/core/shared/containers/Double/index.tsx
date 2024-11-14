import Link from "next/link";

import LaunchIcon from "@mui/icons-material/Launch";
import { StandardCard } from "../../components/ComicCard/Standard";
import { UpdatedCard } from "../../components/ComicCard/Updated";

type Props = {
  title: string;
  subtitle: string;
  route: string;
  elements?: string[];
  Component?: React.ComponentType;
  fn?: () => void;
};

export const DoubleContainer = (props: Props) => {
  return (
    <section className="w-full my-8">
      <div className="w-full pt-8">
        <h3 className="font-bold text-xl">{props.title}</h3>
        <p className="text-sm text-custom-gray">{props.subtitle}</p>
      </div>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
        {[1, 1, 1, 1, 1, 1, 1, 1].map((elem, idx) => {
          return <UpdatedCard key={`elem-${elem}-${idx}`} />;
        })}
      </div>
      <div className="flex w-full max-w-[32rem] mx-auto mt-6 items-center">
        <Link
          className="w-full flex-1 text-center background-21-container"
          href={props.route}
        >
          Ver mas
          <LaunchIcon fontSize="small" className="ml-2" />
        </Link>
      </div>
    </section>
  );
};
