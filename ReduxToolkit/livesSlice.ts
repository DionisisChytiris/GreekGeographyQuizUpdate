import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GAME_CONSTANTS } from './constants';
import type { AppDispatch } from './store';
import { logError } from '../utils/logger';

interface LivesState {
  livesEnabled: boolean;
  heart: number;
}

const initialState: LivesState = {
  livesEnabled: true,
  heart: GAME_CONSTANTS.DEFAULT_HEARTS,
};

/**
 * Redux slice for managing the lives/hearts system.
 * Handles heart count, enabling/disabling lives, and heart operations (increment, decrement, reset).
 */
const livesSlice = createSlice({
  name: 'lives',
  initialState,
  reducers: {
    setLivesEnabled: (state, action: PayloadAction<boolean>) => {
      state.livesEnabled = action.payload;
    },
    toggleLives: (state) => {
      state.livesEnabled = !state.livesEnabled;
    },
    incrementHeart: (state) => {
      state.heart += 1;
    },
    decrementHeart: (state) => {
      state.heart -= 1;
    },
    resetLives: (state) => {
      state.heart = GAME_CONSTANTS.DEFAULT_HEARTS;
    },
    loadHeart: (state, action: PayloadAction<number>) => {
      state.heart = action.payload;
    },
  },
});

/**
 * Saves the current heart count to AsyncStorage for persistence.
 * 
 * @param heart - The heart count to save
 * @returns Async thunk that saves to AsyncStorage
 */
export const saveHeartAsync = (heart: number) => async (dispatch: AppDispatch) => {
  try {
    await AsyncStorage.setItem('heart', JSON.stringify(heart));
  } catch (error) {
    logError("Error saving heart to AsyncStorage", error);
  }
};

/**
 * Loads heart count from AsyncStorage and updates Redux store.
 * If stored hearts are <= 0, resets to default value (3).
 * Called on app initialization to restore user's heart count.
 * 
 * @returns Async thunk that dispatches loadHeart or resetLives action
 */
export const loadHeartAsync = () => async (dispatch: AppDispatch) => {
  try {
    const storedHeart = await AsyncStorage.getItem('heart');
    const parsedHeart = storedHeart !== null ? Number(storedHeart) : GAME_CONSTANTS.DEFAULT_HEARTS;

    if (parsedHeart <= GAME_CONSTANTS.MIN_HEARTS) {
      dispatch(resetLives());
    } else {
      dispatch(loadHeart(parsedHeart));
    }
  } catch (error) {
    logError("Error loading heart from AsyncStorage", error);
  }
};

export const { setLivesEnabled, toggleLives, incrementHeart, decrementHeart, resetLives, loadHeart} = livesSlice.actions;
export default livesSlice.reducer;

