import { useEffect, useState, useCallback } from 'react';
import * as R from 'ramda';
import { IUser } from '@interfaces/usersTypes';
import { 
  EVENTS,
  socketOff,
  userJoin,
  getAllUsers,
  userLeft
} from '@src/socket';

export const useUsersHook = () => {
  const [users, setUsers]: any = useState({});

  const getAllUsersCallback = useCallback((allUsers:any) => {
    setUsers(allUsers);
  }, []);

  const userJoinCallback = useCallback((newUser:IUser) => {
    const currentUsers = R.clone(users);
    const { socketId } = newUser;
    currentUsers[socketId] = newUser;
    setUsers(currentUsers);
  }, [users]);

  const userLeftCallback = useCallback((socketId: string) => {
    const currentUsers = R.clone(users);
    delete currentUsers[socketId];
    setUsers(currentUsers);
  }, [users])

  useEffect(() => {
    userJoin(userJoinCallback);
    getAllUsers(getAllUsersCallback);
    userLeft(userLeftCallback);
    return () => {
      socketOff(EVENTS.USER_JOIN);
      socketOff(EVENTS.ALL_USERS);
      socketOff(EVENTS.USER_LEFT);
    };
  }, [userJoinCallback, userLeftCallback, getAllUsersCallback]);

  return {
    users: R.values(users)
  }
}
