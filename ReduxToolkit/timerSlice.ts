import { createSlice } from '@reduxjs/toolkit';

interface TimerState {
  isTimerEnabled: boolean;
}

const initialState: TimerState = {
  isTimerEnabled: true,
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

