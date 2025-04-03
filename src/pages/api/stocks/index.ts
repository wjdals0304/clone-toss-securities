import type { NextApiRequest, NextApiResponse } from 'next';
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
import { StockPeriodType } from '@/constants/stockConstants';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { tab, period = STOCK_PERIOD.REALTIME } = req.query;

    switch (tab) {
      case STOCK_TAB.VOLUME:
        return res
          .status(200)
          .json(getStocksByPeriod(STOCK_TAB.VOLUME, period as StockPeriodType));
      case STOCK_TAB.VOLUME_COUNT:
        return res
          .status(200)
          .json(
            getStocksByPeriod(
              STOCK_TAB.VOLUME_COUNT,
              period as StockPeriodType,
            ),
          );
      default:
        return res
          .status(200)
          .json(getStocksByPeriod(STOCK_TAB.VOLUME, period as StockPeriodType));
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

const getStocksByPeriod = (type: StockTabType, period: StockPeriodType) => {
  if (period === STOCK_PERIOD.WEEK) {
    return type === STOCK_TAB.VOLUME
      ? weeklyVolumeStocks
      : weeklyVolumeCountStocks;
  }
  return type === STOCK_TAB.VOLUME
    ? realtimeVolumeStocks
    : realtimeVolumeCountStocks;
};
