import { cookies } from "next/headers";

import { fetchData } from "@/api/lib/axiosFunctions";
import { CustomResponse } from "@/api/responses/custom.response";
import {
  AccessTokenValidTime,
  RefreshTokenValidTime,
  SetSessionId,
} from "@/security/lib/authTokenTimes";

import { AuthResponse } from "@/security/interfaces/authModel";
import { RegisterCredentials } from "@/security/interfaces/authModel";
import { RequestConfig, StandardApiResponse } from "@/api/interfaces/apiModel";

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

  console.log(res);

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
