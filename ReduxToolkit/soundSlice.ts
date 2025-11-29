import { createSlice } from '@reduxjs/toolkit';

interface SoundState {
  isSoundEnabled: boolean;
}

const initialState: SoundState = {
  isSoundEnabled: true,
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

