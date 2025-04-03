export interface CommunityStock {
  id: string;
  name: string;
  change: number;
  logo: string;
  rank: number;
  postCount: number;
}

export interface CommunityPost {
  id: string;
  stockId: string;
  address: string;
  time: string;
  description: string;
}

export type PostsByStockId = {
  [key: string]: CommunityPost[];
};

export interface CommunityData {
  stocks: CommunityStock[];
  posts: PostsByStockId;
}
