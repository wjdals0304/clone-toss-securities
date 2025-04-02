export const STOCK_TAB = {
  VOLUME: 'volume',
  VOLUME_COUNT: 'volume_count',
} as const;

export const STOCK_PERIOD = {
  REALTIME: 'realtime',
  WEEK: 'week',
} as const;

// 타입 정의
export type StockTabType = (typeof STOCK_TAB)[keyof typeof STOCK_TAB];
export type StockPeriodType = (typeof STOCK_PERIOD)[keyof typeof STOCK_PERIOD];
