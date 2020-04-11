import styled from 'styled-components';

export const TableCSS = styled.table`
  background: white;
  border-collapse: collapse;

  td {
    width: 20px;
    height: 20px;
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
