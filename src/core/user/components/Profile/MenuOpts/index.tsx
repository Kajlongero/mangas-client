import { Skeleton, Typography } from "@mui/material";
import { OptionItem } from "../OptionItem";
import { infoOptions } from "@/common/lib/infoOptions";
import { Suspense, useId } from "react";

export const ProfileMenuOptions = () => {
  const id = useId();

  return (
    <section className="mt-16">
      <div className="background-21-container mobile:px-8 md:py-6">
        <Typography variant="h6" className="text-white">
          Mostrar
        </Typography>
        <ul className="mt-4 grid grid-cols-auto-fill-100 gap-4">
          {infoOptions.map((elem, idx) => (
            <li key={`menu-items-${id}-${elem.value}-${idx}`}>
              <Suspense
                fallback={
                  <Skeleton variant="rounded" width={166} height={32} />
                }
              >
                <OptionItem item={elem} route="/account" />
              </Suspense>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
