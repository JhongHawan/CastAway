import { combineReducers } from '@reduxjs/toolkit';
import refugeeReducer from '../features/visualization/refugeeSlice'; 
import unhcrReducer from '../features/visualization/unhcrSlice'; 

const rootReducer = combineReducers({
  // Here we have the other reducers 
  refugee : refugeeReducer,
  unhcr : unhcrReducer
});

export default rootReducer;