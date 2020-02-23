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
      state.refugees.push(axios.get('api/allRefugees').then(response => { return response.data }))
    }
  }
});

// Maybe this axios.get call should be somewhere else, like in the Visualization.js
const fetchAllRefugees = () => dispatch => {
  axios.get('api/allRefugees').then(response => {
    dispatch(refugeeSlice.actions.getData(response.data.refugees))
  });
}


export const { 
  getDataReducer,
  helloWorldReducer
} = refugeeSlice.actions;

export default refugeeSlice.reducer;