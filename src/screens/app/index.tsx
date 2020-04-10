import React from 'react';
import GlobalCSS from '@styles/globalStyles';
import { AppCSS } from './styles';
import Board from './components/board';
import Users from './components/users';

function App() {
  return (
    <>
      <AppCSS>
        <Board />
        <Users />
      </AppCSS>
      <GlobalCSS />
    </>
  );
}

export default App;
