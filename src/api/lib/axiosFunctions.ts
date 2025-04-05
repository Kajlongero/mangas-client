import { RequestConfig, StandardApiResponse } from "../interfaces/apiModel";

import { ownServer, proxyAxios } from "@/config/lib/axiosInstances";
import { AxiosError, isAxiosError } from "axios";

const ALLOWED_NON_GET_SIMILARS = new Set(["post", "patch"]);

export const fetchData = async <Entry, Resultant>(
  conf: RequestConfig<Entry>
): Promise<Resultant> => {
  try {
    const { body, config, method, route } = conf;

    const path = new URL(`${process.env.NEXT_PUBLIC_API_SERVER}${route}`).href;

    const _bodyOrConfig = ALLOWED_NON_GET_SIMILARS.has(method) ? body : config;
    const _config = ALLOWED_NON_GET_SIMILARS.has(method) ? config : {};

    const request = await proxyAxios[method](path, _bodyOrConfig, _config);
    const response = request.data;

    return response;
  } catch (e: unknown) {
    const err = e as AxiosError;
    const res = err.response?.data as StandardApiResponse<null>;

    return {
      data: null,
      error: res.error ?? true,
      message: res.message ?? err.message,
      statusCode: res.statusCode ?? err.status,
    } as Resultant;
  }
};

export const fetchOwnServer = async <Entry, Resultant>(
  conf: RequestConfig<Entry>
): Promise<Resultant> => {
  try {
    const { body, config, method, route } = conf;

    const _bodyOrConfig = ALLOWED_NON_GET_SIMILARS.has(method) ? body : config;
    const _config = ALLOWED_NON_GET_SIMILARS.has(method) ? config : {};

    const request = await ownServer[method](route, _bodyOrConfig, _config);
    const response = request.data;

    return response;
  } catch (e: unknown) {
    const err = e as AxiosError;
    const res = err.response?.data as StandardApiResponse<null>;

    return {
      data: null,
      error: res?.error ?? true,
      message: res?.message ?? err.message,
      statusCode: res?.statusCode ?? err.status,
    } as Resultant;
  }
};
