import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { VolumeStock, VolumeCountStock } from '../../data/stockTypes';
import { STOCK_TAB } from '@/constants/stockConstants';

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
            <StockTr key={stock.rank}>
              <StockTd>
                <StockNameContainer>
                  <StockNumberSpan>{stock.rank}</StockNumberSpan>
                  <StockNameSpan>{stock.name}</StockNameSpan>
                </StockNameContainer>
              </StockTd>
              <StockTd>{stock.price.toLocaleString()}원</StockTd>
              <StockTd
                className={
                  stock.change >= 0 ? 'text-stockUp' : 'text-stockDown'
                }
              >
                {stock.change >= 0 ? '+' : ''}
                {stock.change}%
              </StockTd>
              <StockTd>
                {selectedTab === 'volume_count'
                  ? `${stock.volume_count?.toLocaleString()}주`
                  : `${stock.volume?.toLocaleString()}억원`}
              </StockTd>
            </StockTr>
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
  padding: 8px 0;
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
  unicode-bidi: isolate;
  border-color: inherit;
`;

const StockTr = styled.tr`
  height: 44px;
`;

const StockTd = styled.td`
  text-align: right;
  color: #e4e4e5;

  &:first-child {
    text-align: left;
  }
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

const StockNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StockNumberSpan = styled.span`
  min-width: 28px;
  margin-right: 8px;
  color: #e4e4e5;
`;

const StockNameSpan = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  color: #e4e4e5;
`;
