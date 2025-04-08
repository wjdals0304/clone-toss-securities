export interface NewsItem {
  id: number;
  title: string;
  time: string;
  image: string;
  content: string;
}

export interface NewsResponse {
  items: NewsItem[];
}
