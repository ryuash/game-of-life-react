import { useEffect, useState, useCallback } from 'react';
import { ICell } from '@interfaces/boardTypes';
import { IUser } from '@interfaces/usersTypes';
import { 
  EVENTS,
  socketOff,
  getBoard,
} from '@src/socket';

export const useShapesHook = (user: IUser) => {
  const [column, setColumn] = useState(0);
  const [row, setRow] = useState(0);

  const getBoardCallback = useCallback((board: ICell[][]) => {
    const columnLength = board.length - 1;
    const rowLength = board[0].length - 1;
    setColumn(columnLength);
    setRow(rowLength);
  }, []);

  useEffect(() => {
    getBoard(getBoardCallback);
    return () => {
      socketOff(EVENTS.GET_CURRENT_BOARD)
    }
  }, [getBoardCallback]);

  const generateRandomNumber = (max:number) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  const handleSetShape = (shape: ICell[][]) => {
    console.log(shape,'shape')
    const maxCol = column - (shape.length - 1);
    console.log(maxCol,'whats the max col')
    const maxRow = row - shape[0].length - 1;
    const randomCol = generateRandomNumber(maxCol);
    const randomRow = generateRandomNumber(maxCol);
    console.log(randomCol,'random col')
    console.log(randomRow,'row')
  }

  return {
    handleSetShape
  }
}
