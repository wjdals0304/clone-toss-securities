import { useQuery } from '@tanstack/react-query';
import { EtfSection } from '@/types/etf';

const fetchEtfData = async (): Promise<EtfSection[]> => {
  const response = await fetch('/api/etf');
  return response.json();
};

export function useEtfQuery() {
  return useQuery<EtfSection[], Error>({
    queryKey: ['etf'],
    queryFn: fetchEtfData,
  });
}
