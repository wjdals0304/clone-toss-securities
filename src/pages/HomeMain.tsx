import Header from '@/components/Header';
import styled from 'styled-components';
import LiveChartSection from './LiveChart/LiveChartSection';
import HomeTab from './HomeTab';

export default function HomeMain() {
  return (
    <HomeMainContainer>
      <Header />
      <HomeMainTag>
        <HomeTab />
        <HomeMainDiv>
          <LiveChartSection />
        </HomeMainDiv>
      </HomeMainTag>
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

const HomeMainTag = styled.main`
  width: 100%;
  flex: 1 1;
  isolation: isolate;
`;

const HomeMainDiv = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  width: 100%;
  min-width: 1100px;
  max-width: 1280px;
`;
