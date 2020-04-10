import { useEffect, useState, useCallback } from 'react';
import * as R from 'ramda';
import { ICell } from '@interfaces/boardTypes';
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

  const handleBoardClick = (col: number, row: number) => {
    onBoardClick(col,row);
    const newBoard = R.clone(board);
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
    setBoard(newBoard);
  }

  return {
    board,
    handleBoardClick,
  }
}
