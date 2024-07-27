import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PairWhereInput = {
  id?: StringFilter;
  tokenB?: StringNullableFilter;
  tokenA?: StringNullableFilter;
  liquidity?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
