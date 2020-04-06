import io from 'socket.io-client';

const socket = io('http://localhost:8080');

socket.on('connect', () => {
  console.log('Connected to server!')
})

socket.on('userJoin', (user:object) => {
  console.log(user,' - joined socket id')
})

socket.on('getAllUsers', (users:object) => {
  console.log(users, 'users')
})

export default socket;
