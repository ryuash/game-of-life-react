import { useEffect, useState, useCallback } from 'react';
import * as R from 'ramda';
import { ICell, IAliveCell } from '@interfaces/boardTypes';
import { IUser } from '@interfaces/usersTypes';
import { 
  EVENTS,
  socketOff,
  getBoard,
  onBoardUpdate,
  onBoardClick
} from '@src/socket';

export const useBoardHook = (user:IUser) => {
  const [board, setBoard]:any[] = useState([]);

  const getBoardCallback = useCallback((board: ICell[][]) => {
    setBoard(board);
  }, []);

  const onBoardUpdateCallback = useCallback((board: ICell[][]) => {
    setBoard(board);
  }, []);

  useEffect(() => {
    getBoard(getBoardCallback);
    onBoardUpdate(onBoardUpdateCallback);
    return () => {
      socketOff(EVENTS.GET_CURRENT_BOARD)
      socketOff(EVENTS.GET_SELF)
    }
  }, [getBoardCallback, onBoardUpdateCallback])

  const isCellOwner = (cell: IAliveCell, user: IUser) => {
    const checkColorR = cell.colorR === user.colorR;
    const checkColorB = cell.colorB === user.colorB;
    const checkColorG = cell.colorG === user.colorG;
    return checkColorR && checkColorB && checkColorG;
  }

  const handleBoardClick = (col: number, row: number) => {
    onBoardClick([{col,row}]);
    const newBoard = R.clone(board);
    const check = isCellOwner(newBoard[col][row], user);
    if (check) {
      newBoard[col][row] = 0;
    } else {
      const {
        colorR,
        colorB,
        colorG
      } = user;
  
      newBoard[col][row] = {
        value: 1,
        colorR,
        colorB,
        colorG
      }
    }
    setBoard(newBoard);
  }

  const generateRandomNumber = (max:number) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const handleSetShape = (shape:number[][]) => {
    let startCol = generateRandomNumber(board.length - (shape.length - 1));
    let startRow = generateRandomNumber(board[0].length - (shape[0].length -1));
    
    const newBoard = R.clone(board);
    const {
      colorR,
      colorB,
      colorG
    } = user;
    const updateBoardCells = [];
    
    for (let col = 0; col <= shape.length - 1; col += 1) {
      for (let row = 0; row <= shape[col].length - 1; row += 1) {
        const current = shape[col][row];
        const currentCol = startCol + col;
        const currentRow = startRow + row;
        if (current) {
          newBoard[currentCol][currentRow] = {
            value: 1,
            colorR,
            colorB,
            colorG
          }

          updateBoardCells.push({
            col: currentCol,
            row: currentRow
          });
        }
      }
    }
    onBoardClick(updateBoardCells);
    setBoard(newBoard);
  }

  return {
    board,
    handleBoardClick,
    handleSetShape
  }
}
