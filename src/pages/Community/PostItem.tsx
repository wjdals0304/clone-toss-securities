import styled from 'styled-components';
import { CommunityPost } from '@/types/community';

interface PostItemProps {
  post: CommunityPost;
}

export default function PostItem({ post }: PostItemProps) {
  const { id, address, time, description } = post;
  return (
    <PostSection key={id}>
      <PostSectionDiv>
        <PostAddress>
          <PostLabelSpan>{address}</PostLabelSpan>
          <Dot />
          <PostLabelTime>
            <PostLabelSpan>{time}</PostLabelSpan>
          </PostLabelTime>
        </PostAddress>
        <PostDescriptionDiv>
          <PostDescriptionSpan>{description}</PostDescriptionSpan>
        </PostDescriptionDiv>
      </PostSectionDiv>
    </PostSection>
  );
}

const PostSection = styled.section`
  gap: 8px;
  display: flex;
  flex-direction: row;
  height: 88px;
  position: relative;
  width: 100%;

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
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const PostAddress = styled.address`
  font-style: normal;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  margin: 4px 0;
  width: 100%;
`;

const PostLabelSpan = styled.span`
  margin: 0;
  padding: 0;
  font-weight: 500;
  font-size: 14px;
  color: #c3c3c6;
  line-height: 1.45;
  white-space: nowrap;
`;

const PostLabelTime = styled.time`
  color: #727289;
  display: flex;
  align-items: center;
`;

const PostDescriptionDiv = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  display: flex;
  align-items: center;
`;

const PostDescriptionSpan = styled.span`
  word-break: break-word;
  white-space: break-spaces;
  font-weight: 500;
  color: #c3c3c6;
  line-height: 1.45;
  font-size: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #4d4d59;
  flex-shrink: 0;
`;
