export enum IndexSectionType {
  INDEX = '지수',
  BOND = '채권',
  MATERIAL = '원자재',
}

export enum DataType {
  INDEX = 'index',
  BOND = 'bond',
  MATERIAL = 'material',
}

interface BaseItem {
  id: number;
  name: string;
  type: DataType;
}

export interface IndexItemType extends BaseItem {
  type: DataType.INDEX;
  price: number;
  change: number;
  changeRate: number;
}

export interface BondItemType {
  period: string;
  price: number;
  change: number;
  changeRate: number;
  type: DataType.BOND;
}

export interface BondItemListType extends BaseItem {
  type: DataType.BOND;
  items: BondItemType[];
}

export interface MaterialItemType extends BaseItem {
  type: DataType.MATERIAL;
  price: number;
  change: number;
  changeRate: number;
}
