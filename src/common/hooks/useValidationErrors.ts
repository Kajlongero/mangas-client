import { useState } from "react";
import { VerifyObjectLength } from "../utils/objects.functions";

export const useValidationErrors = <T>(INITIAL_STATE: T) => {
  const [error, setError] = useState<T>(INITIAL_STATE);

  const validate = <J, K>(data: J, callback: (elems: J) => K) => {
    const verify = callback(data);

    console.log(verify);

    if (
      typeof verify === "object" &&
      VerifyObjectLength(verify as object) > 0
    ) {
      setError({ ...(verify as T) });
      return false;
    }

    setError({} as T);
    return true;
  };

  return {
    error,
    validate,
  };
};
