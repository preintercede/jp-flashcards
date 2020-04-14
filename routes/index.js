var express = require("express");
var router = express.Router();
var passport = require("passport");
/* GET home page. */

router.get("/", (req, res) => {
  res.redirect("/users");
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/decks",
    failureRedirect: "/users",
  })
);

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/users");
});

module.exports = router;
