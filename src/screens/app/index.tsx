import React from 'react';
import GlobalCSS from '@styles/globalStyles';
import { AppCSS } from './styles';
import { useAppHook } from './hooks';
import JoinGame from './components/joinGame';
import Board from './components/board';
import Users from './components/users';

function App() {
  const {
    user
  } = useAppHook();
  if (!user.socketId) {
    return (
      <JoinGame />
    )
  }
  return (
    <>
      <AppCSS>
        <Board user={user} />
        <Users />
      </AppCSS>
      <GlobalCSS />
    </>
  );
}

export default App;
