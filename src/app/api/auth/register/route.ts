import { cookies } from "next/headers";

import { fetchData } from "@/common/lib/axios.functions";
import { ValidateRegister } from "@/security/lib/validate.auth.info";
import { CustomResponse } from "@/common/responses/custom.response";
import {
  AccessTokenValidTime,
  RefreshTokenValidTime,
} from "@/security/lib/auth.tokens.times";

import { RegisterCredentials } from "@/security/interfaces/auth.model";
import { JwtTokens } from "@/security/interfaces/auth.model";
import {
  RequestConfig,
  StandardApiResponse,
} from "@/common/interfaces/api.model";

export async function POST(req: Request) {
  const body: RegisterCredentials = await req.json();

  const valid = ValidateRegister(body);
  if (valid.error) return CustomResponse(valid, 400, "Bad Request");

  const config: Readonly<RequestConfig<RegisterCredentials>> = {
    body: body,
    config: {},
    method: "post",
    route: "/api/v1/auth/signup",
  };

  const res = await fetchData<
    RegisterCredentials,
    StandardApiResponse<null | JwtTokens>
  >(config);

  if (res.error) {
    delete res.data;
    return CustomResponse(res, res.statusCode, res.message ?? "");
  }

  const store = await cookies();

  AccessTokenValidTime(store, res.data?.AccessToken as string);
  RefreshTokenValidTime(store, res.data?.RefreshToken as string);

  return CustomResponse({ message: "Registered successfully" }, 200, "Success");
}
