import { Auth } from "./authModel";
import { Profile } from "./profileModel";

export type User = {
  id: string;
  Profile: Profile;
  Auth: Auth;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};
