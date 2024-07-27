import { PairWhereInput } from "./PairWhereInput";
import { PairOrderByInput } from "./PairOrderByInput";

export type PairFindManyArgs = {
  where?: PairWhereInput;
  orderBy?: Array<PairOrderByInput>;
  skip?: number;
  take?: number;
};
