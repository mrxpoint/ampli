import { SwapWhereInput } from "./SwapWhereInput";
import { SwapOrderByInput } from "./SwapOrderByInput";

export type SwapFindManyArgs = {
  where?: SwapWhereInput;
  orderBy?: Array<SwapOrderByInput>;
  skip?: number;
  take?: number;
};
