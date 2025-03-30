import styled from 'styled-components';
import CategorySection from './CategorySection';

export default function Category() {
  const domesticItem = [
    {
      image: 'https://via.placeholder.com/150',
      category: '국내',
      title: '비료와 농약',
      change: 3.1,
      desc: '14개 중 6개 종목 상승',
      stockList: [
        {
          stock: '효성오엔비',
          stockChange: 7.1,
        },
        {
          stock: '효성오엔비',
          stockChange: 1.1,
        },
      ],
    },
    {
      image: 'https://via.placeholder.com/150',
      category: '국내',
      title: '농업',
      change: 1.7,
      desc: '14개 중 6개 종목 상승',
      stockList: [
        {
          stock: '효성오엔비',
          stockChange: 17,
        },
        {
          stock: '효성오엔비',
          stockChange: 7,
        },
      ],
    },
  ];
  const overseasItem = [
    {
      image: 'https://via.placeholder.com/150',
      category: '해외',
      title: '비료와 농약',
      change: 3.1,
      desc: '14개 중 6개 종목 상승',
      stockList: [
        {
          stock: '효성오엔비',
          stockChange: 7.1,
        },
        {
          stock: '효성오엔비',
          stockChange: 1.1,
        },
      ],
    },
    {
      image: 'https://via.placeholder.com/150',
      category: '해외',
      title: '농업',
      change: 1.7,
      desc: '14개 중 6개 종목 상승',
      stockList: [
        {
          stock: '효성오엔비',
          stockChange: 17,
        },
        {
          stock: '효성오엔비',
          stockChange: 7,
        },
      ],
    },
  ];
  return (
    <CategoryContainer>
      <CategoryTitleContainer>
        <CategoryTitle>지금 뜨는 카테고리</CategoryTitle>
      </CategoryTitleContainer>
      <CategoryContentContainer>
        <CategorySection title="국내" items={domesticItem} />
        <CategorySection title="해외" items={overseasItem} />
      </CategoryContentContainer>
    </CategoryContainer>
  );
}

const CategoryContainer = styled.div``;

const CategoryTitleContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CategoryTitle = styled.h2`
  font-size: 20px;
  line-height: 1.45;
  color: #e4e4e5;
  font-weight: bold;
`;

const CategoryContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;
