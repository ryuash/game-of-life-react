import React from 'react';
import GlobalCSS from '@styles/globalStyles';
import { useAppHook } from './hooks';
import JoinGame from './components/joinGame';
import Board from './components/board';
import Users from './components/users';
import Shapes from './components/shapes';
import { 
  AppCSS, 
  BodyContainerCSS 
} from './styles';

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
        <BodyContainerCSS>
          <Shapes user={user} />
          <Board user={user} />
          <Users />
        </BodyContainerCSS>
      </AppCSS>
      <GlobalCSS />
    </>
  );
}

export default App;
