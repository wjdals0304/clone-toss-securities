interface Stock {
  stock: string;
  stockChange: number;
}

interface CategoryItem {
  id: string;
  image: string;
  title: string;
  change: number;
  desc: string;
  rank: number;
  backgroundColor: string;
  stockList: Stock[];
}

export interface CategoryData {
  domestic: CategoryItem[];
  overseas: CategoryItem[];
}
