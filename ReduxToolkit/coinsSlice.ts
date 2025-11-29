import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GAME_CONSTANTS } from './constants';
import type { AppDispatch } from './store';
import { logError } from '../utils/logger';

interface CoinsState {
  coins: number;
}

const initialState: CoinsState = {
  coins: GAME_CONSTANTS.DEFAULT_COINS,
};

/**
 * Redux slice for managing the user's coin balance.
 * Handles earning coins (regular rewards: 5, bonus: 50) and spending coins.
 */
const coinsSlice = createSlice({
  name: 'coins',
  initialState,
  reducers: {
    setCoins: (state, action: PayloadAction<number>) => {
      state.coins = action.payload;
    },
    incrementCoins: (state) => {
      state.coins += GAME_CONSTANTS.COIN_REWARD_REGULAR;
    },
    incrementCoinsBonus: (state) => {
      state.coins += GAME_CONSTANTS.COIN_REWARD_BONUS;
    },
    decrementCoins: (state, action: PayloadAction<number>) => {
      state.coins -= action.payload;
    },
  },
});

/**
 * Loads coins from AsyncStorage and updates the Redux store.
 * Called on app initialization to restore user's coin balance.
 * 
 * @returns Async thunk that dispatches setCoins action
 */
export const loadCoins = () => async (dispatch: AppDispatch) => {
  try {
    const storedCoins = await AsyncStorage.getItem('coins');
    if (storedCoins !== null) {
      dispatch(setCoins(Number(storedCoins)));
    }
  } catch (error) {
    logError("Error loading coins from AsyncStorage", error);
  }
};

/**
 * Saves the current coin balance to AsyncStorage for persistence.
 * 
 * @param coins - The coin amount to save
 * @returns Async thunk that saves to AsyncStorage
 */
export const saveCoins = (coins: number) => async (dispatch: AppDispatch) => {
  try {
    await AsyncStorage.setItem('coins', coins.toString());
  } catch (error) {
    logError("Error saving coins to AsyncStorage", error);
  }
};

export const { setCoins, incrementCoins, decrementCoins, incrementCoinsBonus } = coinsSlice.actions;

export const coinsReducer = coinsSlice.reducer;

