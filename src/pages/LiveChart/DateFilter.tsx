import styled from 'styled-components';
import { useState } from 'react';
import { STOCK_PERIOD, type StockPeriodType } from '@/constants/stockConstants';

interface DateFilterProps {
  onPeriodChange: (period: StockPeriodType) => void;
}

const DateFilterList = [
  { name: '실시간', value: STOCK_PERIOD.REALTIME },
  { name: '1주일', value: STOCK_PERIOD.WEEK },
];

export default function DateFilter({ onPeriodChange }: DateFilterProps) {
  const [selectedPeriod, setSelectedPeriod] = useState<StockPeriodType>(
    STOCK_PERIOD.REALTIME,
  );

  const handlePeriodClick = (value: StockPeriodType) => {
    setSelectedPeriod(value);
    onPeriodChange(value);
  };

  return (
    <DateFilterContainer>
      {DateFilterList.map(item => (
        <DateFilterItem
          key={item.value}
          onClick={() => handlePeriodClick(item.value)}
          $isSelected={selectedPeriod === item.value}
        >
          {item.name}
        </DateFilterItem>
      ))}
    </DateFilterContainer>
  );
}

const DateFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px 0 2px;
  gap: 20px;
`;

const DateFilterItem = styled.button<{ $isSelected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  background-color: transparent;
  color: ${({ $isSelected }) => ($isSelected ? '#e4e4e5' : '#c3c3c3')};
  height: 32px;
`;
