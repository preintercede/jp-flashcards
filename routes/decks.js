const router = require("express").Router();
const decksCtrl = require("../controllers/decks");

router.get("/", decksCtrl.index);
router.get("/new", decksCtrl.create);

module.exports = router;
