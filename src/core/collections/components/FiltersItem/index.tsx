type Props = {
  id: number;
  isSelected?: boolean;
  selectedArr?: number[];
  handleSelect: (id: number) => void;
};

export const FilterItem = ({
  id,
  isSelected,
  selectedArr,
  handleSelect,
}: Props) => {
  const set = new Set<number>(selectedArr);
  const is = set.has(id);

  const selected =
    is || (isSelected !== undefined && isSelected)
      ? "text-[#f59e0b] bg-[#fcd34d40] outline outline-none"
      : "bg-transparent text-[#999797] hover:bg-[#3a3a3a]";

  return (
    <button
      className={`${selected} inline-block text-center max-mobile:w-full min-w-40 w-full px-4 py-1 rounded-full transition-colors`}
      onClick={() => handleSelect(id)}
    >
      Elemento
    </button>
  );
};
