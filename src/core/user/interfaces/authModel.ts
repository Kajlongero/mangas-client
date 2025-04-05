import { Roles } from "./rolesPermissionsModel";

export type Auth = {
  id: string;
  blocked: boolean;
  restricted: boolean;
  Roles: Roles;
  Auth_Info: AuthInfo;
  Auth_Security: AuthSecurity;
};

type AuthInfo = {
  id: number;
  email: string;
};

type AuthSecurity = {
  id: number;
  loginAttempts: number;
  resetPasswordAttempts: number;
  timeToLogin: string;
  timeToRequestPassword: string;
};

export type ActiveSessions = {
  id: string;
  active: boolean;
  pubKey: string;
  tokenId: string;
  lastLogin: string;
  validUntil: string;
};

export type BlacklistedSessions = {
  id: string;
  active: boolean;
  pubKey: string;
  tokenId: string;
  lastLogin: string;
  validUntil: string;
};
