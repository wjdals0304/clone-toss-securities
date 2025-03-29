import styled from 'styled-components';

export default function StockList() {
  const stockList = [
    {
      name: '테슬라',
      price: 100000,
      change: -7.2,
      volume: 8.9,
    },
    {
      name: '엔비디아',
      price: 100000,
      change: -7.2,
      volume: 8.9,
    },
    {
      name: '애플',
      price: 100000,
      change: -7.2,
      volume: 8.9,
    },
  ];

  return (
    <StockListContainer>
      <StockTable>
        <colgroup>
          <col style={{ width: '40%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
          <col style={{ width: '20%' }} />
        </colgroup>
        <StockTHead>
          <StockTr>
            <StockTh>종목</StockTh>
            <StockTh>현재가</StockTh>
            <StockTh>등락률</StockTh>
            <StockTh>거래대금 많은 순</StockTh>
          </StockTr>
        </StockTHead>
        <StockTBody>
          {stockList.map((stock, index) => (
            <StockTr key={index}>
              <StockTd>
                <StockNameContainer>
                  <StockHeartButton>❤️</StockHeartButton>
                  <StockNumberSpan>{index + 1}</StockNumberSpan>
                  <StockNameSpan>{stock.name}</StockNameSpan>
                </StockNameContainer>
              </StockTd>
              <StockTd>{stock.price.toLocaleString()}원</StockTd>
              <StockTd>{stock.change}%</StockTd>
              <StockTd>{stock.volume.toLocaleString()}억원</StockTd>
            </StockTr>
          ))}
        </StockTBody>
      </StockTable>
    </StockListContainer>
  );
}

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
  padding: 8px 16px;
  text-align: right;
  color: #e4e4e5;

  &:first-child {
    text-align: left;
    padding: 0 12px;
  }
`;

const StockTh = styled.th`
  padding: 8px 16px;
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
  padding: 0 4px;
`;

const StockHeartButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
`;

const StockNumberSpan = styled.span`
  min-width: 28px;
  margin: 0 8px;
  color: #e4e4e5;
`;

const StockNameSpan = styled.span`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  color: #e4e4e5;
`;
