import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PairCreateInput = {
  tokenB?: string | null;
  tokenA?: string | null;
  liquidity?: number | null;
  user?: UserWhereUniqueInput | null;
};
