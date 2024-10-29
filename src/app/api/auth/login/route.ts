import axios from "axios";
import { cookies } from "next/headers";
import { type ApiResponse } from "@/interfaces/api.model";
import { type JwtTokens } from "@/interfaces/jwt.model";

// login
export async function POST(request: Request) {
  try {
    const body = request.body;

    const req = await axios.post(
      "http://localhost:3001/api/v1/auth/login",
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res: ApiResponse<JwtTokens> = req.data;

    const cookiesStore = await cookies();

    cookiesStore.set({
      name: "access-token",
      value: res.data.AccessToken,
      httpOnly: true,
      expires: Date.now() * 1000 * 60 * 60 * 24 * 30,
      maxAge: Date.now() * 1000 * 60 * 60 * 24 * 30,
      sameSite: "lax",
      path: "/",
      domain: "http://localhost:3001",
    });

    cookiesStore.set({
      name: "refresh-token",
      value: res.data.RefreshToken,
      httpOnly: true,
      expires: Date.now() * 1000 * 60 * 60 * 24 * 180,
      maxAge: Date.now() * 1000 * 60 * 60 * 24 * 180,
      sameSite: "lax",
      path: "/",
      domain: "http://localhost:3001",
    });

    return new Response(JSON.stringify(res), {
      status: res.statusCode,
      statusText: res.message,
    });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const err: Omit<ApiResponse<null>, "data"> = error.response?.data;

      return new Response(JSON.stringify(err), {
        status: err.statusCode,
        statusText: err.message,
      });
    }
  }
}
