const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authJwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(authJwt());
app.use(errorHandler);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const plantsRouter = require("./routes/plants");
const usersRouter = require("./routes/users");
// Require the routes

app.use("/plants", plantsRouter);
app.use("/users", usersRouter);
// Whenever someone goes to root url / exercises it'll reditect to users router etc.

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
