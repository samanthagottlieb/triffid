const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const authJwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");
require("dotenv").config();

//Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(authJwt());
app.use(errorHandler);
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));

const plantsRouter = require("./routes/plants");
const usersRouter = require("./routes/users");
// Require the routes

app.use("/plants", plantsRouter);
app.use("/users", usersRouter);
// Whenever someone goes to root url / exercises it'll reditect to users router etc.

module.exports = app;
