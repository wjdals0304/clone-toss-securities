import { useNewsQuery } from '@/hooks/useNewsQuery';
import NewsItems from './NewsItems';

export default function NewsSection() {
  const { data, isError } = useNewsQuery();

  if (isError) {
    return (
      <div className="min-h-[340px] flex items-center justify-center">
        <span className="text-red-500">뉴스를 불러오는데 실패했습니다.</span>
      </div>
    );
  }
  return (
    <div className="min-h-[340px]">
      <div className="flex gap-4 mb-2">
        <span className="text-[15px] font-normal text-lightGray">
          주요 뉴스
        </span>
      </div>
      <div className="flex flex-col gap-4">
        {data?.items.map(item => <NewsItems key={item.id} item={item} />)}
      </div>
    </div>
  );
}
