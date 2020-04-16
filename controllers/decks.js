const Deck = require("../models/deck");
const Card = require("../models/card");

// /decks "your list of decks page"
const index = (req, res) => {
  Deck.find({ user: req.user }, (err, foundDecks) => {
    console.log("found decks ");
    res.render("decks/index", { user: req.user, decks: foundDecks });
  });
};

const newDeck = (req, res) => {
  res.render("decks/new");
};

const all = (req, res) => {
  Deck.find({}, (req, res) => {
    res.render("decks/alldecks", { decks });
  });
};

const newCard = (req, res) => {
  const card = new Card(req.body);
  console.log("did it go through");
  card.save((err) => {
    if (err) {
      console.log("didnt go through");
      return res.redirect(`/decks/${req.params.id}`);
    }
    Deck.findById(req.params.id, (err, deck) => {
      deck.cards.push(card);
      console.log(card);
      deck.save((err) => {
        res.redirect(`/decks/${req.params.id}`);
      });
    });
  });
};

const create = (req, res) => {
  console.log("!!!!!" + req.body);
  req.body.user = req.user._id;
  const deck = new Deck(req.body);
  deck.name = "Default Deck Name";
  //console.log(deck.name);
  deck.save((err) => {
    if (err) return res.redirect("/decks/new");

    res.redirect(`/decks/${deck._id}`);
  });
};

const update = (req, res) => {
  console.log("update action");
  console.log(req.params.id);
  Deck.findByIdAndUpdate(req.params.id, req.body, (err, deck) => {
    if (err) {
      console.log("error");
      console.log(err);
      return res.redirect(`/decks/${deck._id}`);
    }
    console.log(deck.name);
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
  all,
  index,
  newCard,
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
