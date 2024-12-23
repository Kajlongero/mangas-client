"use client";

import { useState } from "react";
import { TranslationValues, useTranslations } from "next-intl";

import FilterListIcon from "@mui/icons-material/FilterList";

import { VerticalContainer } from "../Vertical";
import { ModalComponent } from "@/core/shared/components/Modal";
import { MultiFilter } from "@/core/collections/containers/Multi/MultiFilter";
import { SingleFilter } from "@/core/collections/containers/Single/SingleFilter";
import { FiltersContainer } from "@/core/collections/components/FiltersContainer";

type Props = {
  elements?: string[];
  categories: string[];
  Component?: React.ReactNode;
  fn?: () => void;
};

export const ContainerComicWithFilter = (props: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const t = useTranslations("collections.filters");

  return (
    <section className="flex flex-col gap-6">
      {openModal && (
        <ModalComponent
          open={openModal}
          setOpen={() => setOpenModal((p) => !p)}
        >
          <FiltersContainer open={true} setOpen={() => setOpenModal((p) => !p)}>
            <SingleFilter title={t("modal.titleOne")} />
            <MultiFilter title={t("modal.titleTwo")} />
          </FiltersContainer>
        </ModalComponent>
      )}
      <div className="flex gap-4 w-full pt-8 max-mobile:flex-col mobile:justify-between">
        <div className="w-full">
          <h3 className="font-bold text-xl">
            {t("container.title", { actual: 30, total: 1080 })}
          </h3>
          <p className="text-sm text-custom-gray">
            {t("container.subtitle", { categories: "Accion, Aventura" })}
          </p>
        </div>
        <div className="flex max-mobile:justify-end">
          <button
            className="flex items-center gap-2 rounded-lg transition hover:bg-[#2a2a2a] text-white px-4 py-2 "
            onClick={() => setOpenModal((p) => !p)}
          >
            <FilterListIcon />
            Filters
          </button>
        </div>
      </div>
      <VerticalContainer />
    </section>
  );
};
