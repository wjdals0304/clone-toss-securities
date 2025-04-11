import Header from '@/components/Header';
import styled from 'styled-components';
import LiveChartSection from '../LiveChart/LiveChartSection';
import HomeTab from './HomeTab';
import CommunitySection from '../Community/CommunitySection';
import Category from '../Category/Category';
import EtfSection from '../Etf/EtfSection';
import TransactionStatusSection from '../TransactionStatus/TransactionStatusSection';
import SelectStockSection from '../SelectStock/SelectStockSection';
import IndexSection from '../Index/IndexSection';
import NewsSection from '../NewsSection/NewsSection';

export default function HomeMain() {
  return (
    <HomeMainContainer>
      <Header />
      <HomeMainTag>
        <HomeTab />
        <HomeMainDiv>
          <HomeContentWrapper>
            <HomeLiveChartDiv>
              <LiveChartSection />
              <CommunitySection />
              <HeightDiv />
              <Category />
              <HeightDiv />
              <EtfSection />
              <HeightDiv />
              <TransactionStatusSection />
              <HeightDiv />
              <SelectStockSection />
            </HomeLiveChartDiv>
            <HomeSeparatorDiv />
            <HomeAsideDiv>
              <IndexSection />
              <HomeAsideHeightDiv />
              <NewsSection />
            </HomeAsideDiv>
          </HomeContentWrapper>
        </HomeMainDiv>
      </HomeMainTag>
    </HomeMainContainer>
  );
}

const HeightDiv = styled.div`
  height: 80px;
`;

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
  flex: 1;
`;

const HomeMainDiv = styled.div`
  margin: 0 auto;
  padding: 0 40px;
  width: 1280px;
`;

const HomeContentWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 16px auto 0;
`;

const HomeLiveChartDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 870px;
`;

const HomeSeparatorDiv = styled.div`
  margin: 0 24px;
  width: 1px;
  background: linear-gradient(
    180deg,
    #17171c 0,
    #3c3c47 1.4%,
    #3c3c47 84.8%,
    #17171c 100%
  );
`;

const HomeAsideDiv = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const HomeAsideHeightDiv = styled.div`
  height: 40px;
`;
