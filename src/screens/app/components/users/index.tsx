import React from 'react';
import { IUser } from '@interfaces/usersTypes';
import { useUsersHook } from './hooks';
import { 
  UsersCSS,
  UserColorCSS,
  UserContainerCSS,
  UserTitleCSS
} from './styles';

const Users = () => {
  const { users } = useUsersHook();
  return (
    <UsersCSS>
      <UserTitleCSS>
        Users
      </UserTitleCSS>
      {users.map((user: IUser) => {
        const { 
          socketId, 
          username 
        } = user;
        return(
          <UserContainerCSS key={socketId}>
            <p>{username}</p>
            <UserColorCSS user={user} />
          </UserContainerCSS>
        )
      })}
    </UsersCSS>
  );
};

export default Users;
