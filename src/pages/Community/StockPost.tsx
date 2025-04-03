import styled from 'styled-components';
import { CommunityPost } from '@/types/community';
import PostItem from './PostItem';

interface StockPostProps {
  posts: CommunityPost[];
}

export default function StockPost({ posts }: StockPostProps) {
  return (
    <StockPostContainer>
      <PostContentContainer>
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
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
  width: 100%;
`;
