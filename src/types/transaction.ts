export interface TransactionItem {
  id: string;
  rank: number;
  name: string;
  price: number;
  priceChange: number;
  volume: number;
}

export interface TransactionSection {
  title: string;
  subtitle: string;
  items: TransactionItem[];
  type: 'foreign' | 'institution' | 'individual';
}
