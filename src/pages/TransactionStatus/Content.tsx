import Image from 'next/image';
import { StockItem } from './types';

interface ContentProps {
  title: string;
  stockItems: StockItem[];
  timestamp: string;
}

export default function Content({
  title,
  stockItems,
  timestamp,
}: ContentProps) {
  return (
    <div className="flex flex-col gap-2 flex-1 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[20px] font-bold text-white">{title}</span>
        <span className="text-[13px] text-gray">{timestamp} 기준</span>
      </div>
      <div className="flex flex-col gap-3">
        {stockItems.map(item => (
          <div
            key={item.rank}
            className="flex items-center p-[2px] hover:bg-hoverDark rounded-lg transition-colors"
          >
            <div className="flex items-center gap-3 flex-1">
              <span className="text-[15px] font-bold text-stockBlueDown w-4">
                {item.rank}
              </span>
              <div className="w-[34px] h-[34px] relative rounded-full bg-white flex items-center justify-center overflow-hidden">
                <Image
                  src={item.logoUrl}
                  alt={item.name}
                  width={34}
                  height={34}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-white">
                  {item.name}
                </span>
                <div className="flex items-center gap-1">
                  <span className="text-[15px] text-white">
                    {item.price.toLocaleString()}원
                  </span>
                  <span
                    className={`text-[15px] ${
                      item.priceChange >= 0
                        ? 'text-stockBlueDown'
                        : 'text-stockRedUp'
                    }`}
                  >
                    {item.priceChange >= 0 ? '+' : ''}
                    {item.priceChange}%
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[15px] font-bold text-white">
                {item.volume}억원
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
