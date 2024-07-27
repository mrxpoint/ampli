import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PoolWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  reserveA?: FloatNullableFilter;
  reserveB?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
