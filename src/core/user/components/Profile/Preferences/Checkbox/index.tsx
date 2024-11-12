"use client";

import { useState } from "react";

import { Checkbox, CircularProgress, Typography } from "@mui/material";

type Props = {
  title: string;
  description: string;
  ruleName: string;
  checked: boolean;
};

export const CheckboxOption = (props: Props) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <article className="background-21-container">
      <Typography className="text-md text-yellow-w-gray" variant="body1">
        {props.title}
      </Typography>
      <Typography className="text-custom-gray pb-2" fontSize={13}>
        {props.description}
      </Typography>
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleClick}
      >
        {!loading && (
          <Checkbox
            checked={props.checked}
            sx={{
              width: 20,
              height: 20,
              margin: "0",
              padding: "0",
              "& .MuiSvgIcon-root": {
                color: "#999797",
                width: "1.25rem",
                height: "1.25rem",
              },
            }}
          />
        )}
        {loading && <CircularProgress size="1.25rem" />}
        <Typography fontSize={13}>{props.ruleName}</Typography>
      </div>
    </article>
  );
};
