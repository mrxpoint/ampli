import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SwapUpdateInput = {
  tokenB?: string | null;
  tokenA?: string | null;
  amountA?: number | null;
  amountB?: number | null;
  user?: UserWhereUniqueInput | null;
};
