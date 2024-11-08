"use client";

import { Button, TextField } from "@mui/material";
import Link from "next/link";

export const SignupForm = () => {
  const signupForm: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const username = e.currentTarget[0] as HTMLInputElement;
    const email = e.currentTarget[2] as HTMLInputElement;
    const password = e.currentTarget[4] as HTMLInputElement;

    const obj = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    console.log(obj);
  };

  return (
    <form className="flex flex-col gap-4 mt-8" onSubmit={signupForm}>
      <TextField
        variant="outlined"
        id="username-input"
        label="Username"
        type="text"
        aria-label="Input login username"
        fullWidth
        sx={{
          backgroundColor: "transparent",
          "& .MuiOutlinedInput-root": {
            color: "#fff",
            "& fieldset": { borderColor: "#999797" },
            "&:hover fieldset": { borderColor: "#fcd34d" },
            "&.Mui-focused fieldset": { borderColor: "#fcd34d" },
          },
          "& .MuiInputLabel-root": {
            color: "#fff",
            "&.Mui-focused": { color: "#fcd34d" },
          },
          "& .MuiInput-underline:before": { borderBottomColor: "#999797" },
          "& .MuiInput-underline:hover:before": { borderBottomColor: "#09f" },
          "& .MuiInput-underline:after": { borderBottomColor: "#09f" },
        }}
      />
      <TextField
        variant="outlined"
        id="email-input"
        label="Email"
        type="email"
        aria-label="Input login email"
        fullWidth
        sx={{
          backgroundColor: "transparent",
          "& .MuiOutlinedInput-root": {
            color: "#fff",
            "& fieldset": { borderColor: "#999797" },
            "&:hover fieldset": { borderColor: "#fcd34d" },
            "&.Mui-focused fieldset": { borderColor: "#fcd34d" },
          },
          "& .MuiInputLabel-root": {
            color: "#fff",
            "&.Mui-focused": { color: "#fcd34d" },
          },
          "& .MuiInput-underline:before": { borderBottomColor: "#999797" },
          "& .MuiInput-underline:hover:before": { borderBottomColor: "#09f" },
          "& .MuiInput-underline:after": { borderBottomColor: "#09f" },
        }}
      />
      <TextField
        variant="outlined"
        id="password-input"
        label="Password"
        type="password"
        itemID="Input-login-password"
        aria-label="Input-login-password"
        fullWidth
        sx={{
          backgroundColor: "transparent",
          "& .MuiOutlinedInput-root": {
            color: "#fff",
            "& fieldset": { borderColor: "#999797" },
            "&:hover fieldset": { borderColor: "#fcd34d" },
            "&.Mui-focused fieldset": { borderColor: "#fcd34d" },
          },
          "& .MuiInputLabel-root": {
            color: "#fff",
            "&.Mui-focused": { color: "#fcd34d" },
          },
          "& .MuiInput-underline:before": { borderBottomColor: "#999797" },
        }}
      />

      <Button
        sx={{
          mt: 2,
          color: "#fff",
          backgroundColor: "#3a3a3a",
          ":hover": {
            backgroundColor: "#2a2a2a",
            color: "#999797",
          },
        }}
        type="submit"
      >
        SIGN UP
      </Button>
      <div className="w-full">
        <Link
          href="/auth/signup"
          className="w-full text-center block hover:text-[#999797] py-1 hover:bg-[#3a3a3a] transition-colors"
        >
          LOG IN
        </Link>
      </div>
    </form>
  );
};
