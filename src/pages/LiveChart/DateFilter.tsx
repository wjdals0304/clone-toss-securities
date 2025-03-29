import styled from 'styled-components';

export default function DateFilter() {
  const DateFilterList = [
    '실시간',
    '1일',
    '1주일',
    '1개월',
    '3개월',
    '6개월',
    '1년',
  ];

  return (
    <DateFilterContainer>
      {DateFilterList.map(item => (
        <DateFilterItem key={item}>{item}</DateFilterItem>
      ))}
    </DateFilterContainer>
  );
}

const DateFilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px 0 2px;
  gap: 20px;
`;

const DateFilterItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 15px;
  background-color: transparent;
  color: #c3c3c3;
  height: 32px;
`;
