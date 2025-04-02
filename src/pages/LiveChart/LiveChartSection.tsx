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
import LiveChartTab from './LiveChartTab';
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
            <LiveChartTab
              key={tab.value}
              tab={tab}
              selectedTab={selectedTab}
              handleTabClick={handleTabClick}
            />
          ))}
        </LiveChartTabListContainer>
        <DateFilter
          selectedPeriod={selectedPeriod}
          onPeriodChange={handlePeriodChange}
        />
      </LiveChartHeader>
      <StockList selectedTab={selectedTab} selectedPeriod={selectedPeriod} />
    </LiveChartSectionContainer>
  );
}

const LiveChartHeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
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
  margin-bottom: 16px;
`;
