import { createSlice } from '@reduxjs/toolkit'; 

const axios = require('axios').default;

const initialState = {
  data: [],
  loading: false
}

const unhcrSlice = createSlice({
  name: 'unhcr',
  initialState: initialState,
  reducers: {
    unhcrDataReducer: (state, action) => {
      state.data = [...action.payload]; 
      state.loading = true; 
    }
  }
});

export const { 
   unhcrDataReducer
} = unhcrSlice.actions;

export default unhcrSlice.reducer;