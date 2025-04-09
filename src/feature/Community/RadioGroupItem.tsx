import { CommunityStock } from '@/types/community';
import styled from 'styled-components';

interface RadioGroupItemProps {
  stock: CommunityStock;
  selectedStockId: string;
  onStockSelect: (stockId: string) => void;
}

export default function RadioGroupItem({
  stock,
  selectedStockId,
  onStockSelect,
}: RadioGroupItemProps) {
  const { id, rank, name, change } = stock;

  return (
    <StockRadioItem key={id}>
      <StockInput
        type="radio"
        id={id}
        checked={selectedStockId === id}
        onChange={() => onStockSelect(id)}
      />
      <StockLabel htmlFor={id} isChecked={selectedStockId === id}>
        <StockItemContent>
          <StockRank>{rank}</StockRank>
          <StockInfo>
            <StockName>{name}</StockName>
            <StockChange isNegative={change < 0}>{change}%</StockChange>
          </StockInfo>
        </StockItemContent>
      </StockLabel>
    </StockRadioItem>
  );
}

const StockRadioItem = styled.div`
  position: relative;
`;

const StockInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const StockLabel = styled.label<{ isChecked: boolean }>`
  display: block;
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${({ isChecked }) =>
    isChecked ? 'rgba(217, 217, 255, 0.05)' : 'transparent'};

  &:hover {
    background-color: rgba(217, 217, 255, 0.05);
  }
`;

const StockItemContent = styled.div`
  display: flex;
  border-radius: 10px;
  height: 50px;
  position: relative;
  align-items: center;
  width: 100%;
`;

const StockRank = styled.span`
  color: #3485fa;
  font-size: 14px;
  min-width: 24px;
`;

const StockInfo = styled.div`
  display: flex;
  gap: 4px;
`;

const StockName = styled.span`
  color: #e4e4e5;
  font-size: 14px;
  white-space: nowrap;
  display: block;
  text-align: left;
`;

const StockChange = styled.span<{ isNegative: boolean }>`
  color: ${props => (props.isNegative ? '#ff4040' : '#31b404')};
  font-size: 14px;
`;
