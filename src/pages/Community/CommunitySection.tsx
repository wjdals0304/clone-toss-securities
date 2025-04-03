import styled from 'styled-components';
import { useState } from 'react';
import StockPost from './StockPost';
import ExportStockRadioGroup from './StockRadioGroup';
import { useCommunity, useSelectedStock } from '@/hooks/useCommunity';

export default function CommunitySection() {
  const [selectedStockId, setSelectedStockId] = useState<string>('');
  const { data } = useCommunity();
  const { data: selectedStockData } = useSelectedStock(selectedStockId);

  if (!data) {
    return <div>데이터를 불러올 수 없습니다.</div>;
  }

  const currentPosts = selectedStockId ? selectedStockData?.posts : data.posts;

  return (
    <CommunitySectionContainer>
      <CommunitySectionTitleContainer>
        <CommunitySectionTitle>인기 급상승 커뮤니티</CommunitySectionTitle>
      </CommunitySectionTitleContainer>
      <CommunitySectionContentContainer>
        <StockListFieldSet>
          <ExportStockRadioGroup
            stocks={data.stocks}
            selectedStockId={selectedStockId || data.currentStockId}
            onStockSelect={setSelectedStockId}
          />
        </StockListFieldSet>
        <StockPostSection>
          <StockPost posts={currentPosts || []} />
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
  width: 100%;
  height: 364px;
  margin-top: 16px;
  border-radius: 16px;
  border: 1px solid rgb(217, 217, 255, 0.11);
`;

const StockListFieldSet = styled.fieldset`
  position: relative;
  display: flex;
  gap: 4px;
  padding: 8px;
  flex: 1;
  height: 100%;
  background-color: #101013;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
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
