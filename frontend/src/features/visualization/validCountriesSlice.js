import { createSlice } from '@reduxjs/toolkit'; 

const axios = require('axios').default;

const initialState = {
  data: [],
  loading: false
}

const validCountriesSlice = createSlice({
  name: 'validCountries',
  initialState: initialState,
  reducers: {
   validCountriesReducer: (state, action) => {
      state.loading = true; 
      state.data = [...action.payload]; 
      state.loading = false; 
    }
  }
});

export const { 
   validCountriesReducer
} = validCountriesSlice.actions;

export default validCountriesSlice.reducer;