import { TransactionItem } from '@/types/transaction';
import ContentItem from './ContentItem';

interface ContentProps {
  title: string;
  items: TransactionItem[];
}

export default function Content({ title, items }: ContentProps) {
  return (
    <div className="flex flex-col gap-2 flex-1 rounded-xl">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[20px] font-bold text-white">{title}</span>
        <span className="text-[13px] text-gray"></span>
      </div>
      <div className="flex flex-col gap-3">
        {items.map(item => (
          <ContentItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
