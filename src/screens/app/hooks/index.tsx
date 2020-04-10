import { useEffect, useState, useCallback } from 'react';
import { IUser } from '@interfaces/usersTypes';
import { 
  EVENTS,
  socketOff,
  getSelf,
} from '@src/socket';

export const useAppHook = () => {
  const [user, setUser]:any = useState({});

  const getSelfCallback = useCallback((user: IUser) => {
    setUser(user);
  }, []);

  useEffect(() => {
    getSelf(getSelfCallback);
    return () => {
      socketOff(EVENTS.GET_SELF)
    }
  }, [getSelfCallback])

  return {
    user
  }
}
