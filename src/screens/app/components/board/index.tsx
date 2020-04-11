import React from 'react';
import { useBoardHook } from './hooks';
import Shapes from './components/shapes';
import Grid from './components/grid';
import { IBoard } from './interface';

const Board = (props: IBoard) => {
  const {
    user
  } = props;

  const {
    board,
    handleBoardClick,
    handleSetShape
  } = useBoardHook(user);
  
  return (
    <>
      <Shapes handleSetShape={handleSetShape} />
      <Grid board={board} handleBoardClick={handleBoardClick} />
    </>
  );
};

export default Board;
