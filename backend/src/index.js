const dotenv = require("dotenv");
const mongoose = require("mongoose");
const usersRoute = require("./routes/user.route");
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
  .connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB..."))
  .catch(err => console.error("Could not connect to MongoDB..."));


app.use(express.json());
//use users route for api/users
app.use("/api/users", usersRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));