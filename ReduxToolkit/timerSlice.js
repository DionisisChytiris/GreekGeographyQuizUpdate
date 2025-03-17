import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isTimerEnabled: true,  // default is true (enabled)
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    toggleTimer: (state) => {
      state.isTimerEnabled = !state.isTimerEnabled;
    },
  },
});

export const { toggleTimer } = timerSlice.actions;
export default timerSlice.reducer;
