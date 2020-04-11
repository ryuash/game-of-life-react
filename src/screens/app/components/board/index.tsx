import React from 'react';
import { ICell } from '@interfaces/boardTypes';
import { useBoardHook } from './hooks';
import { 
  TableCSS,
  CellCSS
} from './styles';
import { IBoard } from './interface';

const Board = (props: IBoard) => {
  const {
    user
  } = props;

  const {
    board,
    handleBoardClick
  } = useBoardHook(user);
  
  return (
    <TableCSS>
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
  );
};

export default Board;
