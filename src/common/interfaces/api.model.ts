import { AxiosRequestConfig } from "axios";

export type PaginatedApiResponse<T> = {
  data: T;
  results: number;
  prevPage: number | null;
  actualPage: number;
  nextPage: number | null;
  totalPages: number;
  totalElements: number;
  prevPath: string | null;
  actualPath: string | null;
  nextPath: string | null;
  reqInfo: Omit<StandardApiResponse<null>, "data">;
};

export type StandardApiResponse<T> = {
  data?: T;
  error: boolean;
  message?: string;
  statusCode: number;
};

export type RequestConfig<type> = {
  body: type;
  route: string;
  config: AxiosRequestConfig;
  method: "get" | "post" | "patch" | "put" | "delete";
};
