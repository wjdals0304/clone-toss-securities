import styled from 'styled-components';

export default function HomeAside() {
  return (
    <HomeAsideContainer>
      <HomeAsideHeader>
        <HomeAsideHeaderTitle>실시간 차트</HomeAsideHeaderTitle>
      </HomeAsideHeader>
    </HomeAsideContainer>
  );
}

const HomeAsideContainer = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  right: 0;
  height: 100dvh;
  overflow: clip;
  z-index: 100001;

  flex-direction: column;
  padding: 16px;
  width: 314px;
  background-color: #101013;
  border-left: 1px solid var(--adaptiveGreyOpacity100);
`;

const HomeAsideHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0px;
  height: 27px;
`;

const HomeAsideHeaderTitle = styled.span`
  font-weight: var(--tds-wts-font-weight);
  font-size: var(--tds-wts-font-size);
  color: var(--tds-wts-foreground-color);
  line-height: var(--tds-wts-line-height);
`;
