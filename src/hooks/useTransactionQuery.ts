import { useQuery } from '@tanstack/react-query';
import { TransactionSection } from '@/types/transaction';

const fetchTransactionData = async (
  ranking: string = 'buy',
): Promise<TransactionSection[]> => {
  const response = await fetch(`/api/transaction?ranking=${ranking}`);
  return response.json();
};

export function useTransactionQuery(ranking: string = 'buy') {
  return useQuery<TransactionSection[], Error>({
    queryKey: ['transaction', ranking],
    queryFn: () => fetchTransactionData(ranking),
    placeholderData: previousData => previousData,
  });
}
