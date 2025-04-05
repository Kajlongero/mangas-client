export type Roles = {
  id: number;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  Permissions: Permissions;
};

export type Permissions = {
  id: number;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};
