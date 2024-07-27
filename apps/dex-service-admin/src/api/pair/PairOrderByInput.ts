import { SortOrder } from "../../util/SortOrder";

export type PairOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  tokenB?: SortOrder;
  tokenA?: SortOrder;
  liquidity?: SortOrder;
  userId?: SortOrder;
};
