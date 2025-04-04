import { Stock } from './type';

const changeColor = (change: number) => {
  if (change >= 0) {
    return 'text-stockRedUp';
  } else {
    return 'text-stockBlueDown';
  }
};

export default function StockItem({ stock }: { stock: Stock }) {
  return (
    <div className="flex items-center gap-[8px] justify-between p-[8px] hover:bg-hoverHighlight/5 rounded-lg transition-colors">
      <div className="flex items-center gap-[8px]">
        <span className="text-[15px] text-brightWhite">{stock.name}</span>
      </div>
      <span className={`text-[15px] ${changeColor(stock.change)}`}>
        {stock.change > 0 ? '+' : ''}
        {stock.change}%
      </span>
    </div>
  );
}
