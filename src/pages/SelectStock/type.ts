export interface Stock {
  id: number;
  name: string;
  price: number;
  change: number;
  volume: number;
}

export interface StockTheme {
  id: number;
  title: string;
  description: string;
  conditions: string[];
  stocks: Stock[];
}

export interface SelectStockResponse {
  themes: StockTheme[];
}
