import { StockTabType } from '@/constants/stockConstants';
import styled from 'styled-components';

interface LiveChartTab {
  name: string;
  value: StockTabType;
}

export default function LiveChartTab({
  tab,
  selectedTab,
  handleTabClick,
}: {
  tab: LiveChartTab;
  selectedTab: StockTabType;
  handleTabClick: (tab: StockTabType) => void;
}) {
  const { name, value } = tab;
  return (
    <LiveChartTabButton
      key={value}
      $isSelected={selectedTab === value}
      onClick={() => handleTabClick(value)}
    >
      {name}
      {selectedTab === value && <LiveChartActiveLine />}
    </LiveChartTabButton>
  );
}

const LiveChartTabButton = styled.button<{ $isSelected: boolean }>`
  font-size: 16px;
  font-weight: ${({ $isSelected }) => ($isSelected ? '600' : '400')};
  color: ${({ $isSelected }) => ($isSelected ? '#e4e4e5' : '#c3c3c3')};
  cursor: pointer;
  padding: 8px 0;
  position: relative;
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LiveChartActiveLine = styled.div`
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #e4e4e5;
`;
