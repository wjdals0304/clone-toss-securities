interface IndexItemProps {
  item: IndexItem;
}

export default function IndexItem({ item }: IndexItemProps) {
  const isPositive = item.changeRate >= 0;

  return (
    <li className="list-none">
      <div className="flex flex-col gap-[0.2rem]">
        <span className="text-[15px] font-normal text-lightGray">
          {item.name}
        </span>
        <div className="flex flex-row gap-2 items-center">
          <span
            className={`text-[15px] font-normal ${
              isPositive ? 'text-stockRedUp' : 'text-stockBlueDown'
            }`}
          >
            {item.price}
          </span>
          <span
            className={`text-[15px] font-normal ${
              isPositive ? 'text-stockRedUp' : 'text-stockBlueDown'
            }`}
          >
            {isPositive ? '+' : ''}
            {item.changeRate}%
          </span>
        </div>
      </div>
    </li>
  );
}
