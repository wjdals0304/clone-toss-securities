import styled from 'styled-components';
import { EtfItem } from '@/types/etf';
import ContentItem from './ContentItem';

interface EtfContentProps {
  title: string;
  items: EtfItem[];
}

export default function EtfContent({ title, items }: EtfContentProps) {
  return (
    <EtfEntireWrapper>
      <EtfTitleSpan>{title}</EtfTitleSpan>
      <EtfContentContainer>
        {items.map((item, index) => (
          <ContentItem key={item.id} item={item} index={index} />
        ))}
      </EtfContentContainer>
    </EtfEntireWrapper>
  );
}

const EtfEntireWrapper = styled.div`
  flex: 1;
  width: 50%;
`;

const EtfTitleSpan = styled.span`
  font-size: 17px;
  color: #e4e4e5;
  font-weight: bold;
  margin-bottom: 16px;
`;

const EtfContentContainer = styled.div`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
`;
