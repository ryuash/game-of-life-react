import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import Loading from '@components/loading';
import { JoinGameCSS } from './styles';
import { useJoinGameHook } from './hooks';
import CreatedBy from '../createdBy';

const JoinGame = () => {
  const {
    loading,
    username,
    handleFormChange,
    handleFormSubmit
  } = useJoinGameHook();
  return (
    <>
      <Loading active={loading} />
      <JoinGameCSS>
        <h3>[ Join Game ]</h3>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Input
              placeholder="Shy Guy"
              onChange={handleFormChange}
              value={username}
            />
            <Button type='submit'>Join Game</Button>
          </Form.Group>
        </Form>
      </JoinGameCSS>
      <CreatedBy />
    </>
  );
};

export default JoinGame;
