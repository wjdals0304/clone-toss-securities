import Image from 'next/image';

const NewsItemList = [
  {
    title: '소호은행 소상공인 생애주기 맞춤형 서비스 제공',
    time: '54분전 딜사이트',
    image:
      'https://static.tossinvestcdn.com/assets/image/detail-news-default/image7.png',
  },
  {
    title: '소호은행 소상공인 생애주기 맞춤형 서비스 제공',
    time: '54분전 딜사이트',
    image:
      'https://static.tossinvestcdn.com/assets/image/detail-news-default/image7.png',
  },
];

export default function NewsSection() {
  return (
    <div className="min-h-[340px]">
      <div className="flex gap-[1rem] mb-[0.5rem]">
        <button>
          <span className="text-[15px] font-normal text-[#c3c3c3]">
            주요 뉴스
          </span>
        </button>
        <button>
          <span className="text-[15px] font-normal text-[#c3c3c3]">
            추천 뉴스
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-[1rem]">
        {NewsItemList.map(item => (
          <div className="flex justify-between items-center p-[8px 0]">
            <div className="flex flex-col">
              <span className="text-[15px] font-normal text-[#c3c3c3]">
                {item.title}
              </span>
              <span className="text-[13px] font-normal text-[#9292a4]">
                {item.time}
              </span>
            </div>
            <div className="w-[64px] h-[64px] border-[10px] ml-[8px]">
              <Image
                src={item.image}
                alt="news1"
                width={64}
                height={64}
                className="w-[100%] h-[100%] object-cover rounded-[10px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
