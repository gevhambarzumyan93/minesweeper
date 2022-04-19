import { configureStore } from '@reduxjs/toolkit';
import sweeperReducer from './mineSweeperSlice';
import createSagaMiddleware from 'redux-saga';
import mineSweeperMiddleware from './mineSweeperMiddleware';
// import { createStore, applyMiddleware } from 'redux';

// export const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    sweeper: sweeperReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([mineSweeperMiddleware]),
});
