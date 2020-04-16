const Deck = require("../models/deck");
const Card = require("../models/card");

const index = (req, res) => {
  Deck.find({ user: req.user }, (err, foundDecks) => {
    console.log("found decks ", foundDecks);
    res.render("decks/index", { user: req.user, decks: foundDecks });
  });
};

const newDeck = (req, res) => {
  res.render("decks/new");
};

const create = (req, res) => {
  console.log("!!!!!" + req.body);
  const deck = new Deck(req.body);
  console.log(deck.name);
  deck.save((err) => {
    if (err) return res.redirect("/decks/new");

    res.redirect(`/decks/${deck._id}`);
  });
};

const update = (req, res) => {
  Deck.findByIdAndUpdate(req.params.id, (err, result) => {
    res.redirect(`/decks/${deck._id}`);
  });
};

const deleteDeck = (req, res) => {
  Deck.findByIdAndRemove(req.params.id, (err, result) => {
    res.redirect("/decks");
  });
};

const show = (req, res) => {
  user = req.user;
  Deck.findById(req.params.id)
    .populate("cards")
    .exec((err, deck) => {
      res.render("decks/show", {
        user,
        deck,
        cards: deck.cards,
      });
    });
};

module.exports = {
  index,
  new: newDeck,
  create,
  update,
  delete: deleteDeck,
  show,
};

// <% deck.cards.forEach((card){ %>
//   <h2><%=card.front %></h2>
//   <h2><%=card.back %></h2>
// <%}) %>
