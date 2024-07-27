import { User } from "../user/User";

export type Pair = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tokenB: string | null;
  tokenA: string | null;
  liquidity: number | null;
  user?: User | null;
};
