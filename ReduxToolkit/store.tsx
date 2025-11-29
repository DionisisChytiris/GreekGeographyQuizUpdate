import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import setUserNameSlice from './setUserNameSlice';
import livesReducer from './livesSlice';
import timerReducer from './timerSlice'; 
import soundReducer from './soundSlice';
import progressReducer from './progressSlice';
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;