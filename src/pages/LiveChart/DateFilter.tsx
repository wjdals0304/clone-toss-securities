import styled from 'styled-components';
import { STOCK_PERIOD, type StockPeriodType } from '@/constants/stockConstants';

interface DateFilterProps {
  selectedPeriod: StockPeriodType;
  handlePeriodChange: (period: StockPeriodType) => void;
}

const DateFilterList = [
  { name: '실시간', value: STOCK_PERIOD.REALTIME },
  { name: '1주일', value: STOCK_PERIOD.WEEK },
];

export default function DateFilter({
  selectedPeriod,
  handlePeriodChange,
}: DateFilterProps) {
  return (
    <DateFilterContainer>
      {DateFilterList.map(item => {
        const { name, value } = item;
        return (
          <DateFilterButton
            key={value}
            onClick={() => handlePeriodChange(value)}
            $isSelected={selectedPeriod === value}
          >
            {name}
          </DateFilterButton>
        );
      })}
    </DateFilterContainer>
  );
}

const DateFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 4px;
  gap: 4px;
`;

const DateFilterButton = styled.button<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? '#3A3A3C' : 'transparent'};
  color: ${({ $isSelected }) => ($isSelected ? '#FFFFFF' : '#8E8E93')};
  height: 32px;
  padding: 0 12px;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? '#3A3A3C' : '#3A3A3C80'};
  }
`;
