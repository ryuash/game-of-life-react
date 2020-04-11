import React from 'react';
import GlobalCSS from '@styles/globalStyles';
import { useAppHook } from './hooks';
import JoinGame from './components/joinGame';
import Board from './components/board';
import Users from './components/users';
import { 
  AppCSS, 
  BodyContainerCSS,
  HeaderCSS
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
        <HeaderCSS>
          <h2>
            [ Conway's Game of Life ]
          </h2>
        </HeaderCSS>
        <BodyContainerCSS>
          <Board user={user} />
          <Users />
        </BodyContainerCSS>
      </AppCSS>
      <GlobalCSS />
    </>
  );
}

export default App;
