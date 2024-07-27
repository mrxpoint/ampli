import { Pair as TPair } from "../api/pair/Pair";

export const PAIR_TITLE_FIELD = "tokenB";

export const PairTitle = (record: TPair): string => {
  return record.tokenB?.toString() || String(record.id);
};
