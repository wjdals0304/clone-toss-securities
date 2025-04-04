import { useQuery } from '@tanstack/react-query';
import { SelectStockResponse } from '@/pages/SelectStock/type';

const fetchSelectStockData = async (): Promise<SelectStockResponse> => {
  const response = await fetch('/api/selectStock');
  return response.json();
};

export function useSelectStockQuery() {
  return useQuery<SelectStockResponse, Error>({
    queryKey: ['selectStock'],
    queryFn: fetchSelectStockData,
  });
}
