import React from 'react';
import GlobalCSS from '@styles/globalStyles';
import { useAppHook } from './hooks';
import JoinGame from './components/joinGame';
import Board from './components/board';
import Users from './components/users';
import CreatedBy from './components/createdBy';
import { 
  AppCSS, 
  BodyContainerCSS,
  HeaderCSS
} from './styles';

function App() {
  const {
    user,
    connected
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
          [ Conway's Game of Life ]
        </HeaderCSS>
        <BodyContainerCSS>
          <Board user={user} />
          <Users />
          <p id="status">status: {connected}</p>
        </BodyContainerCSS>
        <CreatedBy />
      </AppCSS>
      <GlobalCSS />
    </>
  );
}

export default App;
