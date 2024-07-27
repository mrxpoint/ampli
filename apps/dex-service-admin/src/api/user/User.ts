import { JsonValue } from "type-fest";
import { Swap } from "../swap/Swap";
import { Pool } from "../pool/Pool";
import { Pair } from "../pair/Pair";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  userName: string | null;
  walletAddress: string | null;
  swaps?: Array<Swap>;
  pools?: Array<Pool>;
  pairs?: Array<Pair>;
};
