"use client";

import { useState } from "react";

import { OptionItem } from "./OptionItem";
import { ProfileInfoComponent } from "./Info";
import { type InfoOptions, infoOptions } from "./utils/InfoOptions";
import { RecentComicsComponent } from "./RecentComics";
import { FavoritesComponent } from "./Favorites";
import { RecentComments } from "./Comments";
import { Preferences } from "./Preferences";

export const ProfileInfo = () => {
  const [selectedOpt, setSelectedOpt] = useState(infoOptions[0]);

  const handleSelect = (opt: InfoOptions) => setSelectedOpt(opt);

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
        {selectedOpt.value === "Info" && <ProfileInfoComponent />}
        {selectedOpt.value === "Recent Comics" && <RecentComicsComponent />}
        {selectedOpt.value === "Favorites" && (
          <FavoritesComponent
            comics={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
          />
        )}
        {selectedOpt.value === "Comments" && <RecentComments />}
        {selectedOpt.value === "Preferences" && <Preferences />}
      </div>
    </section>
  );
};
