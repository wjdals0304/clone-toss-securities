import Image from 'next/image';
import { StockItem } from './types';
import Content from './Content';
import Slider from 'react-slick';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const stockItems: StockItem[] = [
  {
    id: 1,
    rank: 1,
    logoUrl: '/images/hanwha.png',
    name: '한화에어로스페이스',
    price: 672000,
    priceChange: 7.1,
    volume: 82,
  },
  {
    id: 2,
    rank: 2,
    logoUrl: '/images/samsung.png',
    name: '삼성중공업',
    price: 13890,
    priceChange: 3.0,
    volume: 21,
  },
];

function NextArrow(props: any) {
  const { onClick, currentSlide } = props;
  if (currentSlide === 1) return null;

  return (
    <button
      className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 w-[40px] h-[40px] flex items-center justify-center rounded-full bg-dark hover:bg-darkHover border border-solid border-borderGray"
      onClick={onClick}
    >
      <span className="text-white text-xl">›</span>
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
      <span className="text-white text-xl">‹</span>
    </button>
  );
}

export default function TransactionStatusSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow currentSlide={currentSlide} />,
    prevArrow: <PrevArrow currentSlide={currentSlide} />,
    swipeToSlide: true,
    touchThreshold: 10,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="p-4">
      <div className="flex flex-col gap-[2px] mb-4">
        <span className="text-[20px] font-bold text-white">
          국내 투자자별 거래 현황
        </span>
      </div>
      <div className="flex gap-4 mb-4">
        <button className="flex items-center justify-center border-none bg-transparent">
          <span className="text-[15px] text-lightGray font-normal">순매수</span>
        </button>
        <button className="flex items-center justify-center border-none bg-transparent">
          <span className="text-[15px] text-lightGray font-normal">순매도</span>
        </button>
      </div>
      <div>
        <Slider {...settings}>
          <div className="min-w-[320px]">
            <Content
              title="외국인"
              timestamp="오늘 09:20"
              stockItems={stockItems}
            />
          </div>
          <div className="min-w-[320px]">
            <Content
              title="기관"
              timestamp="오늘 09:20"
              stockItems={stockItems}
            />
          </div>
          <div className="min-w-[320px]">
            <Content
              title="개인"
              timestamp="오늘 09:20"
              stockItems={stockItems}
            />
          </div>
        </Slider>
      </div>
    </section>
  );
}
