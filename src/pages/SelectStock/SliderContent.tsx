import Slider from 'react-slick';
import Content from './Content';
import { useState } from 'react';
import { StockTheme } from './type';

function NextArrow(props: any) {
  const { onClick, currentSlide, slideCount } = props;

  if (currentSlide === slideCount - 2) return null;

  return (
    <button
      className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-dark hover:bg-darkHover border border-solid border-borderGray"
      onClick={onClick}
    >
      <span className="text-white text-lg">›</span>
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick, currentSlide } = props;

  if (currentSlide === 0) return null;

  return (
    <button
      className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-dark hover:bg-darkHover border border-solid border-borderGray"
      onClick={onClick}
    >
      <span className="text-white text-lg">‹</span>
    </button>
  );
}

const stockThemes: StockTheme[] = [
  {
    id: 1,
    title: '꾸준한 배당주',
    description: '배당을 꾸준히 주는 주식',
    conditions: [
      '배당수익률 3% 이상',
      '배당 주기 1년 이상',
      '최근 5년 연속 배당',
    ],
    stocks: [
      {
        id: 1,
        name: '삼성화재',
        price: 428000,
        change: 1.2,
        logo: '/images/samsung-fire.png',
      },
      {
        id: 2,
        name: 'SK텔레콤',
        price: 51200,
        change: -0.8,
        logo: '/images/skt.png',
      },
      {
        id: 3,
        name: 'KT&G',
        price: 91400,
        change: 2.1,
        logo: '/images/ktng.png',
      },
    ],
  },
  {
    id: 1,
    title: '꾸준한 배당주',
    description: '배당을 꾸준히 주는 주식',
    conditions: [
      '배당수익률 3% 이상',
      '배당 주기 1년 이상',
      '최근 5년 연속 배당',
    ],
    stocks: [
      {
        id: 1,
        name: '삼성화재',
        price: 428000,
        change: 1.2,
        logo: '/images/samsung-fire.png',
      },
      {
        id: 2,
        name: 'SK텔레콤',
        price: 51200,
        change: -0.8,
        logo: '/images/skt.png',
      },
      {
        id: 3,
        name: 'KT&G',
        price: 91400,
        change: 2.1,
        logo: '/images/ktng.png',
      },
    ],
  },
  {
    id: 1,
    title: '꾸준한 배당주',
    description: '배당을 꾸준히 주는 주식',
    conditions: [
      '배당수익률 3% 이상',
      '배당 주기 1년 이상',
      '최근 5년 연속 배당',
    ],
    stocks: [
      {
        id: 1,
        name: '삼성화재',
        price: 428000,
        change: 1.2,
        logo: '/images/samsung-fire.png',
      },
      {
        id: 2,
        name: 'SK텔레콤',
        price: 51200,
        change: -0.8,
        logo: '/images/skt.png',
      },
      {
        id: 3,
        name: 'KT&G',
        price: 91400,
        change: 2.1,
        logo: '/images/ktng.png',
      },
    ],
  },
  {
    id: 1,
    title: '꾸준한 배당주',
    description: '배당을 꾸준히 주는 주식',
    conditions: [
      '배당수익률 3% 이상',
      '배당 주기 1년 이상',
      '최근 5년 연속 배당',
    ],
    stocks: [
      {
        id: 1,
        name: '삼성화재',
        price: 428000,
        change: 1.2,
        logo: '/images/samsung-fire.png',
      },
      {
        id: 2,
        name: 'SK텔레콤',
        price: 51200,
        change: -0.8,
        logo: '/images/skt.png',
      },
      {
        id: 3,
        name: 'KT&G',
        price: 91400,
        change: 2.1,
        logo: '/images/ktng.png',
      },
    ],
  },
];

export default function SliderContent() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow currentSlide={currentSlide} />,
    swipeToSlide: true,
    touchThreshold: 10,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-[2px]">
      <Slider {...settings}>
        {stockThemes.map(theme => (
          <div key={theme.id} className="px-1 w-[300px]">
            <Content theme={theme} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
