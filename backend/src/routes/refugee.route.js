const auth = require("../middleware/auth");
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user.model");
const { Refugee } = require("../models/refugee.model");
const express = require("express");
const router = express.Router();

// auth middleware checks for valid jwt authtoken. 
router.get("/current", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

router.post("/upload", async (req, res) => {
  // validate the request body first
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email is not found");

  // check if password is correct
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send("Invalid password");

  try {
    await user.save();
    const token = user.generateAuthToken();
    res.header("x-auth-token", token).send({
      _id: user._id,
      status: 'Logged in'
    });
  } catch (err) {
    res.status(400).send(error);
  }
});

// Get the refugee data
router.get("/data", async (req, res) => {
   const refugee = await Refugee.findById(req.user._id).select("-password");
   res.send(refugee);
});

module.exports = router;