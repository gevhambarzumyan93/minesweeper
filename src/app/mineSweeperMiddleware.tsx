import { Middleware } from 'redux';
import { getHelp } from './mineSweeperSlice';
import setupSocket from '../../sockets';

let socket: WebSocket;

const mineSweeperMiddleware: Middleware = (store) => (next) => (action) => {
  const { isConntected } = store.getState().sweeper;
  if (!isConntected) {
    socket = setupSocket(store.dispatch);
  }

  if (getHelp.match(action) && isConntected) {
    //   @ts-ignore
    socket.send('help');
  }

  next(action);
};

export default mineSweeperMiddleware;
