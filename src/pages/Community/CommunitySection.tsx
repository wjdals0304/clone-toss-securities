import styled from 'styled-components';
import StockPost from './StockPost';
import ExportStockRadioGroup from './StockRadioGroup';

export default function CommunitySection() {
  return (
    <CommunitySectionContainer>
      <CommunitySectionTitleContainer>
        <CommunitySectionTitle>인기 급상승 커뮤니티</CommunitySectionTitle>
      </CommunitySectionTitleContainer>
      <CommunitySectionContentContainer>
        <StockListFieldSet>
          <ExportStockRadioGroup />
        </StockListFieldSet>
        <StockPostSection>
          <StockPost />
        </StockPostSection>
      </CommunitySectionContentContainer>
    </CommunitySectionContainer>
  );
}

const CommunitySectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 8px;
  gap: 2px;
  margin: 80px 0 0 0;
`;

const CommunitySectionTitleContainer = styled.div`
  display: flex;
  width: 100%;
`;

const CommunitySectionTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #e4e4e5;
`;

const CommunitySectionContentContainer = styled.div`
  display: flex;
  height: 364px;
  margin-top: 16px;
  border-radius: 16px;
  border: 1px solid rgb(217, 217, 255, 0.11);
`;

const StockListFieldSet = styled.fieldset`
  position: relative;
  display: flex;
  gap: 4px;
  padding: 12px;
  flex: 1;
  height: 100%;
  background-color: #101013;
  border-top-left-radius: inherit;
`;

const StockPostSection = styled.section`
  flex: 2 1;
  height: 100%;
  padding: 12px;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
