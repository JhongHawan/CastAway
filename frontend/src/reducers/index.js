import { combineReducers } from '@reduxjs/toolkit';
import refugeeReducer from '../features/visualization/refugeeSlice'; 

const rootReducer = combineReducers({
  // Here we have the other reducers 
  refugee : refugeeReducer
});

export default rootReducer;