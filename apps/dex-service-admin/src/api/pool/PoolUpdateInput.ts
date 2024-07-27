import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PoolUpdateInput = {
  name?: string | null;
  reserveA?: number | null;
  reserveB?: number | null;
  user?: UserWhereUniqueInput | null;
};
