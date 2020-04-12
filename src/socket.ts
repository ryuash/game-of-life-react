import io from 'socket.io-client';
import Cookies from 'js-cookie';
import { 
  ICell,
  IBoardClick
} from '@interfaces/boardTypes';
import { IUser } from '@interfaces/usersTypes';

export const socket = io(process.env.REACT_APP_API || 'http://localhost:8080');

export const EVENTS = {
  RECONNECT: 'reconnect',
  DISCONNECT: 'disconnect',
  ALL_USERS: 'getAllUsers',
  SELF: 'getSelf',
  USER_JOIN: 'userJoin',
  USER_ENTER_GAME: 'userEnterGame',
  USER_REENTER_GAME: 'userReenterGame',
  USER_LEFT: 'userLeft',
  CURRENT_BOARD: 'getCurrentBoard',
  CLICK_BOARD: 'clickBoard',
  BOARD_UPDATE: 'boardUpdate',
}

export const socketOff = (name: string) => (
  socket.off(name)
);

socket.on(EVENTS.RECONNECT, () => {
  const oldSocketId = Cookies.get('currentSocketId');
  socket.emit(EVENTS.USER_REENTER_GAME, oldSocketId);
})

export const getBoard = (callback: Function) => {
  socket.on(EVENTS.CURRENT_BOARD, (board: ICell[][]) => {
    callback(board);
  })
}

export const onBoardClick = (data:IBoardClick[]) => {
  socket.emit(EVENTS.CLICK_BOARD, data);
}

export const onBoardUpdate = (callback: Function) => {
  socket.on(EVENTS.BOARD_UPDATE, (board: ICell[][]) => {
    callback(board);
  })
}

export const getSelf = (callback: Function) => {
  return (
    socket.on(EVENTS.SELF, (user: IUser) => {
      Cookies.set('currentSocketId', socket.id , { expires: 1 });
      callback(user);
    })
  )
}

export const userJoinGame = (username = 'Shy Guy') => {
  return (
    socket.emit(EVENTS.USER_ENTER_GAME, username)
  )
}

export const userJoin = (callback: Function) => {
  return (
    socket.on(EVENTS.USER_JOIN, (user: IUser) => {
      callback(user);
    })
  )
}

export const userLeft = (callback:Function) => {
  return (
    socket.on(EVENTS.USER_LEFT, (socketId: string) => {
      callback(socketId);
    })
  )
}

export const getAllUsers = (callback:Function) => {
  return (
    socket.on(EVENTS.ALL_USERS, (users: IUser) => {
      callback(users);
    })
  )
}

export const onDisconnect = (callback:Function) => {
  return (
    socket.on(EVENTS.DISCONNECT, () => {
      callback();
    })
  )
};

export const disconnect = () => {
  return (
    socket.emit(EVENTS.DISCONNECT)
  )
};


export default socket;
