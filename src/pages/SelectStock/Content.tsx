import { StockTheme } from './type';
import StockItem from './StockItem';

interface ContentProps {
  theme: StockTheme;
}

export default function Content({ theme }: ContentProps) {
  return (
    <div className="flex gap-[5px] rounded-[20px] p-[8px] bg-[#D1D1FD]/5 w-[280px] h-[352px]">
      <div className="flex flex-col p-[8px] w-full">
        <div className="flex items-start gap-[8px] flex-col mb-[8px]">
          <span className="text-[15px] text-[#e4e4e5]">{theme.title}</span>
          <span className="text-[13px] text-[#8b8b8e]">
            {theme.description}
          </span>
        </div>
        <div className="flex flex-col gap-[5px] mb-[30px]">
          {theme.conditions.map((condition, index) => (
            <span
              key={index}
              className="text-[13px] text-[#fdfdff] bg-[#D1D1FD]/5 rounded-xl p-[4px] w-fit"
            >
              {condition}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-[8px]">
          {theme.stocks.map(stock => (
            <StockItem key={stock.id} stock={stock} />
          ))}
        </div>
      </div>
    </div>
  );
}
