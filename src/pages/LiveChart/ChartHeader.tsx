import {
  STOCK_TAB,
  StockPeriodType,
  StockTabType,
} from '@/constants/stockConstants';
import styled from 'styled-components';
import LiveChartTab from './LiveChartTab';
import DateFilter from './DateFilter';

interface ChartHeaderProps {
  selectedTab: StockTabType;
  selectedPeriod: StockPeriodType;
  onTabChange: (tab: StockTabType) => void;
  onPeriodChange: (period: StockPeriodType) => void;
}

const CHART_TABS = [
  { name: '토스증권 거래대금', value: STOCK_TAB.VOLUME },
  { name: '토스증권 거래량', value: STOCK_TAB.VOLUME_COUNT },
] as const;

export default function ChartHeader({
  selectedTab,
  selectedPeriod,
  onTabChange,
  onPeriodChange,
}: ChartHeaderProps) {
  return (
    <LiveChartHeader>
      <LiveChartHeaderTitleContainer>
        <LiveChartHeaderTitle>실시간 차트</LiveChartHeaderTitle>
      </LiveChartHeaderTitleContainer>
      <LiveChartTabListContainer>
        {CHART_TABS.map(tab => (
          <LiveChartTab
            key={tab.value}
            tab={tab}
            selectedTab={selectedTab}
            handleTabClick={onTabChange}
          />
        ))}
      </LiveChartTabListContainer>
      <DateFilter
        selectedPeriod={selectedPeriod}
        handlePeriodChange={onPeriodChange}
      />
    </LiveChartHeader>
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
