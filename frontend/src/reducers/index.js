import { combineReducers } from '@reduxjs/toolkit';
import refugeeReducer from '../features/visualization/refugeeSlice'; 
import unhcrSubReducer from '../features/visualization/unhcrSubSlice'; 
import unhcrDemoReducer from '../features/visualization/unhcrDemoSlice'; 

const rootReducer = combineReducers({
  // Here we have the other reducers 
  refugee : refugeeReducer,
  unhcrSub : unhcrSubReducer, 
  unhcrDemo : unhcrDemoReducer, 
});

export default rootReducer;