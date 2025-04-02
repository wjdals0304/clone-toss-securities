import styled from 'styled-components';
import { useState } from 'react';
import StockList from './StockList';
import DateFilter from './DateFilter';
import {
  STOCK_TAB,
  STOCK_PERIOD,
  type StockTabType,
  type StockPeriodType,
} from '@/constants/stockConstants';

interface LiveChartTab {
  name: string;
  value: StockTabType;
}

const LiveChartTabList: LiveChartTab[] = [
  { name: '토스증권 거래대금', value: STOCK_TAB.VOLUME },
  { name: '토스증권 거래량', value: STOCK_TAB.VOLUME_COUNT },
];

export default function LiveChartSection() {
  const [selectedTab, setSelectedTab] = useState<StockTabType>(
    STOCK_TAB.VOLUME,
  );
  const [selectedPeriod, setSelectedPeriod] = useState<StockPeriodType>(
    STOCK_PERIOD.REALTIME,
  );

  const handleTabClick = (tab: StockTabType) => {
    setSelectedTab(tab);
  };

  const handlePeriodChange = (period: StockPeriodType) => {
    setSelectedPeriod(period);
  };

  return (
    <LiveChartSectionContainer>
      <LiveChartHeader>
        <LiveChartHeaderTitleContainer>
          <LiveChartHeaderTitle>실시간 차트</LiveChartHeaderTitle>
        </LiveChartHeaderTitleContainer>
        <LiveChartTabListContainer>
          {LiveChartTabList.map(tab => (
            <LiveChartTabListSpan
              key={tab.value}
              $isSelected={selectedTab === tab.value}
              onClick={() => handleTabClick(tab.value)}
            >
              {tab.name}
            </LiveChartTabListSpan>
          ))}
        </LiveChartTabListContainer>
        <LiveChartActiveLine $isSelected={selectedTab === STOCK_TAB.VOLUME} />
        <DateFilter onPeriodChange={handlePeriodChange} />
      </LiveChartHeader>
      <StockList selectedTab={selectedTab} selectedPeriod={selectedPeriod} />
    </LiveChartSectionContainer>
  );
}

const LiveChartHeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const LiveChartHeaderTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #e4e4e5;
`;

const LiveChartSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const LiveChartHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const LiveChartTabListContainer = styled.div`
  display: flex;
  gap: 24px;
  border-bottom: 1px solid #333d4b;
`;

const LiveChartTabListSpan = styled.span<{ $isSelected: boolean }>`
  font-size: 16px;
  font-weight: ${({ $isSelected }) => ($isSelected ? '600' : '400')};
  color: ${({ $isSelected }) => ($isSelected ? '#e4e4e5' : '#c3c3c3')};
  cursor: pointer;
  padding: 8px 0;
  position: relative;
`;

const LiveChartActiveLine = styled.div<{ $isSelected: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? '#3485fa' : 'transparent'};
`;
