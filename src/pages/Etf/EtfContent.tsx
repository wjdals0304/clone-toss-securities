import styled from 'styled-components';

interface Stock {
  lank: number;
  name: string;
  desc: string;
  price: number;
  logo: string;
  change: number;
}

interface EtfContentProps {
  title: string;
  stockList: Stock[];
}

const formatChange = (change: number) => `${change > 0 ? '+' : ''}${change}%`;

export default function EtfContent({ title, stockList }: EtfContentProps) {
  return (
    <EtfEntireWrapper>
      <EtfTitleSpan>{title}</EtfTitleSpan>
      <EtfContentContainer>
        {stockList.map(stock => (
          <EtfContentWrapper key={stock.name}>
            <StockLogoContainer>
              <StockLankSpan>{stock.lank}</StockLankSpan>
              <StockLogoImage src={stock.logo} />
            </StockLogoContainer>
            <StockItemContainer>
              <StockContentContainer>
                <StockNameSpan>{stock.name}</StockNameSpan>
                <StockNameDesc>{stock.desc}</StockNameDesc>
              </StockContentContainer>
              <StockPriceContainer>
                <StockPriceSpan>{stock.price}</StockPriceSpan>
                <StockChangeSpan isUp={stock.change > 0}>
                  {formatChange(stock.change)}
                </StockChangeSpan>
              </StockPriceContainer>
            </StockItemContainer>
          </EtfContentWrapper>
        ))}
      </EtfContentContainer>
    </EtfEntireWrapper>
  );
}

const EtfEntireWrapper = styled.div`
  flex: 1 1 auto;
  padding: 8px;
`;

const EtfTitleSpan = styled.span`
  font-size: 17px;
  color: #e4e4e5;
  font-weight: bold;
`;

const EtfContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 40px;
`;

const EtfContentContainer = styled.div`
  margin-top: 4px;
  display: flex;
  flex-direction: column;
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
