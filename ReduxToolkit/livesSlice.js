import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  livesEnabled: true, // Default state: lives are enabled
};

// Create the slice for lives
const livesSlice = createSlice({
  name: 'lives',
  initialState,
  reducers: {
    // Set livesEnabled based on payload
    setLivesEnabled: (state, action) => {
      state.livesEnabled = action.payload;
    },
    // Toggle livesEnabled state
    toggleLives: (state) => {
      state.livesEnabled = !state.livesEnabled;
      console.log(state)
    },
  },
});

export const { setLivesEnabled, toggleLives } = livesSlice.actions;
export default livesSlice.reducer;
