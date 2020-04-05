import io from 'socket.io-client';

const socket = io('http://localhost:8080');

socket.on('connect', () => {
  console.log('Connected to server!')
})

socket.on('joinGame', (socketId:string) => {
  console.log(socketId,' - joined socket id')
})

export default socket;
