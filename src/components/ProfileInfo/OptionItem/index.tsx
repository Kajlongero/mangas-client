import { InfoOptions } from "../utils/InfoOptions";

type Props = {
  item: InfoOptions;
  selected: boolean;
  changeValue: (item: InfoOptions) => void;
};

export const OptionItem = (props: Props) => {
  const selected = props.selected
    ? "text-[#ffff00bb] bg-[#ffff0077] outline outline-none"
    : "bg-transparent outline outline-[#3a3a3a] text-[#aaa]";

  return (
    <button
      onClick={() => props.changeValue(props.item)}
      className={`${selected} px-4 py-1 rounded-full transition-colors`}
      title={props.item.value}
      type="button"
      role="button"
    >
      {props.item.value}
    </button>
  );
};
