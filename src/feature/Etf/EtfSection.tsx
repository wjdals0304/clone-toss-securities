import styled from 'styled-components';
import EtfContent from './EtfContent';
import { useEtfQuery } from '@/hooks/useEtfQuery';

export default function EtfSection() {
  const { data: sections, error } = useEtfQuery();

  if (error) {
    return <ErrorWrapper>{error.message}</ErrorWrapper>;
  }

  if (!sections) {
    return null;
  }

  return (
    <EtfContainer>
      <EtfSectionTitle>해외 ETF 모아보기</EtfSectionTitle>
      <EtfSectionWrapper>
        {sections.map(section => (
          <EtfContent
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}
      </EtfSectionWrapper>
    </EtfContainer>
  );
}

const EtfContainer = styled.div`
  padding: 8px;
`;

const EtfSectionTitle = styled.div`
  font-size: 17px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 16px;
`;

const EtfSectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: #c3c3c6;
`;

const ErrorWrapper = styled(LoadingWrapper)`
  color: #f04251;
`;
