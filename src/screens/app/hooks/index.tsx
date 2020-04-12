import { useEffect, useState, useCallback } from 'react';
import * as R from 'ramda';
import { IUser } from '@interfaces/usersTypes';
import { 
  EVENTS,
  socketOff,
  getSelf,
  onDisconnect,
  disconnect
} from '@src/socket';

export const useAppHook = () => {
  const [user, setUser]:any = useState({});
  const [connected, setConnection] = useState(false);

  const getSelfCallback = useCallback((self: IUser) => {
    if (!R.equals(user, self)) {
      setUser(self);
      setConnection(true);
    }
  }, [user]);

  const onDisconnectCallback = useCallback(() => {
    if(connected) {
      setConnection(false);
      disconnect();
    }
  }, [connected]);

  useEffect(() => {
    getSelf(getSelfCallback);
    onDisconnect(onDisconnectCallback);
    return () => {
      socketOff(EVENTS.SELF)
      socketOff(EVENTS.DISCONNECT)
    }
  }, [getSelfCallback, onDisconnectCallback])

  return {
    user,
    connected: connected ? 'connected' : 'not connected'
  }
}
