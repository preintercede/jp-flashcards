const mongoose = require("mongoose");

const deckSchema = new mongoose.Schema(
  {
    name: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId },
    cards: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Deck", deckSchema);
