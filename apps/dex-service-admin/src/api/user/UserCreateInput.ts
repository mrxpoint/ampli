import { InputJsonValue } from "../../types";
import { SwapCreateNestedManyWithoutUsersInput } from "./SwapCreateNestedManyWithoutUsersInput";
import { PoolCreateNestedManyWithoutUsersInput } from "./PoolCreateNestedManyWithoutUsersInput";
import { PairCreateNestedManyWithoutUsersInput } from "./PairCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  userName?: string | null;
  walletAddress?: string | null;
  swaps?: SwapCreateNestedManyWithoutUsersInput;
  pools?: PoolCreateNestedManyWithoutUsersInput;
  pairs?: PairCreateNestedManyWithoutUsersInput;
};
