import { combineReducers } from '@reduxjs/toolkit';
import refugeeReducer from '../features/visualization/refugeeSlice'; 
import unhcrSubReducer from '../features/visualization/unhcrSubSlice'; 
import unhcrDemoReducer from '../features/visualization/unhcrDemoSlice'; 
import validCountriesReducer from '../features/visualization/validCountriesSlice';
import dataOptionsReducer from '../features/visualization/dataOptionsSlice';


const rootReducer = combineReducers({
  // Here we have the other reducers 
  refugee : refugeeReducer,
  unhcrSub : unhcrSubReducer, 
  unhcrDemo : unhcrDemoReducer,
  validCountries : validCountriesReducer,
  dataOptionsReducer : dataOptionsReducer
});

export default rootReducer;