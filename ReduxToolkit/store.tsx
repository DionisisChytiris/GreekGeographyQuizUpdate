import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import setUserNameSlice from './setUserNameSlice';
import livesReducer from '../ReduxToolkit/livesSlice';
import timerReducer from './timerSlice'; 
import soundReducer from './soundSlice';
import progressReducer from './progressSlice'
import { coinsReducer } from './coinsSlice';
import showReducer from './lockCategorySlice';

export const store = configureStore({
  reducer: {
    user: setUserNameSlice,
    lives: livesReducer,
    timer: timerReducer,
    sound: soundReducer,
    coins: coinsReducer,
    progress: progressReducer,
    show: showReducer
  }
});


export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector