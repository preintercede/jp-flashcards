const Deck = require("../models/deck");
const Card = require("../models/card");

const index = (req, res) => {
  res.render("decks/index", {
    user: req.user,
    name: req.query.name,
  });
};

const newDeck = (req, res) => {
  res.send("decks/new");
};

const create = (req, res) => {
  const deck = new Deck(req.body);
  deck.save((err) => {
    if (err) {
      return res.redirect("/decks/new");
    }
    res.redirect(`/decks/${deck._id}`);
  });
};

module.exports = {
  index,
  new: newDeck,
  create,
};
