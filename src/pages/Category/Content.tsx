import styled from 'styled-components';

interface Stock {
  stock: string;
  stockChange: number;
}

interface CategoryItem {
  image: string;
  title: string;
  change: number;
  desc: string;
  stockList: Stock[];
}

export interface CategorySectionProps {
  title?: string;
  items: CategoryItem[];
}

const formatChange = (change: number) => `${change > 0 ? '+' : ''}${change}%`;

function ChangeRate({ value }: { value: number }) {
  return (
    <SectionStockChangeSpan isUp={value > 0}>
      {formatChange(value)}
    </SectionStockChangeSpan>
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

function CategoryItem({ item }: { item: CategoryItem }) {
  return (
    <SectionItemContainer>
      <SectionItemImage src={item.image} width={80} height={80} />
      <div>
        <SectionItemTitleContainer>
          <SectionItemTitle>{item.title}</SectionItemTitle>
          <ChangeRate value={item.change} />
        </SectionItemTitleContainer>
        <SectionChangeDescSpan>{item.desc}</SectionChangeDescSpan>
      </div>
      <SectionStockContainer>
        {item.stockList.map(stock => (
          <StockItem key={stock.stock} {...stock} />
        ))}
      </SectionStockContainer>
    </SectionItemContainer>
  );
}

export default function Content({ items }: CategorySectionProps) {
  return (
    <SectionContentContainer>
      {items.map(item => (
        <CategoryItem key={item.title} item={item} />
      ))}
    </SectionContentContainer>
  );
}

const SectionContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SectionItemContainer = styled.div`
  flex: 0 0 calc(50% - 4px);
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px;
  position: relative;
`;

const SectionItemImage = styled.img`
  width: 100%;
  height: 96px;
  object-fit: cover;
  border-radius: 8px;
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
