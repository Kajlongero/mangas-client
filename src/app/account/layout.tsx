import { cookies } from "next/headers";

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const at = cookies().get("auth-token")?.value;
  const rt = cookies().get("refresh-token")?.value;

  return <>{children}</>;
}
