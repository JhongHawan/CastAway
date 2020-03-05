const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const { Refugee } = require("../models/refugee.model");
const express = require("express");
const router = express.Router();

// Get the refugee data
router.get("/refugee/origin", async (req, res) => {

  // First check to see if the origin country exists in the dataset. 
  // Case sensitive 
  const origin = await Refugee.findOne({ origin: req.query.origin });
  if (!origin) return res.status(400).send("Origin is not found");

  const refugee = await Refugee.find({ origin: req.query.origin })
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
    destination: req.body.destination,
    origin: req.body.origin,
    year: req.body.year,
    value: req.body.value 
  });

  if (refugee) return res.status(400).send("Refugee already recorded.");

  const newRefugee = new Refugee({
    destination: req.body.destination,
    origin: req.body.origin,
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