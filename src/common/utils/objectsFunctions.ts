export const VerifyObjectLength = (obj: object) => Object.keys(obj).length;

export const AddElementsIntoObject = (
  obj: Record<string, unknown> | object,
  elements: Record<string, unknown> | object
) => {
  let newObj = {};

  const obj1Length = VerifyObjectLength(obj);
  const obj2Length = VerifyObjectLength(elements);

  if (obj1Length > 0) {
    newObj = { ...obj };
  }

  if (obj2Length > 0) {
    newObj = { ...newObj, ...elements };
  }

  return newObj;
};

export const FindPossibleInAnidatedAndExec = (
  obj: Record<string, unknown>,
  locations: string[],
  callback?: (data: unknown, obj: Record<string, unknown>) => unknown
) => {
  for (const val of locations) {
    let helper = obj;
    const split = val.split(".");

    let flag = true;

    for (const splitted of split) {
      if (!helper.hasOwnProperty(splitted)) {
        flag = false;
        break;
      }

      console.log(helper);

      if (typeof helper === "object") {
        helper = helper[splitted] as Record<string, unknown>;
      }
    }

    if (flag) return callback ? callback(obj, helper) : true;
  }

  return false;
};
