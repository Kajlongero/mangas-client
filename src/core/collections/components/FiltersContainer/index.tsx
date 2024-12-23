import { IconButton, Slide } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { useTranslations } from "next-intl";

type Props = {
  open?: boolean;
  setOpen: () => void;
  children: React.ReactNode;
};

export const FiltersContainer = ({ open, setOpen, children }: Props) => {
  const t = useTranslations("collections.filters.modal");

  return (
    <>
      <Slide in={open} direction="left" onExited={setOpen}>
        <div className="w-full max-w-[32rem] background-21-container max-sm:mx-8 ml-auto mr-16 h-5/6 overflow-y-auto custom-vertical-scrollbar">
          <header className="flex items-center w-full gap-4 justify-between">
            <div className="flex gap-4 items-center">
              <IconButton
                TouchRippleProps={{
                  className: "text-[#5a5a5a]",
                }}
                onClick={setOpen}
              >
                <CheckIcon
                  fontSize="large"
                  className="text-white bg-green-400/70 rounded-full p-2"
                />
              </IconButton>
              <h3 className="text-xl">{t("title")}</h3>
            </div>
            <IconButton
              TouchRippleProps={{
                className: "text-[#5a5a5a]",
              }}
              onClick={setOpen}
            >
              <CloseIcon fontSize="medium" className="text-white" />
            </IconButton>
          </header>
          {children}
        </div>
      </Slide>
    </>
  );
};
