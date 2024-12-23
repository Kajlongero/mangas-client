"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import type { FormEventHandler } from "react";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { CircularProgress, Snackbar } from "@mui/material";

import { useAuth } from "@/security/hooks/useAuth";

import { ValidateLogin } from "@/security/lib/validate.auth.info";
import { VerifyObjectLength } from "@/common/utils/objects.functions";

import {
  LoginCredentials,
  LoginCredentialsErrors,
} from "@/security/interfaces/auth.model";
import { StandardApiResponse } from "@/api/interfaces/api.model";
import { handleEncrypt } from "@/security/lib/handle.encrypt";
import { fetchPublicKey } from "@/security/lib/fetch.public.key";

export const LoginForm = () => {
  const ol = useTranslations();
  const t = useTranslations("auth.login");
  const router = useRouter();

  const { loginMutation } = useAuth();

  const [errors, setErrors] = useState<LoginCredentialsErrors>({});
  const [publicKey, setPublicKey] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  const signup: FormEventHandler<HTMLFormElement> = async (e) => {
    setErrors({});

    e.preventDefault();

    const elements = formRef.current?.childNodes as NodeListOf<ChildNode>;

    const email = elements[0].childNodes[0] as HTMLInputElement;
    const password = elements[1].childNodes[0] as HTMLInputElement;

    const obj: LoginCredentials = {
      email: email.value,
      password: password.value,
    };

    const validate = ValidateLogin(obj, ol("officialLanguage") as "en" | "es");

    if (VerifyObjectLength(validate)) return setErrors(validate);

    const enc: LoginCredentials = await handleEncrypt(obj, publicKey);

    const req = (await loginMutation.mutateAsync(
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
        key={`snackbar-login-error-bottom-center`}
        open={loginMutation.data?.error}
        message={loginMutation.data?.message}
        onClose={() => loginMutation.reset()}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
        autoHideDuration={7500}
      />
      <form className="flex flex-col" ref={formRef} onSubmit={signup}>
        <div className="w-full">
          <input
            id="email-input"
            type="text"
            name="email-input"
            disabled={loginMutation.isPending}
            aria-label="email-input"
            className={`w-full mt-4 px-4 py-2 rounded-md bg-transparent border ${
              !errors.email?.error
                ? "border-[#1a1a1a]/75 hover:border-[#1a1a1a]/25 focus:border-[#2a2a2a]"
                : "border-red-600"
            } outline-none`}
            placeholder={t("emailPlaceholder")}
          />
          {errors.email?.error && (
            <p className="text-md text-red-600 font-bold">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="w-full">
          <input
            id="password-input"
            type="password"
            name="password-input"
            disabled={loginMutation.isPending}
            aria-label="password-input"
            className={`w-full mt-4 px-4 py-2 rounded-md bg-transparent border ${
              !errors.password?.error
                ? "border-[#1a1a1a]/75 hover:border-[#1a1a1a]/25 focus:border-[#2a2a2a]"
                : "border-red-600"
            } outline-none`}
            placeholder={t("passwordPlaceholder")}
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
            disabled={loginMutation.isPending}
            className="w-full px-4 py-3 bg-[#1a1a1a]/60 text-center text-white uppercase hover:bg-[#1a1a1a]/25 hover:text-[#999797] rounded-md font-bold transition-colors"
          >
            {loginMutation.isPending ? (
              <CircularProgress size="16px" />
            ) : (
              <>{t("loginButton")}</>
            )}
          </button>
          <Link
            href="/auth/signup"
            className="w-fit mx-auto text-center text-white uppercase rounded-md hover:text-[#999797] font-bold transition-colors"
          >
            {t("signupButton")}
          </Link>
        </div>
      </form>
    </>
  );
};
