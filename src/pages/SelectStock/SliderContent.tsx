import Slider from 'react-slick';
import Content from './Content';
import { useState } from 'react';
import { StockTheme } from './type';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderContentProps {
  themes: StockTheme[];
}

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

export default function SliderContent({ themes }: SliderContentProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <NextArrow currentSlide={currentSlide} slideCount={themes.length} />
    ),
    prevArrow: <PrevArrow currentSlide={currentSlide} />,
    swipeToSlide: true,
    touchThreshold: 10,
    beforeChange: (_: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-[10px] select-stock-slider">
      <Slider {...settings}>
        {themes.map(theme => (
          <div key={theme.id} className="px-2">
            <Content theme={theme} />
          </div>
        ))}
      </Slider>
      <style jsx global>{`
        .select-stock-slider .slick-slider {
          margin: 0 -50px;
        }
        .select-stock-slider .slick-slide {
          padding: 0 20px;
        }
        .select-stock-slider .slick-track {
          display: flex;
          margin-left: 0;
          margin-right: 0;
        }
      `}</style>
    </div>
  );
}
