import { SortOrder } from "../../util/SortOrder";

export type PoolOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  reserveA?: SortOrder;
  reserveB?: SortOrder;
  userId?: SortOrder;
};
