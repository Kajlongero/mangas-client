"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useMutation } from "@tanstack/react-query";
import {
  Button,
  CircularProgress,
  IconButton,
  Slide,
  Snackbar,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { fetchOwnServer } from "@/common/lib/axios.functions";
import { useValidationErrors } from "@/common/hooks/useValidationErrors";
import {
  LOGIN_ERRORS_INITIAL_STATE,
  ValidateLogin,
} from "@/security/lib/validate.auth.info";
import { LoginCredentials } from "@/security/interfaces/auth.model";
import { StandardApiResponse } from "@/common/interfaces/api.model";

export const LoginForm = () => {
  const navigate = useRouter();

  const { error: validationErrors, validate } = useValidationErrors(
    LOGIN_ERRORS_INITIAL_STATE
  );

  const { data, isPending, reset, mutateAsync } = useMutation<
    StandardApiResponse<null>,
    Error,
    LoginCredentials
  >({
    mutationFn: (body: LoginCredentials) =>
      fetchOwnServer({
        body: body,
        route: "/api/auth/login",
        method: "post",
        config: {},
      }),
  });

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const email = e.currentTarget[0] as HTMLInputElement;
    const password = e.currentTarget[2] as HTMLInputElement;

    const obj = {
      email: email.value,
      password: password.value,
    };

    const isValid = validate(obj, ValidateLogin);
    if (!isValid) return;

    const login = await mutateAsync(obj as LoginCredentials);
    const res = login as StandardApiResponse<null>;

    if (res.statusCode === 200) return navigate.replace("/");

    return false;
  };

  return (
    <>
      <Snackbar
        open={data?.error}
        message={data?.message}
        autoHideDuration={6000}
        TransitionComponent={Slide}
        aria-label="Error Information"
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
        onClose={reset}
        sx={{}}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={reset}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
      <form className="flex flex-col gap-4 mt-8" onSubmit={handleLogin}>
        <TextField
          variant="outlined"
          id="email-input"
          label={
            validationErrors &&
            validationErrors.email &&
            validationErrors.email.error
              ? "Invalid email"
              : "Input your email"
          }
          type="text"
          aria-label="Input login email"
          fullWidth
          error={
            validationErrors &&
            validationErrors.email &&
            validationErrors.email.error
          }
          helperText={
            validationErrors && validationErrors.email
              ? validationErrors.email.message
              : null
          }
          required={false}
          sx={{
            backgroundColor: "transparent",
            "& .MuiOutlinedInput-root": {
              color: "#fff",
              "& fieldset": { borderColor: "#999797" },
              "&:hover fieldset": { borderColor: "#fcd34d" },
              "&.Mui-focused fieldset": {
                borderColor:
                  validationErrors &&
                  validationErrors.email &&
                  validationErrors.email.error
                    ? "red"
                    : "#fcd34d",
              },
              "&.Mui-error": { "& fieldset": { borderColor: "red" } },
            },
            "& .MuiInputLabel-root": {
              color:
                validationErrors &&
                validationErrors.email &&
                validationErrors.email.error
                  ? "red"
                  : "#fff",
              "&.Mui-focused": {
                color:
                  validationErrors &&
                  validationErrors.email &&
                  validationErrors.email.error
                    ? "red"
                    : "#fcd34d",
              },
            },
            "& .MuiInput-underline:before": { borderBottomColor: "#999797" },
            "& .MuiInput-underline:hover:before": { borderBottomColor: "#09f" },
            "& .MuiInput-underline:after": { borderBottomColor: "#09f" },
          }}
        />
        <TextField
          variant="outlined"
          id="password-input"
          label={
            validationErrors &&
            validationErrors.password &&
            validationErrors.password.error
              ? "Invalid password"
              : "Input your password"
          }
          type="password"
          itemID="Input-login-password"
          aria-label="Input-login-password"
          fullWidth
          error={
            validationErrors &&
            validationErrors.password &&
            validationErrors.password.error
          }
          helperText={
            validationErrors && validationErrors.password
              ? validationErrors.password.message
              : null
          }
          sx={{
            backgroundColor: "transparent",
            "& .MuiOutlinedInput-root": {
              color: "#fff",
              "& fieldset": { borderColor: "#999797" },
              "&:hover fieldset": { borderColor: "#fcd34d" },
              "&.Mui-focused fieldset": {
                borderColor:
                  validationErrors &&
                  validationErrors.password &&
                  validationErrors.password.error
                    ? "red"
                    : "#fcd34d",
              },
              "&.Mui-error": { "& fieldset": { borderColor: "red" } },
            },
            "& .MuiInputLabel-root": {
              color:
                validationErrors &&
                validationErrors.password &&
                validationErrors.password.error
                  ? "red"
                  : "#fff",
              "&.Mui-focused": {
                color:
                  validationErrors &&
                  validationErrors.password &&
                  validationErrors.password.error
                    ? "red"
                    : "#fcd34d",
              },
            },
            "& .MuiInput-underline:before": { borderBottomColor: "#999797" },
            "& .MuiInput-underline:hover:before": { borderBottomColor: "#09f" },
            "& .MuiInput-underline:after": { borderBottomColor: "#09f" },
          }}
        />

        <Button
          sx={{
            color: "#fff",
            backgroundColor: "#3a3a3a",
            ":hover": {
              backgroundColor: "#2a2a2a",
              color: "#999797",
            },
          }}
          type="submit"
          disabled={isPending}
        >
          {isPending ? <CircularProgress size="1.5rem" /> : <>Log in</>}
        </Button>
        <div className="w-full">
          <Link
            href="/auth/signup"
            className="w-full text-center block hover:text-[#999797] py-1 hover:bg-[#3a3a3a] transition-colors"
          >
            SIGN UP
          </Link>
        </div>
      </form>
    </>
  );
};
