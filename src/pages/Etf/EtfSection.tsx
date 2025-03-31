import styled from 'styled-components';
import EtfContent from './EtfContent';

const stockList = [
  {
    lank: 1,
    name: 'UVIX',
    desc: 'VIX 장기선물2배 ETF',
    price: 100000,
    logo: 'https://via.placeholder.com/150',
    change: 10,
  },
  {
    lank: 2,
    name: 'UVIX',
    desc: 'VIX 장기선물2배 ETF',
    price: 100000,
    logo: 'https://via.placeholder.com/150',
    change: 10,
  },
];

export default function EtfSection() {
  return (
    <section>
      <EtfTitleContainer>
        <EtfTitle>해외 ETF 모아보기</EtfTitle>
      </EtfTitleContainer>
      <EtfContentContainer>
        <EtfContent title="레버리지 인버스" stockList={stockList} />
        <EtfContent title="미국 주식" stockList={stockList} />
      </EtfContentContainer>
    </section>
  );
}

const EtfTitleContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const EtfTitle = styled.h2`
  font-size: 20px;
  color: #e4e4e5;
  font-weight: bold;
`;

const EtfContentContainer = styled.div`
  display: flex;
  gap: 8px;
`;
