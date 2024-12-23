import { cookies } from "next/headers";

import { fetchData } from "@/common/lib/axios.functions";
import { CustomResponse } from "@/api/responses/custom.response";
import {
  AccessTokenValidTime,
  RefreshTokenValidTime,
  SetSessionId,
} from "@/security/lib/auth.tokens.times";

import { AuthResponse } from "@/security/interfaces/auth.model";
import { RegisterCredentials } from "@/security/interfaces/auth.model";
import { RequestConfig, StandardApiResponse } from "@/api/interfaces/api.model";

export async function POST(req: Request) {
  const body: RegisterCredentials = await req.json();
  const config: Readonly<RequestConfig<RegisterCredentials>> = {
    body: body,
    config: {},
    method: "post",
    route: "/api/auth/signup",
  };

  const res = await fetchData<
    RegisterCredentials,
    StandardApiResponse<null | AuthResponse>
  >(config);

  if (res.error) {
    delete res.data;
    return CustomResponse(res, res.statusCode, res.message ?? "");
  }

  const store = await cookies();

  AccessTokenValidTime(store, res.data?.accessToken as string);
  RefreshTokenValidTime(store, res.data?.refreshToken as string);
  SetSessionId(store, res.data?.sessionId as string);

  return CustomResponse(
    { message: "Registered successfully", privateKey: res.data?.privateKey },
    200,
    "Success"
  );
}
