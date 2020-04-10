import io from 'socket.io-client';

export const socket = io('http://localhost:8080');

export const EVENTS = {
  CONNECT: 'connect',
  USER_JOIN: 'userJoin',
  GET_ALL_USERS: 'getAllUsers',
  USER_LEFT: 'userLeft',
  GET_BOARD: 'getBoard'
}

export const socketOff = (name:string) => (
  socket.off(name)
);

export const getBoard = (callback:Function) => {
  socket.on(EVENTS.GET_BOARD, (board:any[][]) => {
    callback(board);
  })
}

export const onConnect = () => {
  return (
    socket.on(EVENTS.CONNECT, () => {
      console.log('Connected to server!')
    })
  )
}

export const userJoin = (callback:Function) => {
  return (
    socket.on(EVENTS.USER_JOIN, (user:object) => {
      callback(user);
    })
  )
}

export const userLeft = (callback:Function) => {
  return (
    socket.on(EVENTS.USER_LEFT, (socketId:string) => {
      callback(socketId);
    })
  )
}

export const getAllUsers = (callback:Function) => {
  return (
    socket.on(EVENTS.GET_ALL_USERS, (users:object) => {
      callback(users);
    })
  )
}


export default socket;
