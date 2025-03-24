import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import setUserNameSlice from './setUserNameSlice';
import livesReducer from '../ReduxToolkit/livesSlice';
import timerReducer from './timerSlice'; 
import soundReducer from './soundSlice';
import { coinsReducer } from './coinsSlice';

export const store = configureStore({
  reducer: {
    user: setUserNameSlice,
    lives: livesReducer,
    timer: timerReducer,
    sound: soundReducer,
    coins: coinsReducer
  }
});

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector