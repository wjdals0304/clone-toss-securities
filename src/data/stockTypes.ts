import { STOCK_TAB } from '@/constants/stockConstants';

interface BaseStock {
  rank: number;
  name: string;
  price: number;
  change: number;
}

export interface VolumeStock extends BaseStock {
  [STOCK_TAB.VOLUME]: number;
}

export interface VolumeCountStock extends BaseStock {
  [STOCK_TAB.VOLUME_COUNT]: number;
}
