import React from "react";

import { Modal } from "@mui/material";

type Props = {
  open: boolean;
  setOpen: () => void;
  children: JSX.Element;
};

export const ModalComponent = (props: Props) => {
  const { children } = props;

  return (
    <Modal
      open={props.open}
      onClose={() => props.setOpen()}
      disableScrollLock
      closeAfterTransition
      className="w-full flex items-center"
      keepMounted
    >
      {children}
    </Modal>
  );
};
