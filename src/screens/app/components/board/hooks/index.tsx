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
    onBoardClick(col,row);
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

  return {
    board,
    handleBoardClick,
  }
}
