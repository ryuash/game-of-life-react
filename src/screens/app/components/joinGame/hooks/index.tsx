import { useState } from 'react';
import { toastError } from '@utils/toastError';
import { userJoinGame } from '@src/socket';

export const useJoinGameHook = () => {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleFormChange = (e:any, { value }:any) => {
    setUsername(value);
  }

  const handleFormSubmit = () => {
    try {
      setLoading(true);
      if(username.length) {
        userJoinGame(username);
      } else {
        userJoinGame();
      }
    } catch (error) {
      toastError('Unable to join game. Please try again later.')
      setLoading(false);
    }
  }

  return {
    loading,
    username,
    handleFormChange,
    handleFormSubmit
  }
}
