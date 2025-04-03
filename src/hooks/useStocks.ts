import { StockPeriodType, StockTabType } from '@/constants/stockConstants';
import { useQuery } from '@tanstack/react-query';

export const useStocks = (tab: StockTabType, period: StockPeriodType) => {
  return useQuery({
    queryKey: ['stocks', tab, period],
    queryFn: async () => {
      const response = await fetch(`/api/stocks?tab=${tab}&period=${period}`);
      return response.json();
    },
  });
};
