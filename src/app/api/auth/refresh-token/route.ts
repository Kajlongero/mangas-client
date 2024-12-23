import { RequestConfig, StandardApiResponse } from "@/api/interfaces/api.model";
import { fetchData } from "@/common/lib/axios.functions";
import { CustomResponse } from "@/api/responses/custom.response";
import { User } from "@/core/user/interfaces/user.model";
import { AuthResponse } from "@/security/interfaces/auth.model";
import {
  AccessTokenValidTime,
  RefreshTokenValidTime,
} from "@/security/lib/auth.tokens.times";
import { cookies } from "next/headers";

export async function POST() {
  const store = await cookies();
  const rt = store.get("refresh-token")?.value;

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
    route: "/api/v1/auth/refresh-token",
  };

  const res = await fetchData<string, StandardApiResponse<AuthResponse>>(conf);

  if (res.error) {
    const obj = { ...res, data: null };
    return CustomResponse(obj, res.statusCode, res.message ?? "");
  }

  AccessTokenValidTime(store, res.data?.accessToken as string);
  RefreshTokenValidTime(store, res.data?.refreshToken as string);

  const userConf: RequestConfig<null> = {
    body: null,
    method: "get",
    route: "/api/v1/user/user-info",
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
