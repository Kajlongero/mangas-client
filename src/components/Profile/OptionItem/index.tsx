"use client";

import Link from "next/link";
import { InfoOptions } from "../utils/InfoOptions";
import { usePathname } from "next/navigation";

type Props = {
  item: InfoOptions;
  route: string;
};

export const OptionItem = (props: Props) => {
  const pathname = usePathname();
  const actual = props.item.value.replaceAll(" ", "-").toLowerCase();

  const isSelected = pathname.split("/");

  const selected =
    isSelected.at(-1) === actual
      ? "text-[#f59e0b] bg-[#fcd34d40] outline outline-none"
      : "bg-transparent text-[#999797] hover:bg-[#3a3a3a]";

  return (
    <Link
      href={`${props.route}/${actual}`}
      className={`${selected} block text-center max-mobile:w-full min-w-40 mobile:max-w-48 px-4 py-1 rounded-full transition-colors`}
      title={props.item.value}
      type="button"
      role="button"
    >
      {props.item.value}
    </Link>
  );
};
