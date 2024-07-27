import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SwapListRelationFilter } from "../swap/SwapListRelationFilter";
import { PoolListRelationFilter } from "../pool/PoolListRelationFilter";
import { PairListRelationFilter } from "../pair/PairListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  userName?: StringNullableFilter;
  walletAddress?: StringNullableFilter;
  swaps?: SwapListRelationFilter;
  pools?: PoolListRelationFilter;
  pairs?: PairListRelationFilter;
};
