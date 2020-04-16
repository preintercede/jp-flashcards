const router = require("express").Router();
const decksCtrl = require("../controllers/decks");

router.get("/", decksCtrl.index);
router.get("/new", decksCtrl.create);
router.get("/:id", decksCtrl.show);
router.get("/all", decksCtrl.all);
// router.post("/new", decksCtrl.create);
router.post("/:id/cards", decksCtrl.newCard);
router.put("/:id", decksCtrl.update);

module.exports = router;
