import {
  LoginCredentials,
  LoginCredentialsErrors,
  RegisterCredentials,
  RegisterCredentialsErrors,
} from "../interfaces/auth.model";

export const LOGIN_ERRORS_INITIAL_STATE: LoginCredentialsErrors = {
  email: {
    error: false,
    message: "",
  },
  password: {
    error: false,
    message: "",
  },
};

export const REGISTER_ERRORS_INITIAL_STATE: RegisterCredentialsErrors = {
  email: {
    error: false,
    message: "",
  },
  password: {
    error: false,
    message: "",
  },
  username: {
    error: false,
    message: "",
  },
};

export const ValidateLogin = (b: LoginCredentials): LoginCredentialsErrors => {
  const { email, password } = b;

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!email.length && !password.length)
    return {
      email: {
        error: true,
        message: "Email must not be empty",
      },
      password: {
        error: true,
        message: "Password must not be empty",
      },
    };

  if (!email.length)
    return {
      email: {
        error: true,
        message: "Email must not be empty",
      },
    };

  if (!regex.test(email))
    return {
      email: {
        error: true,
        message: "Input a valid email",
      },
    };

  if (!password)
    return {
      password: {
        error: true,
        message: "Password must not be empty",
      },
    };

  if (password && password.length < 8)
    return {
      password: {
        error: true,
        message: "Password must be at least 8 characters long",
      },
    };

  if (password && password.length > 32)
    return {
      password: {
        error: true,
        message: "Password must be less than 32 characters long",
      },
    };

  return {};
};

export const ValidateRegister = (
  body: RegisterCredentials
): RegisterCredentialsErrors => {
  const { email, password, username } = body;

  if (!username)
    return {
      username: {
        error: true,
        message: "You must type a username",
      },
    };

  if (username.trim().length < 3)
    return {
      username: {
        error: true,
        message: "You must type a username with at least 3 characters long",
      },
    };

  if (username.length < 3)
    return {
      username: {
        error: true,
        message: "You must type a username with at least 3 characters long",
      },
    };

  if (username.length > 64)
    return {
      username: {
        error: true,
        message: "Username length must be lower than 64 characters long",
      },
    };

  const isValidAuth = ValidateLogin({ email, password });
  if (isValidAuth) return isValidAuth;

  return {};
};
