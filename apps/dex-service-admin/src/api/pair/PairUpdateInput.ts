import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PairUpdateInput = {
  tokenB?: string | null;
  tokenA?: string | null;
  liquidity?: number | null;
  user?: UserWhereUniqueInput | null;
};
