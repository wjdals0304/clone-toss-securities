import { MaterialItemType } from './type';

interface MaterialItemProps {
  item: MaterialItemType;
}

export default function MaterialItem({ item }: MaterialItemProps) {
  const { name, price, change, changeRate } = item;

  return (
    <li className="bg-transparent text-white h-[25px] hover:bg-white/5 rounded-s">
      <div className="flex items-center h-full gap-5">
        <span className="text-[#9DA3B3] text-[15px] pl-0 flex-1 min-w-[20px]">
          {name}
        </span>
        <span className="text-white text-[15px] min-w-[80px] text-right">
          {price.toFixed(2)}
        </span>
        <span
          className={`text-[15px] min-w-[100px] text-right ${change > 0 ? 'text-[#449bff]' : 'text-[#449bff]'}`}
        >
          {change < 0 ? '' : '+'}
          {change.toFixed(2)} ({change < 0 ? '' : '+'}
          {changeRate.toFixed(1)}%)
        </span>
      </div>
    </li>
  );
}
