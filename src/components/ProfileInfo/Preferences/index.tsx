"use client";

export const Preferences = () => {
  return (
    <section className="flex flex-col gap-4">
      <article className="background-21-container">
        <h3 className="font-bold text-lg pb-1">User preferences</h3>
        <p className="font-light text-[#a9a9a9] text-xs">
          All in-site settings to expand the user experience listed below
        </p>
      </article>
      <article className="background-21-container">
        <h3 className="font-bold text-lg ">NSFW Content</h3>
        <p className="text-xs text-[#a9a9a9] pb-2">
          When displaying comics, show NSFW comics or hide it from the results
        </p>
        <label htmlFor="valid" className="flex gap-1 text-sm">
          <input type="checkbox" name="valid" id="valid" />
          Hide NSFW
        </label>
      </article>
      <article className="background-21-container">
        <h3 className="font-bold text-lg">Comic show type</h3>
        <p className="text-xs text-[#a9a9a9] pb-2">
          When looking a comic, show the pages as a cascade or paged-style
        </p>
        <label htmlFor="valid" className="flex gap-1 text-sm">
          <input type="checkbox" name="valid" id="valid" />
          Cascade
        </label>
      </article>
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
      <article className="background-21-container">
        <h3 className="font-bold text-lg">Categories blacklisted</h3>
        <p className="text-xs text-[#a9a9a9] pb-2">
          Select categories to be blacklisted and not show comics that haves
          these categories
        </p>
        <label htmlFor="valid" className="flex gap-1 text-sm">
          <input type="" name="valid" id="valid" />
          Cascade
        </label>
      </article>
    </section>
  );
};
