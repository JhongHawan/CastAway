import { createSlice } from '@reduxjs/toolkit'; 

const axios = require('axios').default;

const initialState = {
  refugees: [],
  loading: false
}

const refugeeSlice = createSlice({
  name: 'refugee',
  initialState: initialState,
  reducers: {
    getDataReducer: (state, action) => {
      state.refugees = action.payload; 
    }
  }
});

export const { 
  getDataReducer,
  helloWorldReducer
} = refugeeSlice.actions;

export default refugeeSlice.reducer;