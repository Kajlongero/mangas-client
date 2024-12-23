export const DynamicResponse = (
  data: unknown,
  reqInfo: Record<string, unknown>
) => {
  return new Response(JSON.stringify(data), {
    status: reqInfo.statusCode as number,
    statusText: reqInfo.statusText as string,
  });
};
