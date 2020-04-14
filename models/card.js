const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    decks: [],
    front: String,
    back: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", cardSchema);
