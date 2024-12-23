/**
 *
 *
 * @param body Body to send in the response
 * @param code Status Code of the response. i.e: 200, 400, 401, 403, 404, etc.
 * @param message Message of the response
 * @returns {Response}
 */

export const CustomResponse = <T>(
  body: T,
  code: number,
  message: string
): Response => {
  const json = JSON.stringify(body);

  const obj: ResponseInit = {
    status: code,
    statusText: message,
  };

  return new Response(json, obj);
};
