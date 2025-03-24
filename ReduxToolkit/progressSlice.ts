import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Async function to save progress for any given key
export const saveProgressThunk = createAsyncThunk(
  'progress/saveProgress',
  async ({ key, lastQuestionIndex }: { key: string; lastQuestionIndex: number }) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(lastQuestionIndex));
      console.log('Successfully saved');
    } catch (e) {
      console.error('Failed to save progress', e);
    }
  }
);

// Async function to retrieve progress for a specific key
export const fetchProgress = createAsyncThunk(
  'progress/getProgress',
  async (key: string) => {
    try {
      const lastQuestionIndex = await AsyncStorage.getItem(key);
      return lastQuestionIndex ? JSON.parse(lastQuestionIndex) : 0; // Default to 0 if no progress
    } catch (e) {
      console.error('Failed to retrieve progress', e);
      return 0; // Default to 0 in case of error
    }
  }
);

// Initial state
const initialState: { progress: Record<string, number>; status: string } = {
  progress: {},
  status: 'idle',
};

// Redux slice to handle progress actions
const progressSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(saveProgressThunk.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(saveProgressThunk.fulfilled, (state) => {
        state.status = 'succeeded';
      })
      .addCase(saveProgressThunk.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(fetchProgress.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProgress.fulfilled, (state, action) => {
        state.progress[action.meta.arg] = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchProgress.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// Export the async actions
export { saveProgressThunk as saveProgress, fetchProgress as getProgress };

// Export the reducer
export default progressSlice.reducer;

