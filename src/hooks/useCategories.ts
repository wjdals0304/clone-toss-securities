import { useQuery } from '@tanstack/react-query';
import { CategoryData } from '@/types/category';

export function useCategories() {
  return useQuery<CategoryData>({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await fetch('/api/categories');
      return response.json();
    },
  });
}
