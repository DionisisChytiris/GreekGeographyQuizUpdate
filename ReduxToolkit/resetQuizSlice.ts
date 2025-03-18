import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  resetQuiz: null as (() => void) | null,
};

const resetSlice = createSlice({
  name: 'reset',
  initialState,
  reducers: {
    setResetQuiz: (state, action) => {
      state.resetQuiz = action.payload;
    },
    clearResetQuiz: (state) => {
      state.resetQuiz = null;
    },
  },
});

export const { setResetQuiz, clearResetQuiz } = resetSlice.actions;
export default resetSlice.reducer;
