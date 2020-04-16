const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    front: { type: String, required: true },
    back: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", cardSchema);
