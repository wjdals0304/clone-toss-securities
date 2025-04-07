import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import StockVolumeTable from './StockVolumeTable';
import StockCountTable from './StockCountTable';
import DateFilter from './DateFilter';
import {
  STOCK_TAB,
  STOCK_PERIOD,
  type StockTabType,
  type StockPeriodType,
} from '@/constants/stockConstants';
import LiveChartTab from './LiveChartTab';
import { useStocks } from '@/hooks/useStocks';

interface LiveChartTab {
  name: string;
  value: StockTabType;
}

const LiveChartTabList: LiveChartTab[] = [
  { name: '토스증권 거래대금', value: STOCK_TAB.VOLUME },
  { name: '토스증권 거래량', value: STOCK_TAB.VOLUME_COUNT },
];

export default function LiveChartSection() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<StockTabType>(() => {
    return (router.query.tab as StockTabType) || STOCK_TAB.VOLUME;
  });
  const [selectedPeriod, setSelectedPeriod] = useState<StockPeriodType>(
    STOCK_PERIOD.REALTIME,
  );

  useEffect(() => {
    const tabFromUrl = router.query.tab as StockTabType;
    if (tabFromUrl && Object.values(STOCK_TAB).includes(tabFromUrl)) {
      setSelectedTab(tabFromUrl);
    }
  }, [router.query.tab]);

  const handleTabClick = (tab: StockTabType) => {
    setSelectedTab(tab);
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, tab },
      },
      undefined,
      { shallow: true },
    );
  };

  const handlePeriodChange = (period: StockPeriodType) => {
    setSelectedPeriod(period);
  };

  const { data = [] } = useStocks(selectedTab, selectedPeriod);
  const volumeFields = ['종목', '현재가', '등락률', '거래대금 많은순'];
  const countFields = ['종목', '현재가', '등락률', '거래량 많은순'];

  return (
    <LiveChartSectionContainer>
      <LiveChartHeader>
        <LiveChartHeaderTitleContainer>
          <LiveChartHeaderTitle>실시간 차트</LiveChartHeaderTitle>
        </LiveChartHeaderTitleContainer>
        <LiveChartTabListContainer>
          {LiveChartTabList.map(tab => {
            const { value } = tab;
            return (
              <LiveChartTab
                key={value}
                tab={tab}
                selectedTab={selectedTab}
                handleTabClick={handleTabClick}
              />
            );
          })}
        </LiveChartTabListContainer>
        <DateFilter
          selectedPeriod={selectedPeriod}
          handlePeriodChange={handlePeriodChange}
        />
      </LiveChartHeader>
      {selectedTab === STOCK_TAB.VOLUME ? (
        <StockVolumeTable fields={volumeFields} data={data} />
      ) : (
        <StockCountTable fields={countFields} data={data} />
      )}
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
  min-height: 662px;
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
