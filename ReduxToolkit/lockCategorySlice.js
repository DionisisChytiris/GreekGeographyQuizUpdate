import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

// AsyncStorage Key
const STORAGE_KEY = 'showState';

// Load state from AsyncStorage
export const loadShowState = createAsyncThunk('show/loadState', async () => {
  const savedState = await AsyncStorage.getItem(STORAGE_KEY);
  if (savedState) {
  } else {
  }
  return savedState ? JSON.parse(savedState) : {  show1: true, show2: true, show3: true };
});

// Save state to AsyncStorage
const saveShowState = async (state) => {
  const stateToSave = { show1: state.show1, show2: state.show2, show3: state.show3 };
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
  console.log('Saved to AsyncStorage:', stateToSave);
};

const initialState = {
  show1: true,
  show2: true,
  show3: true,
  isLoaded: false, // To handle loading state
};

const showSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    setShow1: (state, action) => {
      state.show1 = action.payload;
      saveShowState(state); // Save the state to AsyncStorage
      console.log('Updated show1:', state.show1);
    },
    setShow2: (state, action) => {
      state.show2 = action.payload;
      saveShowState(state); // Save the state to AsyncStorage
    },
    setShow3: (state, action) => {
      state.show3 = action.payload;
      saveShowState(state); // Save the state to AsyncStorage
    },
    clearShowState: (state) => {
      state.show1 = true;
      state.show2 = true;
      state.show3 = true;
      saveShowState(state); // Reset in AsyncStorage
      console.log('State reset to initial values');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadShowState.fulfilled, (state, action) => {
      state.show1 = action.payload.show1;
      state.show2 = action.payload.show2;
      state.show3 = action.payload.show3;
      state.isLoaded = true;
    });
  },
});

export const { setShow1, setShow2, setShow3, clearShowState} = showSlice.actions;
export default showSlice.reducer;
