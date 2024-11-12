import { AuthRoles } from "@/security/interfaces/auth.model";

export type User = {
  id: string;
  email: string;
  username: string;
  description: string;
  backgroundImage: string;
  profileImage: string;
  roles: AuthRoles[];
};
