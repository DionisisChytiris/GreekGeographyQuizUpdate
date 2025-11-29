import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'showState';

interface ShowState {
  show1: boolean;
  show2: boolean;
  show3: boolean;
  isLoaded: boolean;
}

interface AsyncStorageState {
  show1: boolean;
  show2: boolean;
  show3: boolean;
}

/**
 * Async thunk to load category lock/unlock state from AsyncStorage.
 * Returns default unlocked state (all true) if no saved state exists.
 * 
 * @returns Async thunk that resolves to the saved state object
 */
export const loadShowState = createAsyncThunk('show/loadState', async (): Promise<AsyncStorageState> => {
  const savedState = await AsyncStorage.getItem(STORAGE_KEY);
  return savedState ? JSON.parse(savedState) : { show1: true, show2: true, show3: true };
});

/**
 * Helper function to save category lock/unlock state to AsyncStorage.
 * Persists the state whenever a category lock state changes.
 * 
 * @param state - The current Redux state containing lock status
 */
const saveShowState = async (state: ShowState) => {
  const stateToSave: AsyncStorageState = { 
    show1: state.show1, 
    show2: state.show2, 
    show3: state.show3 
  };
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
};

const initialState: ShowState = {
  show1: true,
  show2: true,
  show3: true,
  isLoaded: false,
};

/**
 * Redux slice for managing category lock/unlock states.
 * Tracks which quiz categories are locked (show1, show2, show3).
 * Automatically persists state changes to AsyncStorage.
 */
const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    setShow1: (state, action: PayloadAction<boolean>) => {
      state.show1 = action.payload;
      saveShowState(state);
    },
    setShow2: (state, action: PayloadAction<boolean>) => {
      state.show2 = action.payload;
      saveShowState(state);
    },
    setShow3: (state, action: PayloadAction<boolean>) => {
      state.show3 = action.payload;
      saveShowState(state);
    },
    clearShowState: (state) => {
      state.show1 = true;
      state.show2 = true;
      state.show3 = true;
      saveShowState(state);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadShowState.fulfilled, (state, action: PayloadAction<AsyncStorageState>) => {
      state.show1 = action.payload.show1;
      state.show2 = action.payload.show2;
      state.show3 = action.payload.show3;
      state.isLoaded = true;
    });
  },
});

export const { setShow1, setShow2, setShow3, clearShowState} = showSlice.actions;
export default showSlice.reducer;

