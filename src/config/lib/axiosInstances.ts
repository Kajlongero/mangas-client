import _ from "axios";

export const ownServer = _.create();

export const proxyAxios = _.create({
  baseURL: process.env.NEXT_PUBLIC_API_SERVER as string,
});
