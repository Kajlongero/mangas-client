"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

import { OptionItem } from "./OptionItem";
import { type InfoOptions, infoOptions } from "./utils/InfoOptions";

export const Profile = () => {
  const params = useSearchParams();
  const show = params.get("show") ?? null;

  const idx = show
    ? infoOptions.findIndex(
        (e) => e.value.toLowerCase().replaceAll(" ", "-") === show
      )
    : 0;

  const [selectedOpt, setSelectedOpt] = useState(infoOptions[idx]);

  const handleSelect = (opt: InfoOptions) => {
    const param = new URLSearchParams();
    param.set("show", opt.value.toLowerCase().replaceAll(" ", "-"));
    window.history.replaceState(null, "", `?${param.toString()}`);

    setSelectedOpt(opt);
  };

  return (
    <section className="mt-16 mx-auto md:flex md:gap-6 lg:flex lg:gap-8 max-sm:px-6 pb-8 relative">
      <div className="w-full px-8 py-6 rounded-lg bg-[#212121] md:max-w-64 lg:max-w-80 max-h-fit sticky">
        <h3 className="text-[#ffffff] text-xl">Mostrar</h3>
        {/* <div className="w-full h-0.5 bg-[#3a3a3a] my-2"></div> */}
        <div className="mt-4 grid grid-cols-auto-fill-100 gap-4">
          {infoOptions.map((elem, idx) => (
            <OptionItem
              item={elem}
              selected={elem.key === selectedOpt.key}
              changeValue={handleSelect}
              key={`info-options-select-${elem.key}-${elem.value}-${idx}`}
            />
          ))}
        </div>
      </div>
      <div className="w-full h-full flex flex-col max-sm:gap-4 max-md:mt-8 sm:gap-6">
        {selectedOpt && selectedOpt.Component}
      </div>
    </section>
  );
};
