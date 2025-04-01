import styled, { css } from 'styled-components';
import Image from 'next/image';

const stockList = [
  {
    name: '리투스 테크놀로지스',
    change: -16.7,
    logo: '',
    rank: 1,
  },
  {
    name: '애플',
    change: -5.2,
    logo: '',
    rank: 2,
  },
  {
    name: '네오위즈홀딩스',
    change: -4.9,
    logo: '',
    rank: 3,
  },
];

export default function ExportStockRadioGroup() {
  return (
    <StockRadioGroup>
      {stockList.map(stock => (
        <StockRadioItem key={stock.name}>
          <StockInput
            type="radio"
            id={stock.name}
            name="home-hot-communities"
            defaultChecked
            isChecked={stock.rank === 1}
          />
          <StockLabel htmlFor={stock.name}>
            <StockItemContent>
              <StockRank>{stock.rank}</StockRank>
              <StockLogo>
                <Image src={stock.logo} alt="logo" width={32} height={32} />
              </StockLogo>
              <StockInfo>
                <StockName>{stock.name}</StockName>
                <StockChange isNegative={stock.change < 0}>
                  {stock.change}%
                </StockChange>
              </StockInfo>
            </StockItemContent>
          </StockLabel>
        </StockRadioItem>
      ))}
    </StockRadioGroup>
  );
}

const StockRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StockRadioItem = styled.div`
  position: relative;
`;

const StockInput = styled.input<{ isChecked: boolean }>`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

  ${({ isChecked }) =>
    isChecked &&
    css`
      background-color: rgba(217, 217, 255, 0.05);
    `}
`;

const StockLabel = styled.label`
  display: block;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: rgba(217, 217, 255, 0.05);
  }
`;

const StockItemContent = styled.div`
  display: flex;
  border-radius: 10px;
  height: 50px;
  position: relative;
  align-items: center;
  width: 100%;
`;

const StockRank = styled.span`
  color: #3485fa;
  font-size: 14px;
  min-width: 24px;
`;

const StockLogo = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
`;

const StockInfo = styled.div`
  display: flex;
  gap: 4px;
`;

const StockName = styled.span`
  color: #e4e4e5;
  font-size: 14px;
  white-space: nowrap;
  display: block;
  text-align: left;
`;

const StockChange = styled.span<{ isNegative: boolean }>`
  color: ${props => (props.isNegative ? '#ff4040' : '#31b404')};
  font-size: 14px;
`;
