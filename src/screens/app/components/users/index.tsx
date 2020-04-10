import React from 'react';
import { useUsersHook } from './hooks';

const Users = () => {
  // eslint-disable-next-line
  const { users } = useUsersHook();
  return (
    <h1>users</h1>
  );
};

export default Users;
