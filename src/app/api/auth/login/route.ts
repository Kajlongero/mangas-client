import { cookies } from "next/headers";

import { fetchData } from "@/common/lib/axios.functions";
import { ValidateLogin } from "@/security/lib/validate.auth.info";
import { CustomResponse } from "@/common/responses/custom.response";
import {
  AccessTokenValidTime,
  RefreshTokenValidTime,
} from "@/security/lib/auth.tokens.times";

import {
  LoginCredentials,
  LoginCredentialsErrors,
} from "@/security/interfaces/auth.model";
import { JwtTokens } from "@/security/interfaces/auth.model";
import {
  RequestConfig,
  StandardApiResponse,
} from "@/common/interfaces/api.model";

export async function POST(request: Request) {
  const body: LoginCredentials = await request.json();

  const valid = ValidateLogin(body);
  if (!valid) {
    const format: StandardApiResponse<LoginCredentialsErrors> = {
      error: true,
      data: valid,
      statusCode: 400,
      message: "Bad Request",
    };

    return CustomResponse(format, 400, "Bad Request");
  }

  const config: RequestConfig<LoginCredentials> = {
    config: {},
    method: "post",
    route: "/api/v1/auth/login",
    body: body,
  };

  const res = await fetchData<
    LoginCredentials,
    StandardApiResponse<null | JwtTokens>
  >(config);

  if (res.error) {
    const obj = { ...res, data: null };
    return CustomResponse(obj, res.statusCode, res.message ?? "");
  }

  const store = await cookies();

  AccessTokenValidTime(store, res.data?.AccessToken as string);
  RefreshTokenValidTime(store, res.data?.RefreshToken as string);

  return CustomResponse({ message: "Logged in successfully" }, 200, "Success");
}
