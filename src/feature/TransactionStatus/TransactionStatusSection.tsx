import { useTransactionQuery } from '@/hooks/useTransactionQuery';
import Content from './Content';
import Slider from 'react-slick';
import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TabButton } from '@/components/Transaction/TabButton';

function NextArrow(props: any) {
  const { onClick, currentSlide, slideCount } = props;
  if (currentSlide === slideCount - 2) return null;

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
  const [ranking, setRanking] = useState('buy');
  const { data: sections, error } = useTransactionQuery(ranking);
  const [currentSlide, setCurrentSlide] = useState(0);

  if (error) {
    return (
      <div className="flex justify-center items-center h-[200px] text-stockRedUp">
        {error.message}
      </div>
    );
  }

  if (!sections) {
    return null;
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <NextArrow currentSlide={currentSlide} slideCount={sections.length} />
    ),
    prevArrow: <PrevArrow currentSlide={currentSlide} />,
    swipeToSlide: true,
    touchThreshold: 10,
    beforeChange: (_: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  return (
    <section className="p-4">
      <div className="flex flex-col gap-[2px] mb-4">
        <span className="text-[20px] font-bold text-white">
          국내 투자자별 거래 현황
        </span>
      </div>
      <div className="flex gap-4 mb-4">
        <TabButton
          label="순매수"
          isActive={ranking === 'buy'}
          onClick={() => setRanking('buy')}
        />
        <TabButton
          label="순매도"
          isActive={ranking === 'sell'}
          onClick={() => setRanking('sell')}
        />
      </div>
      <div className="relative">
        <Slider {...settings}>
          {sections.map(section => (
            <div key={section.title} className="min-w-[320px] pr-10">
              <Content title={section.title} items={section.items} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
