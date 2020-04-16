import { createSlice } from '@reduxjs/toolkit'; 

const axios = require('axios').default;

const initialState = {
  data: [],
  loading: false
}

const unhcrDemoSlice = createSlice({
  name: 'unhcrDemo',
  initialState: initialState,
  reducers: {
    unhcrDemoReducer: (state, action) => {
      state.loading = true; 
      state.data = [...action.payload]; 
      state.loading = false; 
    }
  }
});

export const { 
   unhcrDemoReducer
} = unhcrDemoSlice.actions;

export default unhcrDemoSlice.reducer;