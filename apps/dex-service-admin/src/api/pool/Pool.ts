import { User } from "../user/User";

export type Pool = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  reserveA: number | null;
  reserveB: number | null;
  user?: User | null;
};
