import {
  DataType,
  IndexItemType,
  BondItemListType,
  MaterialItemType,
} from './type';
import IndexItem from './IndexItem';
import BondItem from './BondItem';
import MaterialItem from './MaterialItem';

interface IndexListProps {
  data: (IndexItemType | BondItemListType | MaterialItemType)[] | undefined;
}

export default function IndexList({ data }: IndexListProps) {
  if (!data) return null;

  const indexItems = data.filter(
    (item): item is IndexItemType => item.type === DataType.INDEX,
  );
  const bondItems = data.filter(
    (item): item is BondItemListType => item.type === DataType.BOND,
  );
  const materialItems = data.filter(
    (item): item is MaterialItemType => item.type === DataType.MATERIAL,
  );

  return (
    <>
      {indexItems.length > 0 && (
        <ul className="flex flex-col gap-[1rem]">
          {indexItems.map(item => (
            <IndexItem key={item.id} item={item} />
          ))}
        </ul>
      )}

      {bondItems.length > 0 && (
        <ul className="flex flex-col gap-[1rem]">
          {bondItems.map(item => (
            <BondItem key={item.id} item={item} />
          ))}
        </ul>
      )}

      {materialItems.length > 0 && (
        <ul className="flex flex-col gap-[0.5rem] h-[200px]">
          {materialItems.map(item => (
            <MaterialItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </>
  );
}
