import { useDispatch,} from 'react-redux'; 
import { refugeeDataReducer } from './refugeeSlice';
import { unhcrSubReducer } from './unhcrSubSlice'; 
import { unhcrDemoReducer } from './unhcrDemoSlice';
import { validCountriesReducer } from './validCountriesSlice';  

const axios = require('axios').default;

/**
 * ! Possibly remove and have database only hold data for other pages. 
 * @param {UseDispatch} dispatch is the useDispatch function for the redux store.  
 */
const fetchAllRefugees = (dispatch) => {
   axios
   .get('/api/refugees/origin_name', {
      params: {
         origin_name: "Iraq"
      }
   })
   .then(response => {
      console.log(response.status);
      // Here we get the response and dispatch with the action and the response.data is our payload. 
      // This then executes all the functionality of our action that we declared in our slice.  
      dispatch(refugeeDataReducer(response.data))   
   });
}

/**
 * * Fetches from two different UNHCR endpoints.
 * * One for countries of origins for refugees
 * * One for destination countries for refugees 
 * @param {UseDispatch} dispatch is the useDispatch function for the redux store.  
 */
 const fetchValidCountries = (dispatch) => {
   axios.all([
      axios.get('/api/unhcr/origins/submissions'),
      axios.get('/api/unhcr/destinations')
   ])
   .then(responses => {
      dispatch(validCountriesReducer(responses))
   });
   // axios
   // .get('/api/unhcr/origins/submissions')
   // .then(response => {
   //    console.log(`Success! ${response.status}`);
   //    // Here we get the response and dispatch with the action and the response.data is our payload. 
   //    // This then executes all the functionality of our action that we declared in our slice.  
   //    dispatch(validCountriesReducer(response.data))   
   // });
}

/**
 * 
 * @param {UseDispatch} dispatch is the useDispatch function for the redux store.  
 */
const fetchUnhcrSub = (dispatch, options) => {
   console.log(options.year)
   axios
   .get('/api/unhcr/submissions', {
      params: {
         year: options.year, 
         origin: options.origin,
         resettlement: options.resettlement
      }
   })
   .then(response => {
      console.log(`Success! ${response.status}`);
      // Here we get the response and dispatch with the action and the response.data is our payload. 
      // This then executes all the functionality of our action that we declared in our slice.  
      dispatch(unhcrSubReducer(response.data.results))   
   });
}

/**
 * TODO: Add another fetch call for the demographics here. 
 */
 const fetchUnhcrDemo = (dispatch, options) => {
   console.log(options.year)
   axios
   .get('/api/unhcr/demographics', {
      params: {
         year: options.year, 
         origin: options.origin,
         resettlement: options.resettlement
      }
   })
   .then(response => {
      console.log(`Success! ${response.status}`);
      // Here we get the response and dispatch with the action and the response.data is our payload. 
      // This then executes all the functionality of our action that we declared in our slice.  
      dispatch(unhcrDemoReducer(response.data.results))   
   });
}

const apiCalls = ({
   fetchAllRefugees: fetchAllRefugees, 
   fetchUnhcrSub: fetchUnhcrSub,
   fetchUnhcrDemo: fetchUnhcrDemo,
   fetchValidCountries: fetchValidCountries
});

export default apiCalls; 