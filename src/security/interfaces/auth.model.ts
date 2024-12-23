export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password: string;
  username: string;
}

export type LoginCredentialsErrors = {
  email?: {
    error: boolean;
    message: string;
  };
  password?: {
    error: boolean;
    message: string;
  };
};

export type RegisterCredentialsErrors = {
  email?: {
    error: boolean;
    message: string;
  };
  password?: {
    error: boolean;
    message: string;
  };
  username?: {
    error: boolean;
    message: string;
  };
};

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  sessionId: string;
  privateKey: string;
}

export type AuthRoles =
  | "SUPERUSER"
  | "ADMIN"
  | "MODERATOR"
  | "READER"
  | "TRANSLATOR"
  | "SCANLATOR";
