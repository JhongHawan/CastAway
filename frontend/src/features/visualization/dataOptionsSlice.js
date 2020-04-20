import { createSlice } from '@reduxjs/toolkit'; 

const axios = require('axios').default;

const initialState = {
  chartType: '',
  year: [],
  origin: [],
  resettlement: []
}

/**
 * * Gets the user options from the input.
 * TODO: Figure out what to set the state to in the reducer.  
 */
const dataOptionsSlice = createSlice({
  name: 'validCountries',
  initialState: initialState,
  reducers: {
   dataOptionsReducer: (state, action) => {
     console.log(action.payload)
      state.chartType = [...action.payload];
      state.year = [...action.payload]; 
      state.origin = [...action.payload];
      state.resettlement = [...action.payload];
    }
  }
});

export const { 
   dataOptionsReducer
} = dataOptionsSlice.actions;

export default dataOptionsSlice.reducer;