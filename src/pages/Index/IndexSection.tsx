import IndexItem from './IndexItem';

const IndexItemList = [
  {
    id: 1,
    name: '코스피',
    price: 2450.2,
    change: 40.2,
    changeRate: 1.66,
  },
  {
    id: 2,
    name: '코스닥',
    price: 2450.2,
    change: 40.2,
    changeRate: 1.66,
  },
];

const IndexTitle = ['지수 환율', '채권', '원자재'];

export default function IndexSection() {
  return (
    <div className="flex flex-col mb-[1rem]">
      <div className="flex gap-[1rem] mb-[0.5rem]">
        {IndexTitle.map(item => (
          <button>
            <span className="text-[14px] font-normal text-[#c3c3c3]">
              {item}
            </span>
          </button>
        ))}
      </div>
      <ul className="flex flex-col gap-[1rem]">
        {IndexItemList.map(item => (
          <IndexItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
