import styled from 'styled-components';

export const TableCSS:any = styled.table`
  background: white;
  border-collapse: collapse;

  td {
    width: 20px;
    height: 20px;
    border: solid 1px #c4c2c2;

    &:hover {
      cursor: pointer;
      background: ${(props:any) => {
        const { user } = props;
        const { colorR, colorB, colorG } = user;
        return `rgba(${colorR}, ${colorB}, ${colorG}, 0.2);`
      }}
    }
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
