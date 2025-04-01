import styled from 'styled-components';
import HomeMain from './HomeMain';
import HomeAside from './HomeAside';
export default function Home() {
  return (
    <HomeContainer>
      <HomeMain />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  z-index: 0;
  position: relative;
  isolation: isolate;
`;
