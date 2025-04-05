import { NewsItem } from '@/types/news';
import Image from 'next/image';
import ReactModal from 'react-modal';
import { useEffect } from 'react';

interface NewsModalProps {
  item: NewsItem;
  isOpen: boolean;
  onClose: () => void;
}

if (typeof window !== 'undefined') {
  ReactModal.setAppElement('#__next');
}

export default function NewsModal({ item, isOpen, onClose }: NewsModalProps) {
  const { title, time, image, content } = item;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
      closeTimeoutMS={300}
    >
      <div className="relative bg-[#17171C] rounded-[20px] max-w-[1000px] p-6">
        <div className="flex flex-col gap-4">
          <div className="w-full aspect-video relative rounded-[15px] overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-[20px] font-medium text-white">{title}</h2>
            <span className="text-[14px] text-[#9DA3B3]">{time}</span>
          </div>
          <p className="text-[15px] text-[#9DA3B3] mt-4">{content}</p>
        </div>
      </div>
    </ReactModal>
  );
}
