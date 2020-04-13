const mongoose = require("mongoose");

const deckSchema = new mongoose.Schema({
  name: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId },
});
