import {
  LoginCredentials,
  LoginCredentialsErrors,
  RegisterCredentials,
  RegisterCredentialsErrors,
} from "../interfaces/authModel";

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

export const ValidateLogin = (
  b: LoginCredentials,
  lang: "es" | "en" = "en"
): LoginCredentialsErrors => {
  const { email, password } = b;

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!email.length && !password.length)
    return {
      email: {
        error: true,
        message:
          lang === "en"
            ? "Email must not be empty"
            : "El campo de email no debe estar vacío",
      },
      password: {
        error: true,
        message:
          lang === "en"
            ? "Input a valid email"
            : "Por favor, introduce un email válido",
      },
    };

  if (!email.length)
    return {
      email: {
        error: true,
        message:
          lang === "en"
            ? "Email must not be empty"
            : "El campo de email no debe estar vacío",
      },
    };

  if (!regex.test(email))
    return {
      email: {
        error: true,
        message:
          lang === "en" ? "Input a valid email" : "Digita un email válido",
      },
    };

  if (!password)
    return {
      password: {
        error: true,
        message:
          lang === "en"
            ? "You must provide a password"
            : "Debes escribir una contraseña",
      },
    };

  if (password && password.length < 8)
    return {
      password: {
        error: true,
        message:
          lang === "en"
            ? "Password must be at least 8 characters long"
            : "La contraseña debe tener como mínimo 8 caracteres de longitud",
      },
    };

  if (password && password.length > 32)
    return {
      password: {
        error: true,
        message:
          lang === "en"
            ? "Password must be less than 32 characters long"
            : "La contraseña debe ser menor a 32 caracteres de longitud",
      },
    };

  return {};
};

export const ValidateRegister = (
  body: RegisterCredentials,
  lang: "es" | "en" = "en"
): RegisterCredentialsErrors => {
  const { email, password, username } = body;

  if (!username)
    return {
      username: {
        error: true,
        message:
          lang === "en"
            ? "You must type a username"
            : "Debes escribir un nombre de usuario",
      },
    };

  if (username.trim().length < 3)
    return {
      username: {
        error: true,
        message:
          lang === "en"
            ? "You must type a username with at least 3 characters long"
            : "Debes ingresar un nombre de usuario con al menos 3 caracteres de longitud",
      },
    };

  if (username.length < 3)
    return {
      username: {
        error: true,
        message:
          lang === "en"
            ? "You must type a username with at least 3 characters long"
            : "Debes ingresar un nombre de usuario con al menos 3 caracteres de longitud",
      },
    };

  if (username.length > 32)
    return {
      username: {
        error: true,
        message:
          lang === "en"
            ? "Username length must be lower or equal than 32 characters long"
            : "El nombre de usuario debe tener una longitud menor o igual a 32 caracteres de longitud",
      },
    };

  const isValidAuth = ValidateLogin({ email, password }, lang);
  if (isValidAuth) return isValidAuth;

  return {};
};
