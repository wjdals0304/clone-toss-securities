import { StockPeriodType, StockTabType } from '@/constants/stockConstants';
import { useQuery } from '@tanstack/react-query';

export const useStocks = (tab: StockTabType, period: StockPeriodType) => {
  return useQuery({
    queryKey: ['stocks', tab, period],
    queryFn: async () => {
      const response = await fetch(`/api/stocks?tab=${tab}&period=${period}`);
      if (!response.ok) {
        throw new Error('주식 데이터를 불러오는데 실패했습니다.');
      }
      return response.json();
    },
  });
};
