export interface EtfItem {
  id: string;
  name: string;
  ticker: string;
  price: number;
  priceChange: number;
  category: 'leverage' | 'inverse' | 'normal';
  multiplier?: string;
  country: string;
}

export interface EtfSection {
  title: string;
  items: EtfItem[];
}
