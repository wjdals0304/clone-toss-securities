import { bondData, materialData, indexData } from '@/data/indexData';
import {
  IndexSectionType,
  IndexItemType,
  BondItemListType,
  MaterialItemType,
} from '@/feature/Index/type';
import { useQuery } from '@tanstack/react-query';

const getDataByType = (
  type: IndexSectionType,
): IndexItemType[] | BondItemListType[] | MaterialItemType[] => {
  switch (type) {
    case IndexSectionType.INDEX:
      return indexData;
    case IndexSectionType.BOND:
      return bondData;
    case IndexSectionType.MATERIAL:
      return materialData;
    default:
      return [];
  }
};

type DataType = IndexItemType[] | BondItemListType[] | MaterialItemType[];

export const useIndexQuery = (type: IndexSectionType) => {
  return useQuery<DataType>({
    queryKey: ['index', type] as const,
    queryFn: () => getDataByType(type),
  });
};
