"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

import type { FormEventHandler } from "react";

import { CircularProgress, Snackbar } from "@mui/material";

import { useAuth } from "@/security/hooks/useAuth";
import { ValidateRegister } from "@/security/lib/validateAuthInfo";
import { VerifyObjectLength } from "@/common/utils/objectsFunctions";

import { StandardApiResponse } from "@/api/interfaces/apiModel";
import {
  RegisterCredentials,
  RegisterCredentialsErrors,
} from "@/security/interfaces/authModel";
import { fetchPublicKey } from "@/security/lib/fetchPublicKey";
import { handleEncrypt } from "@/security/lib/handleEncrypt";

export const SignupForm = () => {
  const router = useRouter();

  const t = useTranslations();
  const { registerMutation } = useAuth(t("officialLanguage"));

  const [publicKey, setPublicKey] = useState<string>("");
  const [errors, setErrors] = useState<RegisterCredentialsErrors>({});

  const formRef = useRef<HTMLFormElement>(null);

  const signup: FormEventHandler<HTMLFormElement> = async (e) => {
    if (!publicKey) return;

    setErrors({});

    e.preventDefault();

    const elements = formRef.current?.childNodes as NodeListOf<ChildNode>;

    const username = elements[0].childNodes[0] as HTMLInputElement;
    const email = elements[1].childNodes[0] as HTMLInputElement;
    const password = elements[2].childNodes[0] as HTMLInputElement;

    const obj: RegisterCredentials = {
      email: email.value,
      username: username.value,
      password: password.value,
    };

    const validate = ValidateRegister(
      obj,
      t("officialLanguage") as "en" | "es"
    );

    if (VerifyObjectLength(validate)) return setErrors(validate);

    const enc: RegisterCredentials = await handleEncrypt(obj, publicKey);

    const req = (await registerMutation.mutateAsync(
      enc
    )) as StandardApiResponse<null>;

    if (req.error) return;

    router.replace("/");
  };

  const savePublicKey = async () => {
    const pkey = await fetchPublicKey();

    setPublicKey(pkey as string);
  };

  useEffect(() => {
    savePublicKey();
  }, []);

  return (
    <>
      <Snackbar
        key={`snackbar-register-error-bottom-center`}
        open={registerMutation.data?.error}
        message={registerMutation.data?.message}
        onClose={() => registerMutation.reset()}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={7500}
      />
      <form className="flex flex-col" ref={formRef} onSubmit={signup}>
        <div className="w-full">
          <input
            type="text"
            aria-label="username-input"
            id="username-input"
            name="username-input"
            className={`w-full mt-4 px-4 py-2 rounded-md bg-transparent border ${
              !errors.username?.error
                ? "border-[#1a1a1a]/75 hover:border-[#fff]/25 focus:border-[#fff]/25"
                : "border-red-600"
            } outline-none`}
            placeholder={t("auth.signup.usernamePlaceholder")}
          />
          {errors.username?.error && (
            <p className="text-md text-red-600 font-bold">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <input
            type="text"
            aria-label="email-input"
            id="email-input"
            name="email-input"
            className={`w-full mt-4 px-4 py-2 rounded-md bg-transparent border ${
              !errors.email?.error
                ? "border-[#1a1a1a]/75 hover:border-[#fff]/25 focus:border-[#fff]/25"
                : "border-red-600"
            } outline-none`}
            placeholder={t("auth.signup.emailPlaceholder")}
          />
          {errors.email?.error && (
            <p className="text-md text-red-600 font-bold">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <input
            type="password"
            aria-label="password-input"
            id="password-input"
            name="password-input"
            className={`w-full mt-4 px-4 py-2 rounded-md bg-transparent border ${
              !errors.password?.error
                ? "border-[#1a1a1a]/75 hover:border-[#fff]/25 focus:border-[#fff]/25"
                : "border-red-600"
            } outline-none`}
            placeholder={t("auth.signup.passwordPlaceholder")}
          />
          {errors.password?.error && (
            <p className="text-md text-red-600 font-bold">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <button
            type="submit"
            className="w-full px-4 py-3 bg-[#1a1a1a]/60 text-center text-white uppercase hover:text-[#999797] hover:bg-[#1a1a1a]/25 rounded-md font-bold transition-colors"
          >
            {registerMutation.isPending ? (
              <CircularProgress size="16px" />
            ) : (
              <>{t("auth.signup.signupButton")}</>
            )}
          </button>
          <Link
            href="/auth/login"
            className="w-fit mx-auto text-center text-white uppercase rounded-md hover:text-[#999797] font-bold transition-colors"
          >
            {t("auth.signup.loginButton")}
          </Link>
        </div>
      </form>
    </>
  );
};
