import { User } from "../user/User";

export type Swap = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tokenB: string | null;
  tokenA: string | null;
  amountA: number | null;
  amountB: number | null;
  user?: User | null;
};
