import { useQuery } from '@tanstack/react-query';
import { CommunityStock, CommunityPost } from '@/types/community';

interface CommunityResponse {
  stocks: CommunityStock[];
  currentStockId: string;
  posts: CommunityPost[];
}

interface StockResponse {
  stock: CommunityStock;
  posts: CommunityPost[];
}

export function useCommunity() {
  return useQuery<CommunityResponse>({
    queryKey: ['community'],
    queryFn: async () => {
      const response = await fetch('/api/community');
      if (!response.ok) {
        throw new Error('Failed to fetch community data');
      }
      return response.json();
    },
  });
}

export function useSelectedStock(selectedStockId: string) {
  return useQuery<StockResponse>({
    queryKey: ['community', selectedStockId],
    queryFn: async () => {
      const response = await fetch(`/api/community?stockId=${selectedStockId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch stock data');
      }
      return response.json();
    },
    enabled: !!selectedStockId,
  });
}
