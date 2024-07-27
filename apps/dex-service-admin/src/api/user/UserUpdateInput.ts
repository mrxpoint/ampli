import { InputJsonValue } from "../../types";
import { SwapUpdateManyWithoutUsersInput } from "./SwapUpdateManyWithoutUsersInput";
import { PoolUpdateManyWithoutUsersInput } from "./PoolUpdateManyWithoutUsersInput";
import { PairUpdateManyWithoutUsersInput } from "./PairUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  userName?: string | null;
  walletAddress?: string | null;
  swaps?: SwapUpdateManyWithoutUsersInput;
  pools?: PoolUpdateManyWithoutUsersInput;
  pairs?: PairUpdateManyWithoutUsersInput;
};
