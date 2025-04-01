import styled from 'styled-components';

const postList = [
  {
    address: '급등주린님',
    time: '3시간 전',
    description:
      '오늘 오후 1시 쯤 주식 시장이 오픈되었는데, 주식 시장이 오픈되었습니다.',
  },
  {
    address: '급등주린님222',
    time: '3시간 전',
    description:
      '오늘 오후 22시 쯤 주식 시장이 오픈되었는데, 주식 시장이 오픈되었습니다.',
  },
];

export default function StockPost() {
  return (
    <StockPostContainer>
      <PostContentContainer>
        {postList.map(post => (
          <PostSection key={post.address}>
            <PostSectionDiv>
              <PostAddress>
                <label>
                  <PostLabelSpan>급등주린님</PostLabelSpan>
                  <PostLabelTime>
                    <PostLabelSpan>3시간 전</PostLabelSpan>
                  </PostLabelTime>
                </label>
              </PostAddress>
              <PostDescriptionDiv>
                <PostDescriptionSpan>
                  오늘 오후 1시 쯤 주식 시장이 오픈되었는데, 주식 시장이
                  오픈되었습니다.
                </PostDescriptionSpan>
              </PostDescriptionDiv>
            </PostSectionDiv>
          </PostSection>
        ))}
      </PostContentContainer>
    </StockPostContainer>
  );
}

const StockPostContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #17171c;
`;

const PostContentContainer = styled.div`
  opacity: 1;
  transform: translate(0px, 0px);
  translate: none;
  rotate: none;
  scale: none;
`;

const PostSection = styled.section`
  gap: 8px;
  display: flex;
  flex-direction: row;
  height: 88px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: rgba(217, 217, 255, 0.11);
  }
`;

const PostSectionDiv = styled.div`
  flex: 1 1;
  overflow: hidden;
  padding: 8px 0 8px 8px;
`;

const PostAddress = styled.address`
  font-style: normal;
  flex-wrap: wrap;
  gap: 4px;
  cursor: pointer;
  margin: 4px 0 4px 0;
`;

const PostLabelSpan = styled.span`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 14px;
  color: #c3c3c6;
  line-height: 1.45;
`;

const PostLabelTime = styled.time`
  color: #727289;
`;

const PostDescriptionDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostDescriptionSpan = styled.span`
  word-break: break-word;
  white-space: break-spaces;
  font-weight: 500;
  color: #c3c3c6;
  line-height: 1.45;
  font-size: 15px;
`;
