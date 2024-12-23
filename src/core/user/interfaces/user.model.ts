export type User = {
  id: string;
  profile: Profile;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export type Profile = {
  id: string;
  username: string;
};
