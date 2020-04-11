import React from 'react';
import { ICell } from '@interfaces/boardTypes';
import { 
  TableCSS,
  CellCSS
} from './styles';

const Grid = (props:any) => {
  const {
    board,
    handleBoardClick,
    user
  } = props;
  
  return (
    <TableCSS user={user}>
      <tbody>
        {board.map((col: ICell[], colIndex: any) => {
          return (
            <tr key={colIndex}>
              {col.map((row: ICell, rowIndex: any) => {
                return (
                  <CellCSS
                    row={row}
                    key={rowIndex} 
                    onClick={() => handleBoardClick(colIndex, rowIndex)}
                  />
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </TableCSS>
  )
}

export default Grid;
