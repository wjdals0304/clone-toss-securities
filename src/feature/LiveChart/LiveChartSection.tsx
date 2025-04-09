import {
  STOCK_PERIOD,
  STOCK_TAB,
  type StockPeriodType,
  type StockTabType,
} from '@/constants/stockConstants';
import { useStocks } from '@/hooks/useStocks';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import ChartHeader from './ChartHeader';
import StockCountTable from './StockCountTable';
import StockVolumeTable from './StockVolumeTable';

const TABLE_CONFIG = {
  [STOCK_TAB.VOLUME]: {
    component: StockVolumeTable,
    fields: ['종목', '현재가', '등락률', '거래대금 많은순'],
  },
  [STOCK_TAB.VOLUME_COUNT]: {
    component: StockCountTable,
    fields: ['종목', '현재가', '등락률', '거래량 많은순'],
  },
};

export default function LiveChartSection() {
  const router = useRouter();
  const tabFromUrl = router.query.tab as StockTabType;
  const selectedTab = Object.values(STOCK_TAB).includes(tabFromUrl)
    ? tabFromUrl
    : STOCK_TAB.VOLUME;
  const [selectedPeriod, setSelectedPeriod] = useState<StockPeriodType>(
    STOCK_PERIOD.REALTIME,
  );

  const handleTabChange = (tab: StockTabType) => {
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
  const currentTable = TABLE_CONFIG[selectedTab];
  const TableComponent = currentTable.component;

  return (
    <LiveChartSectionContainer>
      <ChartHeader
        selectedTab={selectedTab}
        selectedPeriod={selectedPeriod}
        onTabChange={handleTabChange}
        onPeriodChange={handlePeriodChange}
      />
      <TableComponent fields={currentTable.fields} data={data} />
    </LiveChartSectionContainer>
  );
}

const LiveChartSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 662px;
`;
