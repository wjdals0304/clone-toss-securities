import styled from 'styled-components';

interface Stock {
  stock: string;
  stockChange: number;
}

export interface CategoryItem {
  image: string;
  title: string;
  change: number;
  desc: string;
  stockList: Stock[];
  rank: number;
  backgroundColor: string;
}

export function CategoryItem({ item }: { item: CategoryItem }) {
  const { image, title, change, desc, stockList, rank, backgroundColor } = item;
  return (
    <SectionItemContainer>
      <SectionImageDiv backgroundColor={backgroundColor}>
        <SectionItemImageRank>{rank}위</SectionItemImageRank>
        <SectionItemImage src={image} width={80} height={80} />
      </SectionImageDiv>
      <SectionItemContentContainer>
        <div>
          <SectionItemTitleContainer>
            <SectionItemTitle>{title}</SectionItemTitle>
            <ChangeRate value={change} />
          </SectionItemTitleContainer>
          <SectionChangeDescSpan>{desc}</SectionChangeDescSpan>
        </div>
        <SectionStockContainer>
          {stockList.map(stock => (
            <StockItem key={stock.stock} {...stock} />
          ))}
        </SectionStockContainer>
      </SectionItemContentContainer>
    </SectionItemContainer>
  );
}

function StockItem({ stock, stockChange }: Stock) {
  return (
    <SectionStockDiv>
      <SectionStockItem>{stock}</SectionStockItem>
      <ChangeRate value={stockChange} />
    </SectionStockDiv>
  );
}

const formatChange = (change: number) => `${change > 0 ? '+' : ''}${change}%`;

function ChangeRate({ value }: { value: number }) {
  return (
    <SectionStockChangeSpan isUp={value > 0}>
      {formatChange(value)}
    </SectionStockChangeSpan>
  );
}

const SectionImageDiv = styled.div<{ backgroundColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  position: relative;
  height: 96px;
  margin: 0 8px;
  background-color: ${props => props.backgroundColor};
`;

const SectionItemContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 8px;
`;

const SectionItemImageRank = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  font-weight: bold;
  font-size: 15px;
  color: rgba(248, 248, 255, 0.6);
`;

const SectionItemContainer = styled.div`
  flex: 0 0 calc(50% - 4px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 4px;
  position: relative;
`;

const SectionItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  overflow-clip-margin: content-box;
  overflow: clip;
`;

const SectionItemTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SectionItemTitle = styled.span`
  font-size: 17px;
  color: #e4e4e5;
  font-weight: bold;
`;

const SectionChangeDescSpan = styled.span`
  font-size: 14px;
  line-height: 1.45;
  color: #9e9ea4;
  font-weight: bold;
`;

const SectionStockContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SectionStockDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SectionStockItem = styled.span`
  font-size: 14px;
  color: #9e9ea4;
  font-weight: bold;
`;

const SectionStockChangeSpan = styled.span<{ isUp: boolean }>`
  font-size: 14px;
  color: ${props => (props.isUp ? '#f04251' : '#3485fa')};
  font-weight: bold;
`;
