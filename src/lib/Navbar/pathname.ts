export const isOnPathname = (actual: string, expected: string): boolean => {
  const splitActual = actual.split("/");
  const splitExpected = expected.split("/");

  let i = 1,
    j = 1;

  while (splitActual[i] !== undefined && splitExpected[j] !== undefined) {
    if (splitActual[i] !== splitExpected[j]) return false;

    i++;
    j++;
  }

  return true;
};
