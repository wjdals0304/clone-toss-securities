import styled from 'styled-components';

export default function HomeTab() {
  return (
    <HomeTabContainer>
      <HomeTabItem>전체</HomeTabItem>
      <HomeTabItem>
        국내 <Dot />
        <Span>장 닫힘</Span>
      </HomeTabItem>
      <HomeTabItem>
        해외 <Dot />
        <Span>프리마켓</Span>
      </HomeTabItem>
    </HomeTabContainer>
  );
}

const HomeTabContainer = styled.div`
  position: sticky;
  top: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  isolation: isolate;
  padding: 4px;
  margin: 4px 0;
`;

const HomeTabItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  border-radius: 500px;
  padding: 0 14px;
  color: #c3c3c3;
  gap: 6px;
`;

const Span = styled.span`
  color: #9e9ea4;
  font-size: 12px;
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #4d4d59;
`;
