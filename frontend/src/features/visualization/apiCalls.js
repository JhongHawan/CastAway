import { useDispatch,} from 'react-redux'; 
import { refugeeDataReducer } from './refugeeSlice';
import { unhcrDataReducer } from './unhcrSlice'; 

const axios = require('axios').default;

const fetchAllRefugees = (dispatch) => {
   axios
   .get('/api/refugees/origin', {
      params: {
         origin: "Iraq"
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
 * 
 * @param {UseDispatch} dispatch is the useDispatch function for the redux store.  
 * @param {String} endpoint which unhcr endpoint to hit [submission, departure, demographics] 
 */
const fetchUnhcr = (dispatch, endpoint) => {
   axios
   .get('/api/unhcr/submissions', {
      params: {
         queryType: endpoint
      }
   })
   .then(response => {
      console.log(`Success! ${response.status}`);
      console.log(response.data);
      // Here we get the response and dispatch with the action and the response.data is our payload. 
      // This then executes all the functionality of our action that we declared in our slice.  
      dispatch(unhcrDataReducer(response.data.results))   
   });
}

const apiCalls = ({
   fetchAllRefugees: fetchAllRefugees, 
   fetchUnhcr: fetchUnhcr
});

export default apiCalls; 