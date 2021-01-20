const { Schema } = require("mongoose");

const mongoose = require("mongoose");

const plantSchema = new Schema(
  {
    userid: { type: String, required: false },
    nickname: { type: String, required: true },
    type: { type: String, required: true },
    wateringFrequency: { type: Number, required: false },
    pottyChange: { type: Date, default: "" },
    notes: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
