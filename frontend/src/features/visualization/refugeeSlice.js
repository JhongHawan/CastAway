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
    refugeeDataReducer: (state, action) => {
      state.loading = true; 
      state.refugees = [...action.payload];
      state.loading = false;  
    }
  }
});

export const { 
  refugeeDataReducer
} = refugeeSlice.actions;

export default refugeeSlice.reducer;