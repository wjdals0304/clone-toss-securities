import { CategoryData } from '@/types/category';

export const categoryData: CategoryData = {
  domestic: [
    {
      id: '1',
      image: 'https://static.toss.im/ml-product/office-desk-chair-area.png',
      title: '경영지원',
      change: 6.0,
      desc: '7개 중 5개 종목 상승',
      rank: 1,
      backgroundColor: '#3B3B44',
      stockList: [
        { stock: '웹케시', stockChange: 27.0 },
        { stock: '원디드랩', stockChange: 13.0 },
        { stock: '사람인', stockChange: 2.5 },
      ],
    },
    {
      id: '2',
      image:
        '	https://static.toss.im/ml-product/supermarket-shopping-cart-area.png',
      title: '대형마트',
      change: 4.0,
      desc: '5개 중 3개 종목 상승',
      rank: 2,
      backgroundColor: '#2D4D4D',
      stockList: [
        { stock: '부방', stockChange: 22.0 },
        { stock: '이마트', stockChange: 0.7 },
        { stock: '롯데하이마트', stockChange: 0.2 },
      ],
    },
  ],
  overseas: [
    {
      id: '1',
      image: 'https://static.toss.im/ml-product/motorcycle-area.png',
      title: '오토바이',
      change: 1.7,
      desc: '11개 중 1개 종목 상승',
      rank: 1,
      backgroundColor: '#2D4D35',
      stockList: [
        { stock: '데이몬', stockChange: 23.1 },
        { stock: 'BRP', stockChange: -2.0 },
        { stock: '라이브와이어', stockChange: -10.0 },
      ],
    },
    {
      id: '2',
      image: 'https://static.toss.im/ml-product/holding-company-area.png',
      title: '지주사',
      change: 1.2,
      desc: '34개 중 2개 종목 상승',
      rank: 2,
      backgroundColor: '#3B2D4D',
      stockList: [
        { stock: '파월 맥스', stockChange: 40.3 },
        { stock: '이노베이트', stockChange: 5.5 },
        { stock: '엑셀론', stockChange: -3.0 },
      ],
    },
  ],
};
