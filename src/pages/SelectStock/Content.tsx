import { StockTheme } from './type';
import StockItem from './StockItem';

interface ContentProps {
  theme: StockTheme;
}

export default function Content({ theme }: ContentProps) {
  return (
    <div className="flex gap-[5px] rounded-[20px] p-[8px] bg-hoverHighlight/5 w-[280px] h-[352px]">
      <div className="flex flex-col p-[8px] w-full">
        <div className="flex items-start gap-[8px] flex-col mb-[8px]">
          <span className="text-[15px] text-white">{theme.title}</span>
          <span className="text-[13px] text-gray">{theme.description}</span>
        </div>
        <div className="flex flex-col gap-[5px] mb-[30px]">
          {theme.conditions.map((condition, index) => (
            <span
              key={index}
              className="text-[13px] text-brightWhite bg-hoverHighlight/5 rounded-xl p-[4px] w-fit"
            >
              {condition}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-[12px]">
          {theme.stocks.map(stock => (
            <StockItem key={stock.id} stock={stock} />
          ))}
        </div>
      </div>
    </div>
  );
}
