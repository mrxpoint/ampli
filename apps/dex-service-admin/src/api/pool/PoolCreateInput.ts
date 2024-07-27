import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PoolCreateInput = {
  name?: string | null;
  reserveA?: number | null;
  reserveB?: number | null;
  user?: UserWhereUniqueInput | null;
};
