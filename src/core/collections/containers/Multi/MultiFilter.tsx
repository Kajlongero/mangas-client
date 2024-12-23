"use client";

import { useId, useState } from "react";
import { FilterItem } from "../../components/FiltersItem";

type Props = {
  title: string;
};

export const MultiFilter = (props: Props) => {
  const { title } = props;

  const [selected, setSelected] = useState<number[]>([]);
  const id = useId();

  const handleSelect = (id: number) => {
    const set = new Set<number>(selected);

    if (set.has(id)) {
      setSelected((p) => p.filter((v) => v !== id));
      return;
    }

    setSelected((p) => [...p, id]);
    return;
  };

  return (
    <section className="mt-4">
      <h4 className="text-lg">{title}</h4>
      <div className="h-px bg-[#313131]"></div>
      <ul className="grid max-sm:grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {[0, 1, 2, 2, 2].map((elem, idx) => (
          <li key={`${id}-SingleFilter-${elem}-${idx}`}>
            <FilterItem
              id={idx}
              handleSelect={handleSelect}
              selectedArr={selected}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
