var express = require("express");
var router = express.Router();
const usersCtrl = require("../controllers/users");

/* GET users listing. */

router.get("/", (req, res) => {
  res.redirect("/users");
});

router.get("/users", usersCtrl.index);

module.exports = router;
