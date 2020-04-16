const express = require("express");
const fetch = require('node-fetch'); 
const router = express.Router();

/** 
* * Route in our backend that will call the unhcr api. 
* * Returns the response object in JSON format from unhcr endpoint. 
* TODO: Put in the correct query parameters and the /:things, . 
* TODO: Error handling for missing required params.
* Need to have the two .then() since .json() is also an async method. 
* @param {int[]} year the year query param.
* @param {String[]} origin origin country codes.
* @param {String[]} resettlement resettlement country codes.
*/
router.get('/submissions', async (req, res) => {
   const year = req.query.year.toString();
   const origin = req.query.origin.toString(); 
   const resettlement = req.query.resettlement.toString(); 
   const url = `http://api.unhcr.org/rsq/v1/submissions?page=1&year=${year}&origin=${origin}resettlement=${resettlement}`;
   console.log(`QUERY STRING: ${url}`);
   const responseData = await fetch(url)
    .then(res => res.json())
    .then(data => {return data})
    .catch(error => console.log(`Error: Could not fetch from ${url}`));
   res.send(responseData); 
});

/**
* @param {int[]} year the year query param.
* @param {String[]} origin origin country codes.
* @param {String[]} resettlement resettlement country codes.
*/
router.get('/demographics', async (req, res) => {
   const year = req.query.year.toString();
   const origin = req.query.origin.toString(); 
   const resettlement = req.query.resettlement.toString(); 
   const url = `http://api.unhcr.org/rsq/v1/demographics?page=1&year=${year}&origin=${origin}resettlement=${resettlement}`;
   console.log(`QUERY STRING: ${url}`);
   const responseData = await fetch(url)
    .then(res => res.json())
    .then(data => {return data})
    .catch(error => console.log(`Error: Could not fetch from ${url}`));
   res.send(responseData); 
});

/**
* ! Possibly remove this route since it might not even be used, seems the same as submissions. 
* @param {int[]} year the year query param.
* @param {String[]} origin origin country codes.
* @param {String[]} resettlement resettlement country codes.
*/
router.get('/departures', async (req, res) => {
   const year = req.params.year.toString();
   const origin = req.params.origin.toString(); 
   const resettlement = req.params.resettlement.toString(); 
   const url = `http://api.unhcr.org/rsq/v1/departures?page=1&year=${year}&origin=${origin}resettlement=${resettlement}`;
   const responseData = await fetch(url)
    .then(res => res.json())
    .then(data => {return data})
    .catch(error => console.log(`Error: Could not fetch from ${url}`));
   res.send(responseData); 
});

module.exports = router;