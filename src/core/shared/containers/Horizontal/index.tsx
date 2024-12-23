import Link from "next/link";

import LaunchIcon from "@mui/icons-material/Launch";
import { StandardCard } from "../../components/ComicCard/Standard";

type Props = {
  title: string;
  subtitle: string;
  route: string;
  elements?: string[];
  Component?: React.ComponentType;
  fn?: () => void;
};

export const HorizontalContainer = (props: Props) => {
  return (
    <section className="w-full mt-16">
      <div className="w-full">
        <h3 className="font-bold text-xl">{props.title}</h3>
        <p className="text-sm text-custom-gray">{props.subtitle}</p>
      </div>
      <div className="custom-horizontal-scrollbar pb-4 flex gap-4 w-full mt-6 overflow-x-auto">
        {[1, 1, 1, 1, 1, 1, 1, 1].map((elem, idx) => {
          return <StandardCard key={`elem-${elem}-${idx}`} />;
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
