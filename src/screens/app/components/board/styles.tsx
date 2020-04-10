import styled from 'styled-components';

export const TableCSS = styled.table`
  background: white;
  width: 50%;
  border-collapse: collapse;

  td {
    padding: 1rem;
    width: 25px;
    height: 25px;
    border: solid 1px #c4c2c2;
  }
`

export const CellCSS:any = styled.td`
  background: ${(props:any) => {
    const { row } = props;
    if(row.value) {
      const { colorR, colorB, colorG } = row;
      return `rgb(${colorR}, ${colorB}, ${colorG});`
    }
    return 'white;'
  }}
`
