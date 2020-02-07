const dotenv = require('dotenv')
const mongoose = require('mongoose');

dotenv.config()

//simple schema
const RefugeeSchema = new mongoose.Schema({
  population: {
    type: Number,
    required: true
  }, 
  country: {
     type: Number,
     required: true
  }
});


//custom method to generate authToken 
UserSchema.methods.generateAuthToken = function() { 
  const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, process.env.PRIVATE_KEY, { expiresIn: '30s'}); //get the private key from the config file -> environment variable
  return token;
}

const Refugee = mongoose.model('User', RefugeeSchema);

exports.Refugee = Refugee; 
