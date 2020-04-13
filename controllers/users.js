const User = require("../models/user");

const index = (req, res, next) => {
  res.render("users/index", {
    user: req.user,
    name: req.query.name,
  });
};

module.exports = {
  index,
};
