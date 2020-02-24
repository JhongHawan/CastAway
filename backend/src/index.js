const dotenv = require("dotenv");
const mongoose = require("mongoose");
const refugeeRoute = require("./routes/refugee.route");
const usersRoute = require("./routes/user.route");
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require("express");
const app = express();

dotenv.config();

if (!process.env.PRIVATE_KEY) {
  console.error("FATAL ERROR: private key is not defined.");
  process.exit(1);
}

//connect to mongodb
// we would connect our database here instead of the hardcoded string below. 
// Create an environment variable for the database to connect for mongoose. 
mongoose
  .set('useCreateIndex', true)
  .connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB database..."))
  .catch(err => console.error("Could not connect to MongoDB database..."));

// CORS Policy 
app.use(cors());

// Set the limit for file sizes and payload size. 
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}));

// api routes 
app.use("/api/users", usersRoute);
app.use("/api/refugees", refugeeRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));