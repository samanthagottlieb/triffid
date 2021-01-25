const { Schema } = require("mongoose");

const mongoose = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
});

// userSchema.virtual("id").get(function () {
//   return this._id.toHexString();
// });

// userSchema.set("toJSON", {
//   virtuals: true,
// });

// Corrected formatting of the virtuals so that it returns 'id' correctly.

module.exports = User = mongoose.model("User", userSchema);
