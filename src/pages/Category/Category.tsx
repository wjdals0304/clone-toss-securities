import styled from 'styled-components';
import CategorySection from './CategorySection';
import { useCategories } from '@/hooks/useCategories';

export default function Category() {
  const { data } = useCategories();

  if (!data) {
    return <div>데이터를 불러올 수 없습니다.</div>;
  }

  return (
    <div>
      <CategoryTitleContainer>
        <CategoryTitle>지금 뜨는 카테고리</CategoryTitle>
      </CategoryTitleContainer>
      <CategoryContentContainer>
        <CategorySection title="국내" items={data.domestic} />
        <CategorySection title="해외" items={data.overseas} />
      </CategoryContentContainer>
    </div>
  );
}

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
