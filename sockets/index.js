import { startConnection, setHelp } from '../src/app/mineSweeperSlice';

const setupSocket = (dispatch) => {
  const socket = new WebSocket('wss://hometask.eg1236.com/game1/');

  socket.onopen = () => {
    dispatch(startConnection());
  };

  socket.onmessage = (event) => {
    dispatch(setHelp(event.data));
  };

  socket.onclose = () => {
    dispatch(endConnection());
  };

  socket.onerror = (err) => {
    console.log(err, '< onerror');
  };

  return socket;
};

export default setupSocket;
// socket.send('help');
