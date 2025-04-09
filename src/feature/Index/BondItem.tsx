import { BondItemListType } from './type';

interface BondItemProps {
  item: BondItemListType;
}

export default function BondItem({ item }: BondItemProps) {
  const { name, items } = item;

  return (
    <div className="bg-transparent text-white">
      <h3 className="text-[15px] font-medium text-[#e4e4e5] mb-4">{name}</h3>
      <ul className="list-none p-0 m-0">
        {items.map(({ period, price, change, changeRate }) => (
          <li key={period} className="flex py-1 hover:bg-white/5">
            <span className="text-[#9DA3B3] text-[14px] flex-1">{period}</span>
            <span className="text-white text-[14px] mr-4 min-w-[80px] text-right">
              {price.toFixed(2)}
            </span>
            <span
              className={`text-[14px] ${change > 0 ? 'text-[#ff4444]' : 'text-[#449bff]'} min-w-[100px] text-right`}
            >
              {change > 0 ? '+' : ''}
              {change.toFixed(3)}({changeRate > 0 ? '+' : ''}
              {changeRate.toFixed(1)}%)
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
