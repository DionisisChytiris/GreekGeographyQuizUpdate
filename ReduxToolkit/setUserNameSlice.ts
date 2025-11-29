import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserState {
  name: string;
  status: 'idle' | 'loading' | 'failed';
}

/**
 * Async thunk to load user's name from AsyncStorage.
 * Returns empty string if no name is stored.
 * 
 * @returns Async thunk that resolves to the user's name (string)
 */
export const loadName = createAsyncThunk('user/loadName', async (): Promise<string> => {
  const savedName = await AsyncStorage.getItem('userName');
  return savedName || '';
});

/**
 * Redux slice for managing user profile name.
 * Handles setting and loading user name with AsyncStorage persistence.
 */
export const setUserNameSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    status: 'idle' as const,
  } as UserState,
  reducers: {
    setNameInput: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      AsyncStorage.setItem('userName', action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadName.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadName.fulfilled, (state, action: PayloadAction<string>) => {
        state.name = action.payload;
        state.status = 'idle';
      })
      .addCase(loadName.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setNameInput } = setUserNameSlice.actions;
export default setUserNameSlice.reducer;

