import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

import type {
  RequestConfig,
  StandardApiResponse,
} from "@/api/interfaces/apiModel";
import { fetchData } from "@/api/lib/axiosFunctions";

export const fetchUserData = async <T>(cookies: ReadonlyRequestCookies) => {
  const accessToken = await cookies.get("access-token")?.value;

  const config: RequestConfig<null> = {
    body: null,
    config: {
      headers: {
        Authorization: `Bearer ${accessToken ?? ""}`,
      },
    },
    method: "get",
    route: "/api/user/user-info",
  };

  const res = await fetchData(config);
  const response = res as StandardApiResponse<T>;

  return response;
};
