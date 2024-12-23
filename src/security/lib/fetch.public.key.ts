import { fetchData } from "@/api/lib/axios.functions";
import { RequestConfig, StandardApiResponse } from "@/api/interfaces/api.model";

export const fetchPublicKey = async () => {
  const config: RequestConfig<null> = {
    body: null,
    config: {},
    method: "get",
    route: "/api/auth/public-key",
  };

  const res = (await fetchData(config)) as StandardApiResponse<string>;

  return res.data;
};
