import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSoundEnabled: true, // Default sound is enabled
};

const soundSlice = createSlice({
  name: 'sound',
  initialState,
  reducers: {
    toggleSound: (state) => {
      state.isSoundEnabled = !state.isSoundEnabled;
    },
  },
});

export const { toggleSound } = soundSlice.actions;
export default soundSlice.reducer;
