const mongoose = require("mongoose");

const deckSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Deck", deckSchema);
