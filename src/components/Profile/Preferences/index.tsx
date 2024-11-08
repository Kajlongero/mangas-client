"use client";

import { CheckboxOption } from "./Checkbox";
import { BlacklistGenres } from "./Blacklist";

export const Preferences = () => {
  return (
    <div className="flex flex-col gap-4">
      <CheckboxOption
        checked={false}
        ruleName="Hide NSFW"
        title="NSFW Comics"
        description="When displaying comics, show NSFW comics or hide it from the results"
      />
      <CheckboxOption
        checked={false}
        description="When looking a comic, show the pages as a cascade or paged-style"
        title="Comic show type"
        ruleName="Cascade"
      />
      <article className="background-21-container">
        <h3 className="font-bold text-lg">Max comic preload</h3>
        <p className="text-xs text-[#a9a9a9] pb-2">
          Use only with paged-style comics, enable how many at the same time
          pages will be preloaded
        </p>
        <label htmlFor="valid" className="flex gap-1 text-sm">
          <input type="" name="valid" id="valid" />
          Cascade
        </label>
      </article>

      <BlacklistGenres />
    </div>
  );
};
