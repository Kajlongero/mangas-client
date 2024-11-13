import Link from "next/link";

import LaunchIcon from "@mui/icons-material/Launch";

type Props = {
  title?: string;
  subtitle?: string;
  comics?: string[];
  route?: string;
  fn?: () => void;
};

export const HorizontalContainer = (props: Props) => {
  return (
    <section className="w-full">
      <div className="w-full">
        {props.title && <h3>{props.title}</h3>}
        {props.subtitle && <p>{props.subtitle}</p>}
      </div>
      <div className="flex gap-4 w-full mt-6 overflow-x-scroll">
        {[1, 1, 1, 1, 1, 1, 1].map((elem) => {
          return <></>;
        })}
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
