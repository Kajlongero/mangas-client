"use client";

import React from "react";
import { useMutation } from "@tanstack/react-query";

import {
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
} from "@mui/material";
import { type TransitionProps } from "@mui/material/transitions";

type Props = {
  open: () => void;
  isOpen: boolean;
  title: string;
  subtitle: string;
  description: string;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogComponent = ({
  open,
  isOpen,
  title,
  subtitle,
  description,
}: Props) => {
  const makeTimer = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        open();
        resolve(true);
      }, 1000);
    });

  const makeWait = async () => {
    await makeTimer();
  };

  const { mutate, isPending } = useMutation({
    mutationFn: () => {
      return makeWait();
    },
    mutationKey: ["mutate-make-something"],
  });

  return (
    <>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        onClose={open}
        sx={{
          ".MuiPaper-root.MuiDialog-paper": {
            backgroundColor: "#2a2a2a",
          },
        }}
        aria-describedby={`${description
          .replaceAll(" ", "-")
          .toLowerCase()}-slide`}
      >
        <DialogTitle className="text-yellow-w-gray">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id={`${description.replaceAll(" ", "-").toLowerCase()}-slide`}
            color="#999797"
          >
            {subtitle}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={open}
            variant="contained"
            sx={{
              backgroundColor: "#3a3a3a",
            }}
          >
            Cancel
          </Button>
          {isPending ? (
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3a3a3a",
              }}
            >
              <CircularProgress size={24}></CircularProgress>
            </Button>
          ) : (
            <>
              <Button
                onClick={() => mutate()}
                variant="contained"
                sx={{
                  backgroundColor: "#3a3a3a",
                }}
              >
                Confirm
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};
