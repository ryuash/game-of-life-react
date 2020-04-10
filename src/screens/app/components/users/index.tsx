import React from 'react';
import { useUsersHook } from './hooks';

const Users = () => {
  const { users } = useUsersHook();
  console.log(users,'users');
  return (
    <h1>users</h1>
  );
};

export default Users;
