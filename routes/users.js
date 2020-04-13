var express = require("express");
var router = express.Router();
const usersCtrl = require("../controllers/users");

/* GET users listing. */
router.get("/users", usersCtrl.index);

module.exports = router;
