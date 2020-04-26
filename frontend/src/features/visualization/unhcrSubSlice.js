import { createSlice } from '@reduxjs/toolkit'; 

const axios = require('axios').default;

const initialState = {
  data: [],
  loading: false
}

const unhcrSubSlice = createSlice({
  name: 'unhcrSub',
  initialState: initialState,
  reducers: {
    unhcrSubReducer: (state, action) => {
      console.log(action.payload)
      state.loading = true; 
      state.data = [...action.payload]; 
      state.loading = false; 
    }
  }
});

export const { 
   unhcrSubReducer
} = unhcrSubSlice.actions;

export default unhcrSubSlice.reducer;