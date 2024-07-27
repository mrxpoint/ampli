import { Swap as TSwap } from "../api/swap/Swap";

export const SWAP_TITLE_FIELD = "tokenB";

export const SwapTitle = (record: TSwap): string => {
  return record.tokenB?.toString() || String(record.id);
};
