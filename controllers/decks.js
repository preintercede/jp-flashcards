const Deck = require("../models/deck");
const Card = require("../models/card");

const index = (req, res) => {
  Deck.find({});
};

const newDeck = (req, res) => {
  res.render("decks/new");
};

module.exports = {
  index,
  new: newDeck,
  create,
};
