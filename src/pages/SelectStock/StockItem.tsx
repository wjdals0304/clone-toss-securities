import { Stock } from './type';
import Image from 'next/image';

export default function StockItem({ stock }: { stock: Stock }) {
  return (
    <div className="flex items-center gap-[8px] justify-between p-[8px] hover:bg-hoverHighlight/5 rounded-lg transition-colors">
      <div className="flex items-center gap-[8px]">
        <div className="w-[24px] h-[24px] relative rounded-full bg-white overflow-hidden">
          <Image
            src={stock.logo}
            alt={stock.name}
            fill
            className="object-contain"
          />
        </div>
        <span className="text-[15px] text-brightWhite">{stock.name}</span>
      </div>
      <span
        className={`text-[15px] ${
          stock.change >= 0 ? 'text-stockRedUp' : 'text-stockBlueDown'
        }`}
      >
        {stock.change > 0 ? '+' : ''}
        {stock.change}%
      </span>
    </div>
  );
}
