import { cookies } from "next/headers";

import { fetchData } from "@/common/lib/axios.functions";
import { DynamicResponse } from "@/api/responses/dynamic.response";
import {
  AddElementsIntoObject,
  FindPossibleInAnidatedAndExec,
} from "@/common/utils/objects.functions";

import { RequestConfig } from "@/api/interfaces/api.model";

export async function POST(req: Request) {
  const _body: RequestConfig<object> = await req.json();
  const store = await cookies();

  const rt = store.get("refresh-token");
  const at = store.get("access-token");

  const conf: RequestConfig<object> = {
    ..._body,
    config: {
      headers: {
        Authorization: at ? `Bearer ${at}` : ``,
      },
    },
    body: AddElementsIntoObject(
      _body.body ?? {},
      rt ? { refreshToken: rt } : {}
    ),
  };

  const data = await fetchData<unknown, unknown>(conf);
  const res = data as Record<string, unknown>;

  const locations = ["", ".reqInfo"];

  return FindPossibleInAnidatedAndExec(res, locations, DynamicResponse);
}
