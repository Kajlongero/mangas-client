"use client";

import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { SearchBar } from "../SearchBar";
import { FiltersContainer } from "@/core/collections/components/FiltersContainer";
import { ModalComponent } from "@/core/shared/components/Modal";
import { MultiFilter } from "@/core/collections/containers/Multi/MultiFilter";
import { SingleFilter } from "@/core/collections/containers/Single/SingleFilter";

type Props = {
  searchVal?: string;
};

export const SearchContainer = ({ searchVal }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <section className={`mt-8 ${searchVal ? "" : "mb-8"}`}>
      {openModal && (
        <ModalComponent
          open={openModal}
          setOpen={() => setOpenModal((p) => !p)}
        >
          <FiltersContainer open={true} setOpen={() => setOpenModal((p) => !p)}>
            <SingleFilter title="Status" />
            <SingleFilter title="Tipo de Comic" />
            <MultiFilter title="Categorias" />
          </FiltersContainer>
        </ModalComponent>
      )}
      <div className="p-6 border border-[#373737] rounded-lg">
        <h3 className="text-xl mb-4">Search</h3>
        <SearchBar defaultValue={searchVal ?? ""} />
        <div className="w-full my-4">
          <button
            className="relative border border-[#373737] px-4 py-2 rounded-lg w-full text-left text-[#999797]"
            onClick={() => setOpenModal((p) => !p)}
          >
            <ArrowDropDownIcon className="absolute w-8 h-8 text-white right-4" />
            Mostrar filtros de busqueda
          </button>
        </div>
      </div>
      {searchVal && (
        <>
          <p className="mt-4">
            Buscaste: <strong>{searchVal as string}</strong>
          </p>
          <p className="text-xs mb-4">
            Mostrando <strong>52</strong> resultados
          </p>
        </>
      )}
    </section>
  );
};
