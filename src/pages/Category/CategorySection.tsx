import styled from 'styled-components';

interface CategorySectionProps {
  title: string;
  items: {
    image: string;
    title: string;
    change: number;
    desc: string;
    stockList: {
      stock: string;
      stockChange: number;
    }[];
  }[];
}

export default function CategorySection({
  title,
  items,
}: CategorySectionProps) {
  return (
    <SectionContainer>
      <SectionTitleContainer>
        <SectionTitle>{title}</SectionTitle>
      </SectionTitleContainer>
      <SectionContentContainer>
        {items.map(item => (
          <SectionItemContainer key={item.title}>
            <SectionItemImage src={item.image} width={80} height={80} />
            <div>
              <SectionItemTitleContainer>
                <SectionItemTitle>{item.title}</SectionItemTitle>
                <SectionItemChangeSpan isUp={Number(item.change) > 0}>
                  {item.change > 0 ? '+' : ''}
                  {item.change}%
                </SectionItemChangeSpan>
              </SectionItemTitleContainer>
              <SectionChangeDescSpan>{item.desc}</SectionChangeDescSpan>
            </div>
            <SectionStockContainer>
              {item.stockList.map(stock => (
                <SectionStockDiv key={stock.stock}>
                  <SectionStockItem>{stock.stock}</SectionStockItem>
                  <SectionStockChangeSpan isUp={stock.stockChange > 0}>
                    {stock.stockChange > 0 ? '+' : ''}
                    {stock.stockChange}%
                  </SectionStockChangeSpan>
                </SectionStockDiv>
              ))}
            </SectionStockContainer>
          </SectionItemContainer>
        ))}
      </SectionContentContainer>
    </SectionContainer>
  );
}

const SectionContainer = styled.div`
  flex: 1;
`;

const SectionTitleContainer = styled.div`
  display: flex;
  padding: 8px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  line-height: 1.45;
  color: #e4e4e5;
  font-weight: bold;
`;

const SectionContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SectionItemContainer = styled.div`
  width: calc(50% - 4px);
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
  line-height: 1.45;
  color: #e4e4e5;
  font-weight: bold;
`;

const SectionItemChangeSpan = styled.span<{ isUp: boolean }>`
  font-size: 12px;
  line-height: 1.45;
  color: ${props => (props.isUp ? '#f04251' : '#3485fa')};
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
  line-height: 1.45;
  color: #9e9ea4;
  font-weight: bold;
`;

const SectionStockChangeSpan = styled.span<{ isUp: boolean }>`
  font-size: 14px;
  line-height: 1.45;
  color: ${props => (props.isUp ? '#f04251' : '#3485fa')};
  font-weight: bold;
`;
