import { STOCK_TAB, StockTabType } from '@/constants/stockConstants';
import { VolumeStock, VolumeCountStock } from '@/data/stockTypes';
import styled from 'styled-components';

export default function StockListItem({
  stock,
  selectedTab,
}: {
  stock: VolumeStock | VolumeCountStock;
  selectedTab: StockTabType;
}) {
  const { rank, name, price, change } = stock;
  return (
    <StockTr key={rank}>
      <StockTd>
        <StockNameContainer>
          <StockNumberSpan>{rank}</StockNumberSpan>
          <StockNameSpan>{name}</StockNameSpan>
        </StockNameContainer>
      </StockTd>
      <StockTd>{price.toLocaleString()}원</StockTd>
      <StockTd
        className={stock.change >= 0 ? 'text-stockUp' : 'text-stockDown'}
      >
        {change >= 0 ? '+' : ''}
        {change}%
      </StockTd>
      <StockTd>
        {selectedTab === STOCK_TAB.VOLUME_COUNT
          ? STOCK_TAB.VOLUME_COUNT in stock &&
            `${stock.volume_count.toLocaleString()}주`
          : STOCK_TAB.VOLUME in stock && `${stock.volume.toLocaleString()}억원`}
      </StockTd>
    </StockTr>
  );
}

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

const StockTd = styled.td`
  text-align: right;
  color: #e4e4e5;
  vertical-align: middle;
  padding: 8px 16px;

  &:first-child {
    text-align: left;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }

  &:last-child {
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  tr:nth-child(odd) & {
    background-color: rgba(58, 58, 60, 0.1);
  }

  tr:hover & {
    background-color: rgba(60, 60, 60, 1) !important;
  }
`;

const StockTr = styled.tr`
  height: 44px;
`;
