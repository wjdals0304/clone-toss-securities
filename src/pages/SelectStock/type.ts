export interface Stock {
  id: number;
  name: string;
  price: number;
  change: number;
  logo: string;
}

export interface StockTheme {
  id: number;
  title: string;
  description: string;
  conditions: string[];
  stocks: Stock[];
}
