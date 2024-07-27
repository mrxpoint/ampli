import { SortOrder } from "../../util/SortOrder";

export type SwapOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  tokenB?: SortOrder;
  tokenA?: SortOrder;
  amountA?: SortOrder;
  amountB?: SortOrder;
  userId?: SortOrder;
};
