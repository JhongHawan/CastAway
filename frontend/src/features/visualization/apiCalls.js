import { useDispatch,} from 'react-redux'; 
import { refugeeDataReducer } from './refugeeSlice';
import { unhcrDataReducer } from './unhcrSlice'; 

const axios = require('axios').default;

const fetchAllRefugees = (dispatch) => {
   axios
   .get('/api/refugees/refugee/origin', {
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

const unhcrSubmissions = (dispatch) => {
   axios
   .get('http://api.unhcr.org/rsq/v1/submissions', {
      params: {
         /**
         * TODO: Fill in the correct query params
         */
      }
   })
   .then(response => {
      console.log(response.status);
      // Here we get the response and dispatch with the action and the response.data is our payload. 
      // This then executes all the functionality of our action that we declared in our slice.  
      dispatch(unhcrDataReducer(response.data))   
   });
}

const unhcrDepartures = (dispatch) => {
   axios
   .get('http://api.unhcr.org/rsq/v1/departures', {
      params: {
         /**
         * TODO: Fill in the correct query params
         */
      }
   })
   .then(response => {
      console.log(response.status);
      // Here we get the response and dispatch with the action and the response.data is our payload. 
      // This then executes all the functionality of our action that we declared in our slice.  
      dispatch(unhcrDataReducer(response.data))   
   });
}

const unhcrDemographics = (dispatch) => {
   axios
   .get('http://api.unhcr.org/rsq/v1/demographics', {
      params: {
         /**
         * TODO: Fill in the correct query params
         */
      }
   })
   .then(response => {
      console.log(response.status);
      // Here we get the response and dispatch with the action and the response.data is our payload. 
      // This then executes all the functionality of our action that we declared in our slice.  
      dispatch(unhcrDataReducer(response.data))   
   });
}

const apiCalls = ({
   fetchAllRefugees: fetchAllRefugees, 
   unhcrSubmissions: unhcrSubmissions,
   unhcrDepartures: unhcrDepartures,
   unhcrDemographics: unhcrDemographics
});

export default apiCalls; 