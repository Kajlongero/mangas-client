"use client";

import { useId, useState } from "react";
import { FilterItem } from "../../components/FiltersItem";

type Props = {
  title: string;
};

export const SingleFilter = ({ title }: Props) => {
  const [selected, setSelected] = useState<number>();
  const id = useId();

  const handleSelect = (id: number) => setSelected(id);

  return (
    <section className="mt-4">
      <h4 className="text-lg">{title}</h4>
      <div className="h-px bg-[#313131]"></div>
      <ul className="grid max-sm:grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {[0, 1, 2, 3, 4].map((elem, idx) => (
          <li key={`${id}-SingleFilter-${elem}-${idx}`}>
            <FilterItem
              id={idx}
              handleSelect={handleSelect}
              isSelected={elem === selected}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
