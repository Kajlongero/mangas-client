import { cookies } from "next/headers";

import { fetchData } from "@/api/lib/axiosFunctions";
import { CustomResponse } from "@/api/responses/custom.response";
import {
  AccessTokenValidTime,
  RefreshTokenValidTime,
  SetSessionId,
} from "@/security/lib/authTokenTimes";

import { LoginCredentials } from "@/security/interfaces/authModel";
import type {
  RequestConfig,
  StandardApiResponse,
} from "@/api/interfaces/apiModel";

import { AuthResponse } from "@/security/interfaces/authModel";

export async function POST(request: Request) {
  const body: LoginCredentials = await request.json();

  const config: RequestConfig<LoginCredentials> = {
    config: {},
    method: "post",
    route: "/api/auth/login",
    body: body,
  };

  const res = await fetchData<
    LoginCredentials,
    StandardApiResponse<null | AuthResponse>
  >(config);

  if (res.error) {
    const obj = { ...res, data: null };
    return CustomResponse(obj, res.statusCode, res.message ?? "");
  }

  const store = await cookies();

  AccessTokenValidTime(store, res.data?.accessToken as string);
  RefreshTokenValidTime(store, res.data?.refreshToken as string);
  SetSessionId(store, res.data?.sessionId as string);

  return CustomResponse(
    { message: "Logged in successfully", privateKey: res.data?.privateKey },
    200,
    "Success"
  );
}
