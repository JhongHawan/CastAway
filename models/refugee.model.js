const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config()

//simple schema
const RefugeeSchema = new mongoose.Schema({
  destination_name: {
    type: String,
    required: true
  },
  origin_name: {
     type: String,
     required: true
  }, 
  year: {
     type: Array,
     required: true
  },
  persons: {
     type: Number,
     required: false
  }
});

const Refugee = mongoose.model('Refugee', RefugeeSchema);

exports.Refugee = Refugee; 