import styled from 'styled-components';
import StockPost from './StockPost';
export default function CommunitySection() {
  const stockList = [
    {
      name: '리투스 테크놀로지스',
      change: -16.7,
      logo: 'logo_url',
      rank: 1,
    },
    {
      name: '애플',
      change: -5.2,
      logo: 'logo_url',
      rank: 2,
    },
    {
      name: '네오위즈홀딩스',
      change: -4.9,
      logo: 'logo_url',
      rank: 3,
    },
  ];

  return (
    <CommunitySectionContainer>
      <CommunitySectionTitleContainer>
        <CommunitySectionTitle>인기 급상승 커뮤니티</CommunitySectionTitle>
      </CommunitySectionTitleContainer>
      <CommunitySectionContentContainer>
        <StockListFieldSet>
          <StockRadioGroup>
            {stockList.map(stock => (
              <StockRadioItem key={stock.name}>
                <StockInput
                  type="radio"
                  id={stock.name}
                  name="home-hot-communities"
                  defaultChecked
                />
                <StockLabel htmlFor={stock.name}>
                  <StockItemContent>
                    <StockRank>{stock.rank}</StockRank>
                    <StockLogo>
                      <img src={stock.logo} alt="logo" width={32} height={32} />
                    </StockLogo>
                    <StockInfo>
                      <StockName>{stock.name}</StockName>
                      <StockChange isNegative={stock.change < 0}>
                        {stock.change}%
                      </StockChange>
                    </StockInfo>
                  </StockItemContent>
                </StockLabel>
              </StockRadioItem>
            ))}
          </StockRadioGroup>
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
  flex: 1 1;
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

const StockRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StockRadioItem = styled.div`
  position: relative;
`;

const StockInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:checked + label {
    background-color: rgba(217, 217, 255, 0.05);
  }
`;

const StockLabel = styled.label`
  display: block;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: rgba(217, 217, 255, 0.05);
  }
`;

const StockItemContent = styled.div`
  display: flex;
  border-radius: 10px;
  height: 50px;
  position: relative;
  align-items: center;
  width: 100%;
`;

const StockRank = styled.span`
  color: #3485fa;
  font-size: 14px;
  min-width: 24px;
`;

const StockLogo = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
`;

const StockInfo = styled.div`
  display: flex;
  gap: 4px;
`;

const StockName = styled.span`
  color: #e4e4e5;
  font-size: 14px;
  white-space: nowrap;
  display: block;
  text-align: left;
`;

const StockChange = styled.span<{ isNegative: boolean }>`
  color: ${props => (props.isNegative ? '#ff4040' : '#31b404')};
  font-size: 14px;
`;
