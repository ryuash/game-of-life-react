import React from 'react';
import { TableCSS } from './styles';

const Board = () => {
  const boardLayout = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];

  return (
    <TableCSS>
      {boardLayout.map((col:any, index:any) => {
        return (
          <tr key={index}>
            {col.map((row:any, i:any) => (<td key={i} />))}
          </tr>
        )
      })}
    </TableCSS>
  );
};

export default Board;
