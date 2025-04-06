import {
  IndexItemType,
  BondItemListType,
  MaterialItemType,
  IndexSectionType,
} from './type';
import IndexItem from './IndexItem';
import BondItem from './BondItem';
import MaterialItem from './MaterialItem';

interface IndexListProps {
  data: IndexItemType[] | BondItemListType[] | MaterialItemType[] | undefined;
  selectedIndex: IndexSectionType;
}

const IndexContent = ({ data }: { data: IndexItemType[] }) => (
  <ul className="flex flex-col gap-[1rem]">
    {data.map(item => (
      <IndexItem key={item.id} item={item} />
    ))}
  </ul>
);

const BondContent = ({ data }: { data: BondItemListType[] }) => (
  <ul className="flex flex-col gap-[1rem]">
    {data.map(item => (
      <BondItem key={item.id} item={item} />
    ))}
  </ul>
);

const MaterialContent = ({ data }: { data: MaterialItemType[] }) => (
  <ul className="flex flex-col gap-[0.5rem] h-[200px]">
    {data.map(item => (
      <MaterialItem key={item.id} item={item} />
    ))}
  </ul>
);

export default function IndexList({ data, selectedIndex }: IndexListProps) {
  if (!data) return null;

  const renderContent = () => {
    switch (selectedIndex) {
      case IndexSectionType.INDEX:
        return <IndexContent data={data as IndexItemType[]} />;
      case IndexSectionType.BOND:
        return <BondContent data={data as BondItemListType[]} />;
      case IndexSectionType.MATERIAL:
        return <MaterialContent data={data as MaterialItemType[]} />;
      default:
        return null;
    }
  };

  return renderContent();
}
