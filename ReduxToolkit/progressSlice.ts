import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logError } from '../utils/logger';

/**
 * Status type for progress slice async operations.
 */
type ProgressStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

/**
 * State interface for the progress slice.
 */
interface ProgressState {
  progress: Record<string, number>;
  status: ProgressStatus;
}

/**
 * Async thunk to save quiz progress for a specific category/key.
 * Saves the last completed question index to AsyncStorage.
 * 
 * @param key - The storage key (e.g., "lastQuestion1", "lastQuestion2")
 * @param lastQuestionIndex - The index of the last completed question
 * @returns Async thunk action
 */
export const saveProgressThunk = createAsyncThunk(
  'progress/saveProgress',
  async ({ key, lastQuestionIndex }: { key: string; lastQuestionIndex: number }) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(lastQuestionIndex));
    } catch (e) {
      logError('Failed to save progress', e);
    }
  }
);

/**
 * Async thunk to retrieve quiz progress for a specific category/key.
 * Returns the last completed question index, or 0 if no progress exists.
 * 
 * @param key - The storage key to retrieve progress for
 * @returns Async thunk that resolves to the question index (number)
 */
export const fetchProgress = createAsyncThunk(
  'progress/getProgress',
  async (key: string) => {
    try {
      const lastQuestionIndex = await AsyncStorage.getItem(key);
      return lastQuestionIndex ? JSON.parse(lastQuestionIndex) : 0; // Default to 0 if no progress
    } catch (e) {
      logError('Failed to retrieve progress', e);
      return 0; // Default to 0 in case of error
    }
  }
);

// Initial state
const initialState: ProgressState = {
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

