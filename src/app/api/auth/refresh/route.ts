import { cookies } from "next/headers";

import { fetchData } from "@/api/lib/axiosFunctions";
import { CustomResponse } from "@/api/responses/custom.response";
import {
  AccessTokenValidTime,
  RefreshTokenValidTime,
  SetSessionId,
} from "@/security/lib/authTokenTimes";

import { User } from "@/core/user/interfaces/userModel";
import { AuthResponse } from "@/security/interfaces/authModel";
import { RequestConfig, StandardApiResponse } from "@/api/interfaces/apiModel";

export async function POST() {
  const store = await cookies();
  const rt = store.get("refresh-token")?.value;

  console.log(rt);

  if (!rt) {
    store.delete("access-token");
    store.delete("refresh-token");
    store.delete("session-id");

    const obj: StandardApiResponse<null> = {
      data: null,
      error: true,
      statusCode: 401,
      message: "Token expired",
    };

    return CustomResponse(obj, 401, "Token expired");
  }

  const conf: RequestConfig<string> = {
    body: rt as string,
    config: {},
    method: "post",
    route: "/api/auth/refresh-token",
  };

  const res = await fetchData<
    string,
    StandardApiResponse<
      Pick<AuthResponse, "accessToken" | "refreshToken" | "sessionId">
    >
  >(conf);

  if (res.error) {
    const obj = { ...res, data: null };
    return CustomResponse(obj, res.statusCode, res.message ?? "");
  }

  RefreshTokenValidTime(store, res.data?.refreshToken as string);
  AccessTokenValidTime(store, res.data?.accessToken as string);
  SetSessionId(store, res.data?.sessionId as string);

  const userConf: RequestConfig<null> = {
    body: null,
    method: "get",
    route: "/api/user/user-info",
    config: {
      headers: {
        Authorization: `Bearer ${res.data?.accessToken}`,
      },
    },
  };

  const user = await fetchData<null, StandardApiResponse<User>>(userConf);

  if (user.error) {
    const obj = { ...user, data: null };
    return CustomResponse(obj, user.statusCode, user.message ?? "");
  }

  return CustomResponse(user.data, user.statusCode, user.message ?? "");
}
