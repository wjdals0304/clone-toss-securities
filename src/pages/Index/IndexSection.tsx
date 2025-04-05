import { useState } from 'react';
import { IndexSectionType } from './type';
import { useIndexQuery } from '@/hooks/useIndexQuery';
import IndexList from './IndexList';

export default function IndexSection() {
  const [selectedIndex, setSelectedIndex] = useState<IndexSectionType>(
    IndexSectionType.INDEX,
  );

  const { data } = useIndexQuery(selectedIndex);
  const handleClickIndexButton = (index: IndexSectionType) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex flex-col mb-[1rem]">
      <div className="flex gap-[1rem] mb-[1rem] ">
        {Object.values(IndexSectionType).map(item => (
          <button
            key={item}
            onClick={() => handleClickIndexButton(item)}
            className={`text-[14px] font-normal px-3 py-1.5 rounded-[15px] 
              ${
                selectedIndex === item
                  ? 'text-white bg-[#2C2D33]'
                  : 'text-[#9DA3B3] hover:text-white'
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>
      <IndexList data={data} />
    </div>
  );
}
