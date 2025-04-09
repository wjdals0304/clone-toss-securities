import { EtfItem } from '@/types/etf';
import styled from 'styled-components';

const formatChange = (change: number) => `${change > 0 ? '+' : ''}${change}%`;
const formatPrice = (price: number) => price.toLocaleString('ko-KR') + '원';

export default function ContentItem({
  item,
  index,
}: {
  item: EtfItem;
  index: number;
}) {
  const { id, name, ticker, price, priceChange } = item;
  return (
    <EtfContentWrapper key={id}>
      <StockLogoContainer>
        <StockLankSpan>{index + 1}</StockLankSpan>
      </StockLogoContainer>
      <StockItemContainer>
        <StockContentContainer>
          <StockNameSpan>{name}</StockNameSpan>
          <StockNameDesc>{ticker}</StockNameDesc>
        </StockContentContainer>
        <StockPriceContainer>
          <StockPriceSpan>{formatPrice(price)}</StockPriceSpan>
          <StockChangeSpan isUp={priceChange > 0}>
            {formatChange(priceChange)}
          </StockChangeSpan>
        </StockPriceContainer>
      </StockItemContainer>
    </EtfContentWrapper>
  );
}

const EtfContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 40px;
`;

const StockLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
`;

const StockLankSpan = styled.span`
  font-size: 15px;
  color: #3485fa;
  font-weight: bold;
`;

const StockLogoImage = styled.img`
  width: 34px;
  height: 34px;
`;

const StockItemContainer = styled.div`
  display: flex;
  min-height: 40px;
  padding: 2px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-left: 16px;
`;

const StockContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  margin-right: 16px;
`;

const StockNameSpan = styled.span`
  font-size: 15px;
  color: #c3c3c6;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StockNameDesc = styled.span`
  font-size: 14px;
  color: #9e9ea4;
  font-weight: 500;
`;

const StockPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
  flex: 0 0 auto;
`;

const StockChangeSpan = styled.span<{ isUp: boolean }>`
  font-size: 14px;
  color: ${({ isUp }) => (isUp ? '#f04251' : '#3485fa')};
  font-weight: bold;
`;

const StockPriceSpan = styled.span`
  font-size: 14px;
  color: #c3c3c6;
  font-weight: 500;
`;

const CategoryBadge = styled.div<{ category: string; multiplier?: string }>`
  display: ${props => (props.multiplier ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  font-size: 12px;
  font-weight: bold;
  color: white;
  background-color: ${props => {
    switch (props.category) {
      case 'leverage':
        return '#f04251';
      case 'inverse':
        return '#3485fa';
      default:
        return '#9e9ea4';
    }
  }};
`;
