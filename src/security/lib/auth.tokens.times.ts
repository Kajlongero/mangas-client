import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

/**
 * @param cookies Methods to handle tokens on route handler
 * @param token JWT Token or custom token to save
 * @returns {void}
 */

export const AccessTokenValidTime = (
  cookies: ReadonlyRequestCookies,
  token: string
): void => {
  const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  cookies.set("access-token", token, {
    httpOnly: true,
    expires: expires,
    sameSite: "lax",
    domain: "localhost",
    path: "/",
  });
};

/**
 * @param cookies Methods to handle tokens on route handler
 * @param token JWT Token or custom token to save
 * @returns {void}
 */

export const RefreshTokenValidTime = (
  cookies: ReadonlyRequestCookies,
  token: string
): void => {
  const expires = new Date(Date.now() + 180 * 24 * 60 * 60 * 1000);

  cookies.set("refresh-token", token, {
    httpOnly: true,
    expires: expires,
    sameSite: "lax",
    domain: "localhost",
    path: "/",
  });
};

export const SetSessionId = (
  cookies: ReadonlyRequestCookies,
  data: string
): void => {
  const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

  cookies.set("session-id", data, {
    httpOnly: true,
    expires: expires,
    sameSite: "lax",
    domain: "localhost",
    path: "/",
  });
};
