import { IndexItemType } from './type';

interface IndexItemProps {
  item: IndexItemType;
}

export default function IndexItem({ item }: IndexItemProps) {
  const { name, price, changeRate } = item;
  const isPositive = changeRate >= 0;

  return (
    <li className="list-none">
      <div className="flex flex-col gap-[0.2rem]">
        <span className="text-[15px] font-normal text-lightGray">{name}</span>
        <div className="flex flex-row gap-2 items-center">
          <span
            className={`text-[15px] font-normal ${
              isPositive ? 'text-stockRedUp' : 'text-stockBlueDown'
            }`}
          >
            {price}
          </span>
          <span
            className={`text-[15px] font-normal ${
              isPositive ? 'text-stockRedUp' : 'text-stockBlueDown'
            }`}
          >
            {isPositive ? '+' : ''}
            {changeRate}%
          </span>
        </div>
      </div>
    </li>
  );
}
