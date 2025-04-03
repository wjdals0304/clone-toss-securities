import styled from 'styled-components';
import { TransactionItem } from '@/types/transaction';

interface ContentProps {
  title: string;
  items: TransactionItem[];
}

const formatPrice = (price: number) => price.toLocaleString('ko-KR') + '원';
const formatVolume = (volume: number) =>
  Math.floor(volume / 100000000) + '억원';
const formatChange = (change: number) => `${change > 0 ? '+' : ''}${change}%`;

export default function Content({ title, items }: ContentProps) {
  return (
    <div className="flex flex-col gap-2 flex-1 rounded-xl">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[20px] font-bold text-white">{title}</span>
        <span className="text-[13px] text-gray"></span>
      </div>
      <div className="flex flex-col gap-3">
        {items.map(item => (
          <div
            key={item.id}
            className="flex items-center p-[2px] hover:bg-hoverDark rounded-lg transition-colors"
          >
            <div className="flex items-center gap-3 flex-1">
              <span className="text-[15px] font-bold text-stockBlueDown w-4">
                {item.rank}
              </span>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-white">
                  {item.name}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-[15px] text-white">
                    {formatPrice(item.price)}
                  </span>
                  <span
                    className={`text-[15px] ${
                      item.priceChange >= 0
                        ? 'text-stockRedUp'
                        : 'text-stockBlueDown'
                    }`}
                  >
                    {formatChange(item.priceChange)}
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[15px] font-bold text-white">
                {formatVolume(item.volume)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
