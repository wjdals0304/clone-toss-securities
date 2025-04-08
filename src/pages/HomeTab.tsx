import styled from 'styled-components';
import { useState } from 'react';

const TABS = {
  ENTIRE: '전체',
  DOMESTIC: '국내',
  OVERSEAS: '해외',
} as const;

type TabType = (typeof TABS)[keyof typeof TABS];

interface TabInfo {
  id: TabType;
  label: string;
  status?: string;
}

const TAB_LIST: TabInfo[] = [
  { id: TABS.ENTIRE, label: TABS.ENTIRE },
  { id: TABS.DOMESTIC, label: TABS.DOMESTIC, status: '정규장' },
  { id: TABS.OVERSEAS, label: TABS.OVERSEAS, status: '데이마켓' },
];

interface TabItemProps {
  info: TabInfo;
  isSelected: boolean;
  onClick: () => void;
}

export default function HomeTab() {
  const [selectedTab, setSelectedTab] = useState<TabType>(TABS.ENTIRE);
  const selectedIndex = TAB_LIST.findIndex(tab => tab.id === selectedTab);

  return (
    <HomeTabContainer>
      <HomeTabWrapper>
        <HomeTabGroup>
          <Slider selectedIndex={selectedIndex} />
          {TAB_LIST.map(tab => (
            <TabItem
              key={tab.id}
              info={tab}
              isSelected={selectedTab === tab.id}
              onClick={() => setSelectedTab(tab.id)}
            />
          ))}
        </HomeTabGroup>
      </HomeTabWrapper>
    </HomeTabContainer>
  );
}

const TabItem = ({ info, isSelected, onClick }: TabItemProps) => (
  <HomeTabItem selected={isSelected} onClick={onClick}>
    {info.label}
    {info.status && (
      <>
        <Dot />
        <Span>{info.status}</Span>
      </>
    )}
  </HomeTabItem>
);

const HomeTabContainer = styled.div`
  position: sticky;
  top: 64px;
  width: 100%;
  margin-top: 4px;
  z-index: 100;
  pointer-events: none;
`;

const HomeTabWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HomeTabGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  border-radius: 500px;
  padding: 5px;
  background-color: #17171c;
  pointer-events: all;
  box-shadow: rgba(2, 9, 19, 0.91) 0px 2px 30px 0px;
  position: relative;
  // gap: 3px;
`;

const Slider = styled.div<{ selectedIndex: number }>`
  position: absolute;
  height: 40px;
  border-radius: 700px;
  background-color: #2c2d33;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  left: ${({ selectedIndex }) =>
    `calc(${selectedIndex * (100 / TAB_LIST.length)}% )`};
  width: ${() => `calc(${100 / TAB_LIST.length}% - 3px)`};
`;

const HomeTabItem = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  border-radius: 400px;
  padding: 0 5px;
  color: ${({ selected }) => (selected ? '#FFFFFF' : '#9DA3B3')};
  gap: 6px;
  background-color: transparent;
  transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  z-index: 1;
  min-width: 100px;
  flex: 1;

  &:hover {
    color: #ffffff;
  }
`;

const Span = styled.span`
  color: #9da3b3;
  font-size: 12px;
`;

const Dot = styled.span`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #4d4d59;
`;
