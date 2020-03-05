const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config()

//simple schema
const RefugeeSchema = new mongoose.Schema({
  destination: {
    type: String,
    required: true
  },
  origin: {
     type: String,
     required: true
  }, 
  year: {
     type: Date,
     required: true
  },
  value: {
     type: Number,
     required: false
  }
});

const Refugee = mongoose.model('Refugee', RefugeeSchema);

exports.Refugee = Refugee; 