import { combineReducers } from '@reduxjs/toolkit';
import refugeeReducer from '../slices/refugeeDataSlice'; 

const rootReducer = combineReducers({
  // Here we have the other reducers 
  refugee : refugeeReducer
});

export default rootReducer;