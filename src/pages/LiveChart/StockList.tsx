import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { VolumeStock, VolumeCountStock } from '../../data/stockTypes';
import { STOCK_TAB, StockTabType } from '@/constants/stockConstants';
import StockListItem from './StockListItem';
interface StockListProps {
  selectedTab: string;
  selectedPeriod: string;
}

export default function StockList({
  selectedTab,
  selectedPeriod,
}: StockListProps) {
  const [stocks, setStocks] = useState<VolumeStock[] | VolumeCountStock[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch(
          `/api/stocks?tab=${selectedTab}&period=${selectedPeriod}`,
        );
        const data = await response.json();
        setStocks(data);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, [selectedTab, selectedPeriod]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  return (
    <StockListContainer>
      <StockTable>
        <colgroup>
          <StyledCol width="40%" />
          <StyledCol width="20%" />
          <StyledCol width="20%" />
          <StyledCol width="20%" />
        </colgroup>
        <StockTHead>
          <StockTr>
            <StockTh>종목</StockTh>
            <StockTh>현재가</StockTh>
            <StockTh>등락률</StockTh>
            <StockTh>
              {selectedTab === STOCK_TAB.VOLUME_COUNT
                ? '거래량 많은 순'
                : '거래대금 많은 순'}
            </StockTh>
          </StockTr>
        </StockTHead>
        <StockTBody>
          {stocks.map(stock => (
            <StockListItem
              key={stock.rank}
              stock={stock}
              selectedTab={selectedTab as StockTabType}
            />
          ))}
        </StockTBody>
      </StockTable>
    </StockListContainer>
  );
}

const StyledCol = styled.col`
  width: ${props => props.width};
`;

const StockListContainer = styled.div`
  overflow: hidden;
  padding: 8px 12px;
`;

const StockTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  background-color: #17171c;
`;

const StockTHead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const StockTBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const StockTr = styled.tr`
  height: 44px;
`;

const StockTh = styled.th`
  color: #9e9ea4;
  text-align: right;
  font-weight: normal;

  &:first-child {
    text-align: left;
  }
  &:last-child {
    color: #3485fa;
  }
`;
