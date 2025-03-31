import Header from '@/components/Header';
import styled from 'styled-components';

export default function HomeMain() {
  return (
    <HomeMainContainer>
      <Header />
    </HomeMainContainer>
  );
}

const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #17171c;
`;
