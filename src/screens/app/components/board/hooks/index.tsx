import { useEffect, useState, useCallback } from 'react';
import * as R from 'ramda';
import { ICell, IAliveCell } from '@interfaces/boardTypes';
import { toastError } from '@utils/toastError';
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
  const [loading, setLoading] = useState(true);

  const getBoardCallback = useCallback((newBoard: ICell[][]) => {
    setBoard(newBoard);
    setLoading(false);
  }, []);

  const compareBoard = (oldBoard: ICell[][], newBoard: ICell[][]) => {
    for (let col = 0; col <= oldBoard.length; col += 1) {
      if (!R.equals(oldBoard[col], newBoard[col])) {
        return false;
      }
    }
    return true;
  }

  const onBoardUpdateCallback = useCallback((newBoard: ICell[][]) => {
    if(!compareBoard(board,newBoard)) {
      setBoard(newBoard);
    }
  }, [board]);

  useEffect(() => {
    getBoard(getBoardCallback);
    onBoardUpdate(onBoardUpdateCallback);
    return () => {
      socketOff(EVENTS.CURRENT_BOARD)
      socketOff(EVENTS.SELF)
    }
  }, [getBoardCallback, onBoardUpdateCallback])

  const isCellOwner = (cell: IAliveCell, user: IUser) => {
    const checkColorR = cell.colorR === user.colorR;
    const checkColorB = cell.colorB === user.colorB;
    const checkColorG = cell.colorG === user.colorG;
    return checkColorR && checkColorB && checkColorG;
  }

  const handleBoardClick = (col: number, row: number) => {
    try {
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
    } catch (error) {
      console.error(error);
      toastError('Unable to update cell');
    }
  }

  const generateRandomNumber = (max:number) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const handleSetShape = (shape:number[][]) => {
    try {
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
    } catch (error) {
      console.error(error);
      toastError('Unable to add shape.')
    }
  }

  return {
    loading,
    board,
    handleBoardClick,
    handleSetShape
  }
}
