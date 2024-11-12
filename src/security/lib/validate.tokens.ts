import {
  RequestConfig,
  StandardApiResponse,
} from "@/common/interfaces/api.model";
import { fetchData, fetchOwnServer } from "@/common/lib/axios.functions";
import { User } from "@/core/user/interfaces/user.model";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

type IsValidToken<T> = {
  valid: boolean;
  data: T | null;
};

export const validateAccessToken = async (
  cookies: ReadonlyRequestCookies
): Promise<IsValidToken<User | null>> => {
  const at = cookies.get("access-token");

  const conf: RequestConfig<null> = {
    body: null,
    method: "get",
    route: "/api/v1/user/user-info",
    config: {
      headers: {
        Authorization: `Bearer ${at}`,
      },
    },
  };

  const res = await fetchData<null, StandardApiResponse<User | null>>(conf);

  if (res.error) {
    return {
      data: null,
      valid: false,
    };
  }

  return {
    data: res.data as User,
    valid: true,
  };
};

export const validateRefreshToken = async (): Promise<
  IsValidToken<User | null>
> => {
  const conf: RequestConfig<null> = {
    config: {
      withCredentials: true,
    },
    method: "post",
    route: "/api/auth/refresh-token",
    body: null,
  };

  const res = await fetchOwnServer<null, StandardApiResponse<User | null>>(
    conf
  );

  if (res.error) {
    return {
      data: null,
      valid: false,
    };
  }

  return {
    data: res.data as User,
    valid: true,
  };
};
