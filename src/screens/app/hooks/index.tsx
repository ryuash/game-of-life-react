import { useEffect, useState, useCallback } from 'react';
import { IUser } from '@interfaces/usersTypes';
import { 
  EVENTS,
  socketOff,
  getSelf,
  onDisconnect
} from '@src/socket';

export const useAppHook = () => {
  const [user, setUser]:any = useState({});
  const [connected, setConnection] = useState(false);

  const getSelfCallback = useCallback((user: IUser) => {
    setUser(user);
    setConnection(true);
  }, []);

  const onDisconnectCallback = useCallback(() => {
    setConnection(false);
  }, []);

  useEffect(() => {
    getSelf(getSelfCallback);
    onDisconnect(onDisconnectCallback);
    return () => {
      socketOff(EVENTS.SELF)
      socketOff(EVENTS.DISCONNECT)
    }
  }, [getSelfCallback])

  return {
    user,
    connected: connected ? 'connected' : 'not connected'
  }
}
