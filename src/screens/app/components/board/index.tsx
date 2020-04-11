import React from 'react';
import Loading from '@components/loading';
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
    handleSetShape,
    loading
  } = useBoardHook(user);
  console.log(loading,'the loading')
  return (
    <>
      <Loading active={loading} />
      <Shapes handleSetShape={handleSetShape} />
      <Grid board={board} handleBoardClick={handleBoardClick} />
    </>
  );
};

export default Board;
