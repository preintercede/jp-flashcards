const Card = require("../models/card");

const add = (req, res) => {
  Card.create(req.body, (err, createdCard) => {
    console.log(createdCard);
  });
};

const update = (req, res) => {
  Card.findByIdAndUpdate(req.params.id, req.body, (err, card) => {
    if (err) return res.redirect(`/decks/${deck._id}`);
    res.redirect(`/deck/${card.deck._id}`);
  });
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.id, (err, result) => {
    res.redirect(`/decks/${result.deck._id}`);
  });
};

module.exports = {
  update,
  delete: deleteCard,
};
