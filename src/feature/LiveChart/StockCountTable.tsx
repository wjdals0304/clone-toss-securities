import styled from 'styled-components';
import { VolumeCountStock } from '../../data/stockTypes';
import StockListVolumeCountItem from './StockListVolumeCountItem';

interface StockCountTableProps {
  fields: readonly string[];
  data: VolumeCountStock[];
}

export default function StockCountTable({
  fields,
  data,
}: StockCountTableProps) {
  return (
    <StockListContainer>
      <Table>
        <colgroup>
          <StyledCol width="40%" />
          <StyledCol width="20%" />
          <StyledCol width="20%" />
          <StyledCol width="20%" />
        </colgroup>
        <StockTHead>
          <StockTr>
            {fields.map(field => (
              <StockTh key={field}>{field}</StockTh>
            ))}
          </StockTr>
        </StockTHead>
        <StockTBody>
          {data.map(stock => (
            <StockListVolumeCountItem key={stock.rank} stock={stock} />
          ))}
        </StockTBody>
      </Table>
    </StockListContainer>
  );
}

const StyledCol = styled.col<{ width: string }>`
  width: ${({ width }) => width};
`;

const StockListContainer = styled.div`
  overflow: hidden;
  padding: 8px 12px;
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  background-color: #17171c;
`;

const StockTHead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const StockTBody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

const StockTr = styled.tr`
  height: 44px;
`;

const StockTh = styled.th`
  color: #9e9ea4;
  text-align: right;
  font-weight: normal;

  &:first-child {
    text-align: left;
  }
  &:last-child {
    color: #3485fa;
  }
`;
