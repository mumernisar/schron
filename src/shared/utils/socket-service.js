import io from 'socket.io-client';
import { getStoredAuthToken } from './authToken';

export const socketService = {
  connect,
};

function connect() {
  return new Promise((resolve, reject) => {
    const socket = io(
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:5000'
        : 'https://bluetapv1.onrender.com',
      {
        query: { token: getStoredAuthToken() },
      }
    );
    socket.on('connect', () => {
      resolve(socket);
    });
  });
}
