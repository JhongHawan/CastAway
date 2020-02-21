import { createSlice } from '@reduxjs/toolkit'; 
const axios = require('axios').default;

const initialState = {
  refugees: [],
  loading: false
}

const fetchAllRefugees = () => dispatch => {
  axios.get('api/allRefugees').then(response => {
    // Don't know if this will work since the mock data for the website is just 
    // a bunch of books not in an array. 
    dispatch(refugeeSlice.actions.getData(response.data.refugees));
  });
}

const refugeeSlice = createSlice({
  name: 'refugee',
  initialState: initialState,
  reducers: {
    getData: (state, { payload }) => {
      state.loading = true 
      return { refugees: [...state.refugees, ...payload]}
    }
  }
});

export const { getData } = refugeeSlice.actions;

export default refugeeSlice.reducer;