"use client";

import { useMutation } from "@tanstack/react-query";
import { fetchOwnServer } from "@/common/lib/axios.functions";

import { RequestConfig, StandardApiResponse } from "@/api/interfaces/api.model";
import {
  LoginCredentials,
  RegisterCredentials,
} from "../interfaces/auth.model";

export const useAuth = (lang = "en") => {
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
