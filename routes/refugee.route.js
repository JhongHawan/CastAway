const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const { Refugee } = require("../models/refugee.model");
const express = require("express");
const router = express.Router();

/**
* * Get the Refugee Route 
* ! POSSIBLY DEPRECATE THE WHOLE ROUTE IN FAVOR OF UNHCR API
*/
router.get("/origin_name", async (req, res) => {

  // First check to see if the origin_name country exists in the dataset. 
  // Case sensitive 
  const origin_name = await Refugee.findOne({ origin_name: req.query.origin_name });
  if (!origin_name) return res.status(400).send("origin_name is not found");

  const refugee = await Refugee.find({ origin_name: req.query.origin_name })
  res.send(refugee);
});

// Gets all of the information on refugee populations. 
router.get("/allRefugees", async (req, res) => {
  const refugee = await Refugee.find();
  res.send(refugee);
});

router.post("/upload", async (req, res) => {
  // find an existing refugee and no duplicates for database. 
  let refugee = await Refugee.findOne({ 
    destination_name: req.body.destination_name,
    origin_name: req.body.origin_name,
    year: req.body.year,
    value: req.body.value 
  });

  if (refugee) return res.status(400).send("Refugee already recorded.");

  const newRefugee = new Refugee({
    destination_name: req.body.destination_name,
    origin_name: req.body.origin_name,
    year: req.body.year,
    value: req.body.value
  }); 

  try {
    await newRefugee.save();
    res.send({
      _id: newRefugee._id,
      status: 'Successfully Uploaded New Refugee!'
    });
  } catch (err) {
    res.status(400).send(error);
  }

});

router.post("/uploadMany", async (req, res) => {
  try {
    await Refugee.create(req.body.batch);
    res.send({
      status: 'Successfully Uploaded Multiple New Refugee!',
      batch: req.body.batch
    });
  } catch (err) {
    res.status(400).send(error);
  }

});

module.exports = router;