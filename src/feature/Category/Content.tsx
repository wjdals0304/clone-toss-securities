import styled from 'styled-components';
import { CategoryItem } from './CategoryItem';

export interface CategorySectionProps {
  title?: string;
  items: CategoryItem[];
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
