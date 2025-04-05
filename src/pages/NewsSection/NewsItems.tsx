import { NewsItem } from '@/types/news';
import Image from 'next/image';
import { useState } from 'react';
import NewsModal from './NewsModal';

export default function NewsItems({ item }: { item: NewsItem }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id, title, time, image } = item;

  return (
    <>
      <div
        key={id}
        className="flex justify-between items-center p-[8px 0] cursor-pointer hover:bg-white/5 rounded-[10px] transition-colors outline-none focus:outline-none p-2"
        onClick={() => setIsModalOpen(true)}
        tabIndex={0}
        role="button"
      >
        <div className="flex flex-col">
          <span className="text-[15px] font-normal text-lightGray">
            {title}
          </span>
          <span className="text-[13px] font-normal text-darkGray">{time}</span>
        </div>
        <div className="w-[64px] h-[64px] border-[10px] ml-[8px]">
          <Image
            src={image}
            alt={`news-${id}`}
            width={64}
            height={64}
            className="w-[100%] h-[100%] object-cover rounded-[10px]"
          />
        </div>
      </div>
      <NewsModal
        item={item}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
