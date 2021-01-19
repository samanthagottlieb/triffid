const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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
  console.log(`Sever is running on port ${port}`);
});
