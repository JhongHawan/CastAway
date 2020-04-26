import { createSlice } from '@reduxjs/toolkit'; 

const axios = require('axios').default;

const initialState = {
  origCountries: [],
  destCountries: [],
  loading: false
}

/**
 * * Gets the valid countries for origin and the destination. 
 */
const validCountriesSlice = createSlice({
  name: 'validCountries',
  initialState: initialState,
  reducers: {
   validCountriesReducer: (state, action) => {
      state.loading = true; 
      state.origCountries = [...action.payload[0].data];
      state.destCountries = [...action.payload[1].data]; 
      state.loading = false; 
    }
  }
});

export const { 
   validCountriesReducer
} = validCountriesSlice.actions;

export default validCountriesSlice.reducer;