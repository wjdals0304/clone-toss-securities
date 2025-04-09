import { CommunityStock } from '@/types/community';
import styled from 'styled-components';
import RadioGroupItem from './RadioGroupItem';
interface StockRadioGroupProps {
  stocks: CommunityStock[];
  selectedStockId: string;
  onStockSelect: (stockId: string) => void;
}

export default function ExportStockRadioGroup({
  stocks,
  selectedStockId,
  onStockSelect,
}: StockRadioGroupProps) {
  return (
    <StockRadioGroup>
      {stocks.map(stock => (
        <RadioGroupItem
          key={stock.id}
          stock={stock}
          selectedStockId={selectedStockId}
          onStockSelect={onStockSelect}
        />
      ))}
    </StockRadioGroup>
  );
}

const StockRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;
