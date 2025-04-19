import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    loadHeart: (state, action) =>{
      state.heart = action.payload;
    },
  },
});


export const saveHeartAsync = (heart) => async (dispatch) => {
  try {
    await AsyncStorage.setItem('heart', JSON.stringify(heart));
  } catch (error) {
    console.error("Error saving heart to AsyncStorage", error);
  }
};

// AsyncStorage logic for saving and loading coins
export const loadHeartAsync = () => async (dispatch) => {
  try {
    const storedHeart = await AsyncStorage.getItem('heart');
    // if (storedHeart !== null) {
    //   dispatch(loadHeart(JSON.parse(storedHeart)));
    // }
    const parsedHeart = storedHeart !== null ? Number(storedHeart) : 3;

    if (parsedHeart <= 0) {
      dispatch(resetLives());
    } else {
      dispatch(loadHeart(parsedHeart));
    }
  } catch (error) {
    console.error("Error loading heart from AsyncStorage", error);
  }
};

export const { setLivesEnabled, toggleLives, incrementHeart, decrementHeart, resetLives, saveHeart, loadHeart} = livesSlice.actions;
export default livesSlice.reducer;
