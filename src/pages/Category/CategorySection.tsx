import styled from 'styled-components';
import { CategorySectionProps } from './Content';
import Content from './Content';

export default function CategorySection({
  title,
  items,
}: CategorySectionProps) {
  return (
    <SectionContainer>
      <SectionTitleContainer>
        <SectionTitle>{title}</SectionTitle>
      </SectionTitleContainer>
      <Content items={items} />
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
  color: #e4e4e5;
  font-weight: bold;
`;