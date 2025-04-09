import { TransactionItem } from '@/types/transaction';

const formatPrice = (price: number) => price.toLocaleString('ko-KR') + '원';
const formatVolume = (volume: number) =>
  Math.floor(volume / 100000000) + '억원';
const formatChange = (change: number) => `${change > 0 ? '+' : ''}${change}%`;

interface ContentItemProps {
  item: TransactionItem;
}

export default function ContentItem({ item }: ContentItemProps) {
  const { id, rank, name, price, priceChange, volume } = item;
  return (
    <div
      key={id}
      className="flex items-center p-[2px] hover:bg-hoverDark rounded-lg transition-colors"
    >
      <div className="flex items-center gap-3 flex-1">
        <span className="text-[15px] font-bold text-stockBlueDown w-4">
          {rank}
        </span>
        <div className="flex flex-col">
          <span className="text-[15px] font-bold text-white">{name}</span>
          <div className="flex items-center gap-1">
            <span className="text-[15px] text-white">{formatPrice(price)}</span>
            <span
              className={`text-[15px] ${
                priceChange >= 0 ? 'text-stockRedUp' : 'text-stockBlueDown'
              }`}
            >
              {formatChange(priceChange)}
            </span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <span className="text-[15px] font-bold text-white">
          {formatVolume(volume)}
        </span>
      </div>
    </div>
  );
}
