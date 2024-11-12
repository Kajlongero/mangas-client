"use client";

import { useState } from "react";

import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  Typography,
  OutlinedInput,
  Chip,
  Box,
  MenuItem,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: "#2a2a2a",
      color: "#fffs",
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export const BlacklistGenres = () => {
  const [name, setNames] = useState([]);

  const handleChange = (event: SelectChangeEvent<typeof names>) => {
    const {
      target: { value },
    } = event;

    console.log(value);

    setNames(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <article className="background-21-container">
      <p className="text-md text-yellow-w-gray">Blacklist Genres</p>
      <Typography variant="body2" className="text-xs text-custom-gray pb-4">
        Select the categories that wont be show
      </Typography>
      <FormControl className="w-full max-w-96">
        <InputLabel
          id="blacklist-genres-select"
          sx={{
            "&.MuiFormLabel-root": {
              color: "#999797",
            },
            "&.MuiInputLabel-root.Mui-focused": {
              color: "#bbb",
            },
          }}
        >
          Genres
        </InputLabel>
        <Select
          className="w-full"
          input={<OutlinedInput id="select-multiple-genres" label="Genres" />}
          labelId="blacklist-genres-select"
          label="Genres"
          value={name}
          onChange={handleChange}
          multiple
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "white",
              backgroundColor: "darkblue",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#a9a9a9",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#a9a9a9",
            },
            "&.MuiChip-root": {
              color: "white",
            },
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#999797" },
            "& .MuiSelect-icon": { color: "#999797" },
          }}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
              }}
            >
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  style={{
                    color: "#fff",
                    backgroundColor: "#2a2a2a",
                  }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((n) => (
            <MenuItem
              key={n}
              value={n}
              style={{
                color: "#fff",
              }}
            >
              {n}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </article>
  );
};
