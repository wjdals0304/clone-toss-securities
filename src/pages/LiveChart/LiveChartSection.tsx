import styled from 'styled-components';
import DateFilter from './DateFilter';
import StockList from './StockList';

export default function LiveChartSection() {
  const LiveChartTabList = [
    '토스증권 거래대금',
    '토스증권 거래량',
    '거래대금',
    '거래량',
    '급상승',
    '급하락',
    '인기',
  ];

  return (
    <LiveChartSectionContainer>
      <LiveChartHeaderSection>
        <LiveChartHeaderTitle>실시간 차트</LiveChartHeaderTitle>
        <LiveChartSectionCategoryDiv>
          <LiveChartTabListDiv>
            {LiveChartTabList.map(item => (
              <Button key={item}>
                <LiveChartTabListSpan>{item}</LiveChartTabListSpan>
              </Button>
            ))}
          </LiveChartTabListDiv>
        </LiveChartSectionCategoryDiv>
        <DateFilter />
      </LiveChartHeaderSection>
      <StockList />
    </LiveChartSectionContainer>
  );
}

const LiveChartSectionContainer = styled.div`
  width: 100%;
  margin: 16px auto 0;
`;

const LiveChartHeaderSection = styled.section`
  display: flex;
  flex-direction: column;
`;

const LiveChartHeaderTitle = styled.span`
  font-size: var(--tds-wts-font-size);
  font-weight: var(--tds-wts-font-weight);
  line-height: var(--tds-wts-line-height);
  color: var(--tds-wts-foreground-color);
`;

const LiveChartSectionCategoryDiv = styled.div`
  position: relative;
  margin-top: 8px;
`;

const LiveChartTabListDiv = styled.div`
  position: relative;
  display: flex;
  max-width: 100%;
  overflow: visible;
  height: var(--tw-336bzi0);
  border-bottom: 1px solid rgba(222, 222, 222, 0.19);
  gap: 20px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  border: none;
  background-color: transparent;
  appearance: none;
`;

const LiveChartTabListSpan = styled.span`
  color: #c3c3c3;
  line-height: 1.45;
  font-size: 15px;
  line-height: 1.45;
`;
