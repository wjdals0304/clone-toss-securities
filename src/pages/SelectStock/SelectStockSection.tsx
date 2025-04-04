import { useSelectStockQuery } from '@/hooks/useSelectStockQuery';
import SliderContent from './SliderContent';

export default function SelectStockSection() {
  const { data, isLoading } = useSelectStockQuery();

  if (isLoading || !data) return null;

  return (
    <section className="p-4">
      <div className="flex items-center justify-between mb-[13px]">
        <span className="text-[20px] font-bold text-white">
          내게 맞는 주식 골라보기
        </span>
      </div>
      <SliderContent themes={data.themes} />
    </section>
  );
}
