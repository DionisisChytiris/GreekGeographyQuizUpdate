import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  livesEnabled: true, // Default state: lives are enabled
  heart: 3
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
    incrementHeart: (state) => {
      state.heart += 1; // Increase heart by 1
    },
    decrementHeart: (state) => {
      state.heart -= 1; // Increase heart by 1
    },
    resetLives: (state) => {
      state.heart = 3; // Reset lives to 3 when the quiz restarts
    },
  },
});

export const { setLivesEnabled, toggleLives, incrementHeart, decrementHeart, resetLives } = livesSlice.actions;
export default livesSlice.reducer;
