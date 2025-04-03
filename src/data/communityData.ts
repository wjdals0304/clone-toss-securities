import { CommunityData } from '@/types/community';

export const mockCommunityData: CommunityData = {
  stocks: [
    {
      id: 'litus',
      name: '리투스 테크놀로지스',
      change: -16.7,
      logo: '/images/stocks/litus.png',
      rank: 1,
      postCount: 3,
    },
    {
      id: 'apple',
      name: '애플',
      change: -5.2,
      logo: '/images/stocks/apple.png',
      rank: 2,
      postCount: 2,
    },
    {
      id: 'neowiz',
      name: '네오위즈홀딩스',
      change: -4.9,
      logo: '/images/stocks/neowiz.png',
      rank: 3,
      postCount: 2,
    },
  ],
  posts: {
    litus: [
      {
        id: '1',
        stockId: 'litus',
        address: '급등주린님',
        time: '3시간 전',
        description:
          '리투스 테크놀로지스 실적 발표 기대됩니다. 신규 프로젝트 소식도 있다고 하네요.',
      },
      {
        id: '2',
        stockId: 'litus',
        address: '주식마스터',
        time: '4시간 전',
        description: '리투스 테크놀로지스 신규 특허 출원 소식! 기대되네요.',
      },
      {
        id: '3',
        stockId: 'litus',
        address: '투자의달인',
        time: '5시간 전',
        description: '리투스 테크놀로지스 기술력은 정말 대단한 것 같습니다.',
      },
    ],
    apple: [
      {
        id: '4',
        stockId: 'apple',
        address: '애플매니아',
        time: '2시간 전',
        description: '애플 신제품 출시 소식! 주가 영향이 있을까요?',
      },
      {
        id: '5',
        stockId: 'apple',
        address: '테크투자자',
        time: '3시간 전',
        description: '애플 실적 전망이 매우 긍정적입니다.',
      },
    ],
    neowiz: [
      {
        id: '6',
        stockId: 'neowiz',
        address: '게임주전문가',
        time: '1시간 전',
        description: '네오위즈 신작 게임 출시 일정 공개! 기대됩니다.',
      },
      {
        id: '7',
        stockId: 'neowiz',
        address: '주식고수',
        time: '2시간 전',
        description: '네오위즈 신작 게임 사전예약 호조! 실적 개선 기대.',
      },
    ],
  },
};
