"use client";

import { useMutation } from "@tanstack/react-query";
import { fetchOwnServer } from "@/api/lib/axiosFunctions";

import { RequestConfig, StandardApiResponse } from "@/api/interfaces/apiModel";
import { LoginCredentials, RegisterCredentials } from "../interfaces/authModel";

export const useAuth = (lang = "es") => {
  const loginMutation = useMutation({
    mutationFn: (
      data: LoginCredentials
    ): Promise<StandardApiResponse<null>> => {
      const obj: RequestConfig<LoginCredentials> = {
        body: data,
        config: {
          headers: {
            "Content-Type": "application/json",
            "X-User-Preferred-Language": lang,
          },
        },
        method: "post",
        route: "/api/auth/login",
      };

      return fetchOwnServer(obj);
    },
    mutationKey: ["login-mutation"],
  });
  const registerMutation = useMutation({
    mutationFn: (
      data: RegisterCredentials
    ): Promise<StandardApiResponse<null>> => {
      const obj: RequestConfig<RegisterCredentials> = {
        body: data,
        config: {
          headers: {
            "X-User-Preferred-Language": lang,
            "Content-Type": "application/json",
          },
        },
        method: "post",
        route: "/api/auth/register",
      };

      return fetchOwnServer(obj);
    },
    mutationKey: ["register-mutation"],
  });

  return {
    loginMutation,
    registerMutation,
  };
};
