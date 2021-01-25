const { Schema } = require("mongoose");

const mongoose = require("mongoose");

const plantSchema = new Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    nickname: { type: String, required: true },
    type: { type: String, required: true },
    lastWatered: { type: Date, required: false },
    wateringFrequency: { type: Number, required: false },
    pottyChange: { type: Date, required: false },
    image: { data: Buffer, contentType: String, required: false },
    notes: { type: String, required: false },
    dead: { type: Boolean, required: false },
  },
  {
    timestamps: true,
  }
);

const Plant = mongoose.model("Plant", plantSchema);

module.exports = Plant;
