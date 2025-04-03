import { realtimeVolumeStocks, weeklyVolumeStocks } from '@/data/volumeStocks';
import {
  realtimeVolumeCountStocks,
  weeklyVolumeCountStocks,
} from '@/data/volumeCountStocks';
import {
  STOCK_TAB,
  STOCK_PERIOD,
  type StockTabType,
} from '@/constants/stockConstants';

export const getStocksByPeriod = (type: StockTabType, period: string) => {
  if (period === STOCK_PERIOD.WEEK) {
    return type === STOCK_TAB.VOLUME
      ? weeklyVolumeStocks
      : weeklyVolumeCountStocks;
  }
  return type === STOCK_TAB.VOLUME
    ? realtimeVolumeStocks
    : realtimeVolumeCountStocks;
};
