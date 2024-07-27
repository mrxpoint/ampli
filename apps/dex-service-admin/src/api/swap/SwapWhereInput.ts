import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SwapWhereInput = {
  id?: StringFilter;
  tokenB?: StringNullableFilter;
  tokenA?: StringNullableFilter;
  amountA?: FloatNullableFilter;
  amountB?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
