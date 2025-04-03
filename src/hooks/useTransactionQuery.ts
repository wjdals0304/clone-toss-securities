import { useQuery } from '@tanstack/react-query';
import { TransactionSection } from '@/types/transaction';

const fetchTransactionData = async (): Promise<TransactionSection[]> => {
  const response = await fetch('/api/transaction');
  return response.json();
};

export function useTransactionQuery() {
  return useQuery<TransactionSection[], Error>({
    queryKey: ['transaction'],
    queryFn: fetchTransactionData,
  });
}
