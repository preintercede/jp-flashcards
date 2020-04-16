const router = require("express").Router();
const decksCtrl = require("../controllers/decks");

router.get("/", decksCtrl.index);
router.get("/new", decksCtrl.new);
router.get("/:id", decksCtrl.show);
router.post("/", decksCtrl.create);

module.exports = router;
