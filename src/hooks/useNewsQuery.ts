import { useQuery } from '@tanstack/react-query';
import { NewsResponse } from '@/types/news';

async function getNews(): Promise<NewsResponse> {
  const response = await fetch('/api/news');
  return response.json();
}

export function useNewsQuery() {
  return useQuery<NewsResponse>({
    queryKey: ['news'],
    queryFn: getNews,
  });
}
