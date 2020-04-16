const express = require("express");
const fetch = require('node-fetch'); 
const router = express.Router();

/** 
* * Route in our backend that will call the unhcr api. 
* * Returns the response object in JSON format from unhcr endpoint. 
* TODO: Put in the correct query parameters and the /:things. 
* TODO: Error handling for missing required params.
* Need to have the two .then() since .json() is also an async method. 
*/
router.get('/submissions', async (req, res) => {
   const url = `http://api.unhcr.org/rsq/v1/submissions?page=1&year=2016&origin=SYR&asylum=JOR&resettlement=NOR`;
   const responseData = await fetch(url)
    .then(res => res.json())
    .then(data => {return data})
    .catch(error => console.log(`Error: Could not fetch from ${url}`));
   res.send(responseData); 
});

router.get('/departures', async (req, res) => {
   const url = `http://api.unhcr.org/rsq/v1/departures?page=1&year=2016&origin=SYR&asylum=JOR&resettlement=NOR`;
   await fetch(url)
    .then(res => res.json())
    .then(res.send(res));
});

router.get('/demographics', async (req, res) => {
   const url = `http://api.unhcr.org/rsq/v1/demographics?page=1&year=2016&origin=SYR&asylum=JOR&resettlement=NOR`;
   await fetch(url)
    .then(res => res.json())
    .then(json => console.log(json));
   res.send();
});


module.exports = router;