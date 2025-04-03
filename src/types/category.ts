export interface CategoryStock {
  stock: string;
  stockChange: number;
}

export interface CategoryItem {
  id: string;
  image: string;
  title: string;
  change: number;
  desc: string;
  stockList: CategoryStock[];
  rank: number;
  backgroundColor: string;
}

export interface CategoryData {
  domestic: CategoryItem[];
  overseas: CategoryItem[];
}
